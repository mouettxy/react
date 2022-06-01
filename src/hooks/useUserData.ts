import { RootState, setToken } from './../App';
import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import { useDispatch, useSelector, useStore } from "react-redux";

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData() {
  const dispatch = useDispatch();
  if (window.__token__) {
    dispatch(setToken(window.__token__));
  }
  const token = useSelector<RootState, string>(state => state.token);
  const [data, setData] = useState<IUserData>({});

  useEffect(() => {
    if (token && token.length > 0) {
      axios
        .get("https://oauth.reddit.com/api/v1/me.json?raw_json=1", {
          headers: { Authorization: `bearer ${token}` },
        })
        .then((resp) => {
          const userData = resp.data;
  
          setData({ name: userData.name, iconImg: userData.icon_img });
        })
        .catch(console.log);      
    }
  }, [token]);
  return [data]
}