import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function finalStep({
  data,
  previousStep,
  setData,
  handleSubmit,
}) {
  return (
    <Formik
      initialValues={{
        college: data.college,
        collegePassYear: data.collegePassYear,
        school: data.school,
        schoolPassYear: data.schoolPassYear,
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const newData = { ...data, ...values };
        setData(newData);
        handleSubmit();
      }}
    >
      {({ values, errors, touched, handleChange }) => (
        <Form>
          <div className="FormContainer">
            <div className="FormFieldContainer">
              <label className="FormLabel">University</label>
              <Field
                type="text"
                name="college"
                placeholder="College Name"
                value={values.college}
                onChange={(e) => {
                  handleChange(e);
                  const newData = { ...data, ...values };
                  setData(newData);
                }}
                className="FormField"
              />
              {errors.college && touched.college ? (
                <i>{errors.college}</i>
              ) : null}
            </div>
            <div className="FormFieldContainer">
              <label className="FormLabel">Passing year</label>
              <Field
                type="number"
                name="collegePassYear"
                placeholder="2000"
                value={values.collegePassYear}
                onChange={(e) => {
                  handleChange(e);
                  const newData = { ...data, ...values };
                  setData(newData);
                }}
                className="FormField"
              />
              {errors.collegePassYear && touched.collegePassYear ? (
                <i>{errors.collegePassYear}</i>
              ) : null}
            </div>
            <div className="FormFieldContainer">
              <label className="FormLabel">School</label>
              <Field
                type="text"
                name="school"
                placeholder="School Name"
                value={values.school}
                onChange={(e) => {
                  handleChange(e);
                  const newData = { ...data, ...values };
                  setData(newData);
                }}
                className="FormField"
              />
              {errors.school && touched.school ? <i>{errors.school}</i> : null}
            </div>
            <div className="FormFieldContainer">
              <label className="FormLabel">Passing year</label>
              <Field
                type="number"
                name="schoolPassYear"
                placeholder="2000"
                value={values.schoolPassYear}
                onChange={(e) => {
                  handleChange(e);
                  const newData = { ...data, ...values };
                  setData(newData);
                }}
                className="FormField"
              />
              {errors.schoolPassYear && touched.schoolPassYear ? (
                <i>{errors.schoolPassYear}</i>
              ) : null}
            </div>
            <div className="ButtonContainer">
              <button
                onClick={previousStep}
                className="ButtonCls PreviousButton"
              >
                &larr; Previous
              </button>
              <button type="submit" className="ButtonCls SubmitButton">
                Submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

const ValidationSchema = Yup.object().shape({
  college: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  collegePassYear: Yup.string()
    .min(4, "Too Short!")
    .max(4, "Only Year!")
    .required("Required"),
  school: Yup.string()
    .min(5, "Too Short!")
    .max(100, "too Large !")
    .required("Required"),
  schoolPassYear: Yup.string()
    .min(4, "Too Short!")
    .max(4, "Only Year!")
    .required("Required"),
});
