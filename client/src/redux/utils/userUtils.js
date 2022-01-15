import { auth } from "services/utils";
import { firestore } from "services/utils";

const userRef = firestore.collection("users");

export const handleResetPasswordAPI = (email) => {
  const config = {
    url: `${process.env.REACT_APP_URL}/login`,
  };

  return new Promise((resolve, reject) => {
    auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        resolve();
      })
      .catch(() => {
        const err = ["Email not registered. Please register!"];
        reject(err);
      });
  });
};

export const handleUpdateProfile = (profile) => {
  return new Promise((resolve, reject) => {
    return userRef
      .doc(profile.id)
      .update(profile)
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};
