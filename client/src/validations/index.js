import * as Yup from "yup";

export const productSchema = Yup.object({
  name: Yup.string().required("Required"),
  price: Yup.number().required("Required").positive().integer(),
  discount: Yup.number()
    .notRequired()
    .min(0)
    .lessThan(Yup.ref("price"), "Must be less than Regular Price"),
  category: Yup.string().required("Required"),
  image: Yup.mixed().notRequired("Upload an image"),
  cost: Yup.number().required("Required").positive().integer(),
  qty: Yup.number().required("Required").positive().integer(),
  brand: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

export const categorySchema = Yup.object({
  name: Yup.string().required("Required"),
  status: Yup.string(),
});

// Address Validation
export const addressSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("First Name is required"),
  phone: Yup.number()
    .required("Phone Number is required")
    .min(10, "Phone number must be at least ten digits"),
  county: Yup.string().nullable().notRequired(),
  town: Yup.string().nullable().notRequired(),
  deliveryAddress: Yup.string().required(
    "Delivery address details are required"
  ),
});
