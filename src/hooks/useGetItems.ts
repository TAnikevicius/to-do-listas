import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../config/firebase";

export type Item = {
  id: string;
  content: string;
  done: boolean;
};

export const useGetItems = () => {
  const [items, setItems] = useState([] as Item[]);
  const colRef = collection(db, "items");

  const itemsQuery = query(colRef, orderBy("createdAt"));

  useEffect(() => {
    onSnapshot(itemsQuery, (snapshot) => {
      setItems(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        }) as Item[],
      );
    });
  }, []);

  return items;
};
