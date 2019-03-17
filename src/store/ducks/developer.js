/**
 * Actions Types
 */
export const Types = {
  SHOW_MODAL: 'developers/SHOW_MODAL',
  CLOSE_MODAL: 'developer/CLOSE_MODAL',
  ADD_REQUEST: 'developer/ADD_REQUEST',
  ADD_SUCCESS: 'developer/ADD_SUCCESS',
  ADD_FAILURE: 'developer/ADD_FAILURE',
  REMOVE_REQUEST: 'developer/REMOVE_REQUEST',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  loading: false,
  msg: null,
  error: null,
  modalDeveloper: false,
  lngLat: [],
  data: [],
};

export default function developers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        msg: null,
      };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        modalDeveloper: false,
        error: null,
        loading: false,
        msg: action.payload.msg,
        data: [...state.data, action.payload.data],
      };
    case Types.ADD_FAILURE:
      return { ...state, error: action.payload.error, msg: null };
    case Types.SHOW_MODAL:
      return {
        ...state,
        msg: null,
        modalDeveloper: true,
        lngLat: action.payload.lngLat,
      };
    case Types.CLOSE_MODAL:
      return {
        ...state,
        modalDeveloper: false,
        error: null,
        msg: null,
      };
    case Types.REMOVE_REQUEST:
      return {
        ...state,
        msg: 'Usuario excluido com sucesso.',
        error: null,
        data: state.data.filter(developer => developer.id !== action.payload.id),
      };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  showModalDeveloper: lngLat => ({
    type: Types.SHOW_MODAL,
    payload: { lngLat },
  }),
  closeModalDeveloper: () => ({
    type: Types.CLOSE_MODAL,
  }),
  addDeveloperRequest: developer => ({
    type: Types.ADD_REQUEST,
    payload: { developer },
  }),
  addDeveloperSuccess: (data, msg) => ({
    type: Types.ADD_SUCCESS,
    payload: { data, msg },
  }),
  addDeveloperFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
  removeDeveloper: id => ({
    type: Types.REMOVE_REQUEST,
    payload: { id },
  }),
};
