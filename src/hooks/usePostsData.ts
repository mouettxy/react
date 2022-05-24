import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import { tokenContext } from "../shared/context/tokenContext";

// interface IUserData {
//   name?: string;
//   iconImg?: string;
// }

export  function usePostsData() {
  const [posts, setPosts] = useState({});
  const token = useContext(tokenContext);

  useEffect(() => {
    if (token && token.length > 0) {
      axios
        .get("https://oauth.reddit.com/api/best", {
          headers: { Authorization: `bearer ${token}` },
        })
        .then((resp) => {
           console.log(resp);
          //  const postsData = // найти массив из ответа
          //  setPosts(postsData);
        })
        .catch(console.log);
    }
    },[token])

  return [posts]
}
