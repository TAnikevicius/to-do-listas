import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";
import { useState } from "react";

export const useAddItem = () => {
  const colRef = collection(db, "items");

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const addItem = (content: string, done: boolean) => {
    setError(false);
    setSuccess(false);

    addDoc(colRef, {
      content,
      done,
      createdAt: serverTimestamp(),
    })
      .then(() => setSuccess(true))
      .catch((e) => {
        setError(true);
        console.error(e);
      });
  };

  return { addItem, success, error };
};
