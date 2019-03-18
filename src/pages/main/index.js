import React, { Component, Fragment } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DeveloperActions } from '../../store/ducks/developer';

import Modal from '../../components/modal';

class Main extends Component {
  state = {
    viewport: {
      width: 'auto',
      height: window.innerHeight,
      latitude: -20.473885,
      longitude: -54.613905,
      zoom: 11,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.resizeViewport);
    this.resizeViewport();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeViewport);
  }

  resizeViewport = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: 'auto',
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    const { showModalDeveloper } = this.props;
    const [longitude, latitude] = e.lngLat;
    showModalDeveloper({ latitude, longitude });
  };

  notifyErro = msg => toast.error(msg, {
    position: toast.POSITION.TOP_CENTER,
  });

  notifySuccess = msg => toast.success(msg, {
    position: toast.POSITION.TOP_CENTER,
  });

  render() {
    const { viewport: vPort } = this.state;
    const { developers } = this.props;
    return (
      <Fragment>
        <ReactMapGL
          {...vPort}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOXACCESSTOKEN}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {developers.data.map(developer => (
            <Marker
              latitude={developer.latitude}
              longitude={developer.longitude}
              key={developer.id}
            >
              <img
                style={{
                  borderRadius: 100,
                  width: 48,
                  height: 48,
                }}
                src={developer.img}
                alt="avatar"
              />
            </Marker>
          ))}
        </ReactMapGL>
        {!!developers.error && this.notifyErro(developers.error)}
        {!!developers.msg && this.notifySuccess(developers.msg)}

        {developers.modalDeveloper && <Modal />}
      </Fragment>
    );
  }
}

Main.propTypes = {
  showModalDeveloper: PropTypes.func.isRequired,
  developers: PropTypes.shape({
    modalDeveloper: PropTypes.bool,
    msg: PropTypes.string,
    error: PropTypes.string,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        latitude: PropTypes.number,
        longitude: PropTypes.number,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  developers: state.developers,
});

const mapDispatchToProps = dispatch => bindActionCreators(DeveloperActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
