import { saveToken } from './../store/token/actions';
import { IUserData, meRequestAsync } from './../store/me/actions';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState} from "../store/reducer";


export function useUserData() {
  const dispatch = useDispatch();
  useEffect(()=> {
    if (window.__token__) {
      dispatch(saveToken());
    }    
  }, [])
  const data = useSelector<RootState, IUserData>(state => state.me.data)
  const loading = useSelector<RootState, boolean>(state => state.me.loading)
  const token = useSelector<RootState, string>(state => state.token);

  useEffect(() => {
    if (token && token.length > 0) {
      dispatch(meRequestAsync());
    }
  }, [token]);
  return {
    data,
    loading
  }
}