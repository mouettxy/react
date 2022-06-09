import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";


export  function usePostsData() {
  const [posts, setPosts] = useState([]);
  
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
