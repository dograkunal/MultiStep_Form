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
          <div>
            <label>University</label>
            <Field
              type="text"
              name="college"
              placeholder=" "
              value={values.college}
              onChange={(e) => {
                handleChange(e);
                const newData = { ...data, ...values };
                setData(newData);
              }}
            />
            {errors.college && touched.college ? (
              <div>{errors.college}</div>
            ) : null}
          </div>
          <div>
            <label>Passing year</label>
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
            />
            {errors.collegePassYear && touched.collegePassYear ? (
              <div>{errors.collegePassYear}</div>
            ) : null}
          </div>
          <div>
            <label>School</label>
            <Field
              type="text"
              name="school"
              placeholder=""
              value={values.school}
              onChange={(e) => {
                handleChange(e);
                const newData = { ...data, ...values };
                setData(newData);
              }}
            />
            {errors.school && touched.school ? (
              <div>{errors.school}</div>
            ) : null}
          </div>
          <div>
            <label>Passing year</label>
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
            />
            {errors.schoolPassYear && touched.schoolPassYear ? (
              <div>{errors.schoolPassYear}</div>
            ) : null}
          </div>

          <button onClick={previousStep}>Previous Step</button>
          <button type="submit">Submit Details</button>
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
