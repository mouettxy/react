import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import { IPreview } from "../Post/Post";
import { Card } from "./Card";
import styles from "./cardslist.css";

interface IRespPosts {
  kind: string;
  data: IData;
}
export interface IData {
  title: string;
  id: string;
  author: string;
  thumbnail: string;
  created: number;
  selftext?: string;
  preview: IPreview;
  ups: number;
}

export function CardsList() {
  const token = useSelector<RootState>((state) => state.token);
  const [posts, setPosts] = useState<IRespPosts[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState("");
  const [nextAfter, setNextAfter] = useState("");
  const [loadCounter, setLoadCounter] = useState(-1);
  const [initialLoad, setInitialLoad] = useState(false);

  const bottomOfList = useRef<HTMLDivElement>(null);

  async function load() {
    if (!initialLoad) {
      setInitialLoad(true);
      return;
    }
    setLoading(true);
    setErrorLoading("");

    try {
      const {
        data: {
          data: { after, children },
        },
      } = await axios.get(
        "https://oauth.reddit.com/best?raw_json=1&sr_detail=true",
        {
          headers: { Authorization: `bearer ${token}` },
          params: { after: nextAfter },
        }
      );

      setNextAfter(after);
      setPosts((prevChildren) => prevChildren.concat(children));
    } catch (error) {
      setErrorLoading(String(error));
    }
    setLoading(false);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && loadCounter < 2) {
          load();
          setTimeout(() => {
            setLoadCounter(loadCounter + 1);
          }, 700);
        }
      },
      { rootMargin: "700px" }
    );

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    };
  }, [bottomOfList.current, nextAfter, token]);

  return (
    <ul className={styles.cardsList}>
      {posts.length == 0 && !loading && !errorLoading && (
        <div style={{ textAlign: "center" }}>Постов нет</div>
      )}

      {posts.map((post) => (
        <Card
          title={post.data.title}
          id={post.data.id}
          author={post.data.author}
          thumbnail={post.data.thumbnail}
          created={post.data.created}
          key={post.data.id}
          selftext={post.data.selftext}
          preview={post.data.preview}
          ups={post.data.ups}
        />
      ))}

      <div ref={bottomOfList}></div>

      {loadCounter == 2 && (
        <button
          className={styles.load}
          onClick={() => {
            load();
            setLoadCounter(loadCounter - 2);
          }}
        >
          Загрузить еще
        </button>
      )}

      {loading && <div style={{ textAlign: "center" }}>Загрузка...</div>}

      {errorLoading && (
        <div style={{ textAlign: "center" }} role="alert">
          {errorLoading}
        </div>
      )}
    </ul>
  );
}
