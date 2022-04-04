import {
  COMPATIBILITY_TOKEN,
  USER_COMPATIBILITY,
} from '../../constants/variables';

//ACTION TYPES
export const Types = {
  SET_COMPATIBILITY: 'compatibility/SET_COMPATIBILITY',
  SET_TOKEN: 'compatibility/SET_TOKEN',
};

//reducer
const initialState = {
  compatibility: localStorage.getItem(USER_COMPATIBILITY)
    ? JSON.parse(localStorage.getItem(USER_COMPATIBILITY))
    : null,
  compatibilityToken: localStorage.getItem(COMPATIBILITY_TOKEN) ?? null,
};

const compatibility = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_COMPATIBILITY:
      return {
        ...state,
        compatibility: action.payload.data,
      };
    case Types.SET_TOKEN:
      return {
        ...state,
        compatibilityToken: action.payload.data,
      };
    default:
      return state;
  }
};

export default compatibility;

//Action Creators

export const Creators = {
  setCompatibility: (data) => ({
    type: Types.SET_COMPATIBILITY,
    payload: { data },
  }),
  setCompatibilityToken: (data) => ({
    type: Types.SET_TOKEN,
    payload: { data },
  }),
};
