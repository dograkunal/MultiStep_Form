import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function personalDetail({
  data,
  nextStep,
  setData,
  previousStep,
}) {
  return (
    <Formik
      initialValues={{
        fathername: data.fathername,
        mothername: data.mothername,
        fatherOccupation: data.fatherOccupation,
        motherOccupation: data.motherOccupation,
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
              <label className="FormLabel">Father's Name</label>
              <Field
                type="text"
                name="fathername"
                placeholder="Thomas Wayne"
                value={values.fathername}
                onChange={(e) => {
                  handleChange(e);
                  const newData = { ...data, ...values };
                  setData(newData);
                }}
                className="FormField"
              />
              {errors.fathername && touched.fathername ? (
                <i>{errors.fathername}</i>
              ) : null}
            </div>
            <div className="FormFieldContainer">
              <label className="FormLabel">Mother's Name</label>
              <Field
                type="text"
                name="mothername"
                placeholder="Martha Wayne"
                value={values.mothername}
                onChange={(e) => {
                  handleChange(e);
                  const newData = { ...data, ...values };
                  setData(newData);
                }}
                className="FormField"
              />
              {errors.mothername && touched.mothername ? (
                <i>{errors.mothername}</i>
              ) : null}
            </div>
            <div className="FormFieldContainer">
              <label className="FormLabel">Father's Occupation</label>
              <Field
                type="text"
                name="fatherOccupation"
                placeholder="Bussiness/Salaried"
                value={values.fatherOccupation}
                onChange={(e) => {
                  handleChange(e);
                  const newData = { ...data, ...values };
                  setData(newData);
                }}
                className="FormField"
              />
              {errors.fatherOccupation && touched.fatherOccupation ? (
                <i>{errors.fatherOccupation}</i>
              ) : null}
            </div>
            <div className="FormFieldContainer">
              <label className="FormLabel">Mother's Occupation</label>
              <Field
                type="text"
                name="motherOccupation"
                placeholder="HouseMaker/Salaried"
                value={values.motherOccupation}
                onChange={(e) => {
                  handleChange(e);
                  const newData = { ...data, ...values };
                  setData(newData);
                }}
                className="FormField"
              />
              {errors.motherOccupation && touched.motherOccupation ? (
                <i>{errors.motherOccupation}</i>
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
  fathername: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  mothername: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  fatherOccupation: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  motherOccupation: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
