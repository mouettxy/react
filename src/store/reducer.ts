import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction } from './me/actions';
import { Reducer } from "redux";
import { meReducer, MeState } from './me/reducer';
import { SetTokenAction, SET_TOKEN } from './token/actions';
import { tokenReducer } from './token/reducer';

export type RootState = {
  token: string;
  me: MeState;
};

const initialState: RootState = {
  token: "",
  me: {
    loading: false,
    error: '',
    data: {}
  }
};

type MyAction = SetTokenAction | MeRequestAction | MeRequestErrorAction | MeRequestSuccessAction
export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: tokenReducer(state.token, action)
      }
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action)
      }
    default:
      return state;
  }
};