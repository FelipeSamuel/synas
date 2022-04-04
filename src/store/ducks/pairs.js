import { USER_PAIR, USER_PAIRS } from '../../constants/variables';

//ACTION TYPES
export const Types = {
  SET_PAIRS: 'pairs/SET_PAIRS',
  SET_PAIR: 'pairs/SET_PAIR',
  SET_CLOSE_MODAL: 'pairs/SET_CLOSE_MODAL',
  SET_OPEN_MODAL: 'pairs/SET_OPEN_MODAL',
};

//reducer
const initialState = {
  pairs: localStorage.getItem(USER_PAIRS)
    ? JSON.parse(localStorage.getItem(USER_PAIRS))
    : [],
  pair: localStorage.getItem(USER_PAIR)
    ? JSON.parse(localStorage.getItem(USER_PAIR))
    : null,
  isDeleteModalOpen: false,
  pairToDelete: null,
};

const pairs = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_PAIRS:
      return {
        ...state,
        pairs: action.payload.data,
      };

    case Types.SET_PAIR:
      return {
        ...state,
        pair: action.payload.data,
      };

    case Types.SET_CLOSE_MODAL:
      return {
        ...state,
        isDeleteModalOpen: false,
      };

    case Types.SET_OPEN_MODAL:
      return {
        ...state,
        isDeleteModalOpen: true,
        pairToDelete: action.payload,
      };

    default:
      return state;
  }
};

export default pairs;

//Action Creators

export const Creators = {
  setPairs: (data) => ({
    type: Types.SET_PAIRS,
    payload: { data },
  }),
  setPair: (data) => ({
    type: Types.SET_PAIR,
    payload: { data },
  }),
  openModal: (id) => ({
    type: Types.SET_OPEN_MODAL,
    payload: id,
  }),
  closeModal: () => ({
    type: Types.SET_CLOSE_MODAL,
  }),
};
