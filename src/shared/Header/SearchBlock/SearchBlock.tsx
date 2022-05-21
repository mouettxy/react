import React, { useEffect, useState } from "react";
import styles from "./searchblock.css";
import axios from "axios";
import { UserBlock } from "./UserBlock";

interface ISearchBlock {
  children?: React.ReactChild;
  token: string;
}

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function SearchBlock({ children, token }: ISearchBlock) {
  const [data, setData] = useState<IUserData>({});

  useEffect(() => {
    axios
      .get("https://oauth.reddit.com/api/v1/me", {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        const userData = resp.data;
        setData({ name: userData.name, iconImg: userData.icon_img });
      })
      .catch(console.log);
  }, [token]);

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} />
    </div>
  );
}
