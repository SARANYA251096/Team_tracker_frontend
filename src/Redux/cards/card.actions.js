import axios from "axios";
import { BASE_URL } from "../../config";
import { store } from "../store";
import { LOGOUT } from "../users/user.types";
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

export const getCards = () => async (dispatch) => {
  const { token } = store.getState().userReducer;

  dispatch({ type: GET_CARDS_LOADING });
  try {
    const res = await axios(BASE_URL + "/card", {
      method: "get",
      headers: {
        Authorization: token,
      },
    });

    const { status, message, data } = res.data;
    console.log(message);

    if (status === 1) {
      dispatch({ type: GET_CARDS_SUCCESS, payload: data });
    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: GET_CARDS_ERROR });
    }
  } catch (error) {
    console.error("Error in getCards:", error);
    dispatch({ type: GET_CARDS_ERROR });
  }
};

export const createCards = (obj) => async (dispatch) => {
  const { token } = store.getState().userReducer;

  dispatch({ type: CREATE_CARDS_LOADING });
  try {
    const res = await axios(BASE_URL + "/card/create", {
      method: "post",
      data: obj,
      headers: {
        Authorization: token,
      },
    });

    const { status, message } = res.data;
    console.log(message);

    if (status === 1) {
      dispatch({ type: CREATE_CARDS_SUCCESS });
      dispatch(getCards());
    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: CREATE_CARDS_ERROR });
    }
  } catch (error) {
    console.error("Error in createCards:", error);
    dispatch({ type: CREATE_CARDS_ERROR });
  }
};

export const deleteCards = (id) => async (dispatch) => {
  const { token } = store.getState().userReducer;

  dispatch({ type: DELETE_CARDS_LOADING });
  try {
    const res = await axios(BASE_URL + "/card/delete", {
      method: "delete",
      headers: {
        Authorization: token,
        id: id,
      },
    });
    console.log("Delete Response:", res.data);

    const { status, message } = res.data;
    console.log(message);

    if (status === 1) {
      dispatch({ type: DELETE_CARDS_SUCCESS });
      dispatch(getCards());
      console.log("Deleted successfully");

    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: DELETE_CARDS_ERROR });
    }
  } catch (error) {
    console.log("Error in deleteCards:", error);
    dispatch({ type: DELETE_CARDS_ERROR });
  }
};

export const updateCards = (id, obj) => async (dispatch) => {
  const { token } = store.getState().userReducer;

  dispatch({ type: UPDATE_CARDS_LOADING });
  try {
    const res = await axios(BASE_URL + "/card/edit", {
      method: "put",
      data: obj,
      headers: {
        Authorization: token,
        id: id,
      },
    });

    const { status, message } = res.data;
    console.log(message);

    if (status === 1) {
      dispatch({ type: UPDATE_CARDS_SUCCESS });
      dispatch(getCards());
    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: UPDATE_CARDS_ERROR });
    }
  } catch (error) {
    console.error("Error in updateCards:", error);
    dispatch({ type: UPDATE_CARDS_ERROR });
  }
};
