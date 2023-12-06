import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const useUpdateItem = () => {
  const updateItem = (id: string, checked: boolean) => {
    const docRef = doc(db, "items", id);

    updateDoc(docRef, {
      done: checked,
    });
  };

  return { updateItem };
};
