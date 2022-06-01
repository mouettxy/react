import React, { useState } from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postsContext";

import {
  ActionCreator,
  AnyAction,
  legacy_createStore as createStore,
  Reducer,
} from "redux";
import { Provider, useDispatch } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

export type RootState = {
  token: string;
};
const initialState: RootState = {
  token: "777",
};
export const setToken: ActionCreator<AnyAction> = (token) => ({
  type: "SET_TOKEN",
  token: token,
});
const rootReducer: Reducer<RootState> = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <PostsContextProvider>
          <Layout>
            <Header />
            <Content>
              <CardsList />
            </Content>
          </Layout>
        </PostsContextProvider>
      </UserContextProvider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
