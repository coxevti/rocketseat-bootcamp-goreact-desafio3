import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DeveloperActions } from '../../store/ducks/developer';
import {
  Flex, ModalContainer, ContentModal, Button, FooterModal,
} from './style';

class Modal extends Component {
  static propTypes = {
    closeModalDeveloper: PropTypes.func.isRequired,
    addDeveloperRequest: PropTypes.func.isRequired,
    lngLat: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
  }

  state = {
    developerInput: '',
  };

  componentDidMount() {
    this.nameRef.current.focus();
  }

  handleClose = () => {
    const { closeModalDeveloper } = this.props;
    closeModalDeveloper();
  };

  handleDeveloper = (e) => {
    e.preventDefault();
    const { addDeveloperRequest, lngLat } = this.props;
    const { developerInput } = this.state;
    addDeveloperRequest({ developerInput, lngLat });
  };

  render() {
    const { developerInput } = this.state;
    return (
      <Flex>
        <ModalContainer>
          <Flex>
            <ContentModal>
              <div className="content">
                <h2>Adicionar novo usuario</h2>
                <form onSubmit={this.handleDeveloper}>
                  <input
                    type="text"
                    placeholder="usuario"
                    ref={this.nameRef}
                    value={developerInput}
                    onChange={e => this.setState({ developerInput: e.target.value })}
                  />
                  <FooterModal>
                    <Button className="success" type="submit">
                      Salvar
                    </Button>
                    <Button className="danger" type="button" onClick={this.handleClose}>
                      Cancelar
                    </Button>
                  </FooterModal>
                </form>
              </div>
            </ContentModal>
          </Flex>
        </ModalContainer>
      </Flex>
    );
  }
}

const mapStateToProps = state => ({
  lngLat: state.developers.lngLat,
});

const mapDispatchToProps = dispatch => bindActionCreators(DeveloperActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
