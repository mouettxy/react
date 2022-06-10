import React, { useEffect, useState } from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { PostsContextProvider } from "./shared/context/postsContext";
import { BrowserRouter } from "react-router-dom";

import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./store/reducer";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function AppComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });
  return (
    <Provider store={store}>
      {mounted && (
        <BrowserRouter>
          <PostsContextProvider>
            <Layout>
              <Header />
              <Content>
                <CardsList />
              </Content>
            </Layout>
          </PostsContextProvider>
        </BrowserRouter>
      )}
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
