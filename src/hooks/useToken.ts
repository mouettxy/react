import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../store/token/actions";


export function useToken() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.__token__) {
      dispatch(setToken(window.__token__));
    }
  }, []);
}