import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import { tokenContext } from "../shared/context/tokenContext";

// interface IUserData {
//   name?: string;
//   iconImg?: string;
// }

export  function usePostsData() {
  const [posts, setPosts] = useState([]);
  const token = useContext(tokenContext);

  useEffect(() => {
    if (token && token.length > 0) {
      axios
        .get("https://oauth.reddit.com/best", {
          headers: { Authorization: `bearer ${token}` },
        })
        .then((resp) => {
          const postsData = resp.data.data.children
          console.log(postsData);
          setPosts(postsData);
        })
        .catch(console.log);
    }
    },[token])

  return [posts]
}
