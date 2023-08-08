import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function mainDetail({ data, nextStep, setData }) {
  return (
    <Formik
      initialValues={{
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
        email: data.email,
        password: data.password,
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const newData = { ...data, ...values };
        setData(newData);
        nextStep();
      }}
    >
      {({ values, errors, touched, handleChange }) => (
        <Form>
          <div>
            <label>First Name</label>

            <Field
              name="firstName"
              id="firstName"
              placeholder="Bruce"
              value={values.firstName}
              onChange={(e) => {
                handleChange(e);
                const newData = { ...data, ...values };
                setData(newData);
              }}
            />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
          </div>
          <div>
            <label>Last Name</label>
            <Field
              name="lastName"
              id="lastName"
              placeholder="Wayne"
              value={values.lastName}
              onChange={(e) => {
                handleChange(e);
                const newData = { ...data, ...values };
                setData(newData);
              }}
            />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
          </div>
          <div>
            <label>Age</label>
            <Field
              name="age"
              id="age"
              type="number"
              placeholder="30"
              value={values.age}
              onChange={handleChange}
            />
            {errors.age && touched.age ? <div>{errors.age}</div> : null}
          </div>
          <div>
            <label>Email</label>
            <Field
              name="email"
              type="email"
              placeholder="abx@xyz.com"
              value={values.email}
              onChange={(e) => {
                handleChange(e);
                const newData = { ...data, ...values };
                setData(newData);
              }}
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
          </div>
          <div>
            <label>Password</label>
            <Field
              type="text"
              name="password"
              placeholder="XXXXXXXX"
              value={values.password}
              onChange={(e) => {
                handleChange(e);
                const newData = { ...data, ...values };
                setData(newData);
              }}
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
          </div>

          <button type="submit">Next Step</button>
        </Form>
      )}
    </Formik>
  );
}

const ValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  age: Yup.string()
    .min(2, "Too Short!")
    .max(100, "too Large !")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
});
