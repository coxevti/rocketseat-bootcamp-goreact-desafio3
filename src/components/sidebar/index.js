import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, BoxDev } from './style';

import { Creators as DeveloperActions } from '../../store/ducks/developer';

class Sidebar extends Component {
  handleRemoveDeveloper = (id) => {
    const { removeDeveloper } = this.props;
    removeDeveloper(id);
  };

  render() {
    const { developers } = this.props;
    return (
      <Container>
        {developers.data.map(developer => (
          <BoxDev key={developer.id}>
            <div>
              <img src={developer.img} alt="avatar" />
              <div>
                <h1>{developer.name}</h1>
                <small>{developer.login}</small>
              </div>
            </div>
            <div>
              <button type="button">
                <i className="fas fa-map-marker-alt" />
              </button>
              <button type="button" onClick={() => this.handleRemoveDeveloper(developer.id)}>
                <i className="fas fa-times" />
              </button>
            </div>
          </BoxDev>
        ))}
      </Container>
    );
  }
}

Sidebar.propTypes = {
  removeDeveloper: PropTypes.func.isRequired,
  developers: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        img: PropTypes.string,
        login: PropTypes.string,
        latitude: PropTypes.number,
        longitude: PropTypes.number,
      }).isRequired,
    ),
  }).isRequired,
};

const mapStateToProps = state => ({
  developers: state.developers,
});

const mapDispatchToProps = dispatch => bindActionCreators(DeveloperActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
