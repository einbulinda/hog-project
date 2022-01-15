import { firestore } from "services/utils";

// Define Orders Collection
const ordersRef = firestore.collection("orders");

// Saving an Order
export const handleSaveOrder = (order) => {
  return new Promise((resolve, reject) => {
    ordersRef
      .doc()
      .set(order)
      .then(() => {
        resolve();
      })
      .catch((err) => reject(err));
  });
};

// Fetch a user's orders
export const handleGetUserOrderHistory = (uid) => {
  return new Promise((resolve, reject) => {
    let ref = ordersRef.orderBy("createdDate").where("customerID", "==", uid);

    ref
      .get()
      .then((snap) => {
        const data = [
          ...snap.docs.map((doc) => {
            return {
              ...doc.data(),
              documentID: doc.id,
            };
          }),
        ];
        resolve({ data });
      })
      .catch((err) => reject(err));
  });
};

// Get details of a specific order made.
export const handleGetOrder = (orderID) => {
  return new Promise((resolve, reject) => {
    ordersRef
      .doc(orderID)
      .get()
      .then((snap) => {
        if (snap.exists) {
          resolve({ ...snap.data(), documentID: orderID });
        }
      })
      .catch((err) => reject(err));
  });
};
