import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./style.css";

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
          <div className="FormContainer">
            <div className="FormFieldContainer">
              <label className="FormLabel">First Name</label>
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
                className="FormField"
              />
              {errors.firstName && touched.firstName ? (
                <i>{errors.firstName}</i>
              ) : null}
            </div>
            <div className="FormFieldContainer">
              <label className="FormLabel">Last Name</label>
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
                className="FormField"
              />
              {errors.lastName && touched.lastName ? (
                <i>{errors.lastName}</i>
              ) : null}
            </div>
            <div className="FormFieldContainer">
              <label className="FormLabel">Age</label>
              <Field
                name="age"
                id="age"
                type="number"
                placeholder="30"
                value={values.age}
                onChange={handleChange}
                className="FormField"
              />
              {errors.age && touched.age ? <i>{errors.age}</i> : null}
            </div>
            <div className="FormFieldContainer">
              <label className="FormLabel">Email</label>
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
                className="FormField"
              />
              {errors.email && touched.email ? <i>{errors.email}</i> : null}
            </div>
            <div className="FormFieldContainer">
              <label className="FormLabel">Password</label>
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
                className="FormField"
              />
              {errors.password && touched.password ? (
                <i>{errors.password}</i>
              ) : null}
            </div>
            <div className="ButtonContainer flexEnd">
              <button type="submit" className="ButtonCls nextButton">
                Next &rarr;
              </button>
            </div>
          </div>
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
