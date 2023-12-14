import {
  CREATE_CARDS_ERROR,
  CREATE_CARDS_LOADING,
  CREATE_CARDS_SUCCESS,
  DELETE_CARDS_ERROR,
  DELETE_CARDS_LOADING,
  DELETE_CARDS_SUCCESS,
  GET_CARDS_ERROR,
  GET_CARDS_LOADING,
  GET_CARDS_SUCCESS,
  UPDATE_CARDS_ERROR,
  UPDATE_CARDS_LOADING,
  UPDATE_CARDS_SUCCESS,
} from "./card.types";

let initialState = {
  loading: false,
  error: false,
  data: [],
};

export const cardReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CARDS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_CARDS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }

    case GET_CARDS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case CREATE_CARDS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case CREATE_CARDS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }

    case CREATE_CARDS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case UPDATE_CARDS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case UPDATE_CARDS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }

    case UPDATE_CARDS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case DELETE_CARDS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case DELETE_CARDS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }

    case DELETE_CARDS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
