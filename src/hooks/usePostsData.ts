import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducer";

// interface IUserData {
//   name?: string;
//   iconImg?: string;
// }

export  function usePostsData() {
  // const dispatch = useDispatch();
  // useEffect(()=> {
  //   if (window.__token__) {
  //     dispatch(setToken(window.__token__));
  //   }
  // })
  const [posts, setPosts] = useState([]);
  // const token = useContext(tokenContext);
  
  const token = useSelector<RootState, string>(state => state.token);

  useEffect(() => {
    if (token && token.length > 0) {
      axios
        .get("https://oauth.reddit.com/best?raw_json=1&sr_detail=true", {
          headers: { Authorization: `bearer ${token}` },
        })
        .then((resp) => {
          const postsData = resp.data.data.children;
          setPosts(postsData);
        })
        .catch(console.log);
    }
    },[token])

  return [posts]
}
