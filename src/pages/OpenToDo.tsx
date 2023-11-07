import { ToDoItem } from "../components/ToDoItem";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export type Item = {
  id: string;
  content: string;
  done: boolean;
};

// * Setup GitHub
// * Make list items to be able to change database

export const OpenToDo = () => {
  const [items, setItems] = useState([] as Item[]);

  useEffect(() => {
    getDocs(collection(db, "items"))
      .then((snapshot) => {
        let items2: any = [];
        snapshot.docs.forEach((doc) => {
          items2.push({ ...doc.data(), id: doc.id });
        });

        setItems(items2);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div>
      {items.map((item) => (
        <ToDoItem key={item.id} item={item} />
      ))}
    </div>
  );
};
