import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function addressDetail({
  data,
  nextStep,
  setData,
  previousStep,
}) {
  return (
    <Formik
      initialValues={{
        address1: data.address1,
        address2: data.address2,
        zipcode: data.zipcode,
      }}
      validationSchema={ValidationSchema}
      onSubmit={() => {
        nextStep();
      }}
    >
      {({ values, errors, touched, handleChange }) => (
        <Form>
          <div className="FormContainer">
            <div className="FormFieldContainer">
              <label className="FormLabel">Address line 1</label>
              <Field
                type="text"
                name="address1"
                placeholder="Address"
                value={values.address1}
                onChange={(e) => {
                  handleChange(e);
                  const newData = { ...data, ...values };
                  setData(newData);
                }}
                className="FormField"
              />
              {errors.address1 && touched.address1 ? (
                <i>{errors.address1}</i>
              ) : null}
            </div>
            <div className="FormFieldContainer">
              <label className="FormLabel">Address line 2</label>
              <Field
                type="text"
                name="address2"
                placeholder="Address"
                value={values.address2}
                onChange={(e) => {
                  handleChange(e);
                  const newData = { ...data, ...values };
                  setData(newData);
                }}
                className="FormField"
              />
              {errors.address2 && touched.address2 ? (
                <i>{errors.address2}</i>
              ) : null}
            </div>
            <div className="FormFieldContainer">
              <label className="FormLabel">zipcode</label>
              <Field
                type="number"
                name="zipcode"
                placeholder="Zipcode"
                value={values.zipcode}
                onChange={(e) => {
                  handleChange(e);
                  const newData = { ...data, ...values };
                  setData(newData);
                }}
                className="FormField"
              />
              {errors.zipcode && touched.zipcode ? (
                <i>{errors.zipcode}</i>
              ) : null}
            </div>
            <div className="ButtonContainer">
              <button
                onClick={previousStep}
                className="ButtonCls PreviousButton"
              >
                &larr; Previous
              </button>
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
  address1: Yup.string()
    .min(4, "Too Short!")
    .max(50, "Only Year!")
    .required("Required"),
  address2: Yup.string()
    .min(2, "Too Short!")
    .max(50, "too Large !")
    .required("Required"),
  zipcode: Yup.string()
    .min(5, "Too Short!")
    .max(20, "Only Year!")
    .required("Required"),
});
