import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const useUpdateItem = () => {
  const updateItem = (id: string, checked: boolean, completed: string) => {
    const docRef = doc(db, "items", id);

    updateDoc(docRef, {
      done: checked,
      content: completed,
    });
  };

  return { updateItem };
};
