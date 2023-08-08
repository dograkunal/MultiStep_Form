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
      onSubmit={(values) => {
        const newData = { ...data, ...values };
        setData(newData);
        nextStep();
      }}
    >
      {({ values, errors, touched }) => (
        <Form>
          <div>
            <label>Father's Name</label>
            <Field
              type="text"
              name="fathername"
              placeholder="Thomas Wayne"
              value={values.fathername}
            />
            {errors.fathername && touched.fathername ? (
              <div>{errors.fathername}</div>
            ) : null}
          </div>
          <div>
            <label>Mother's Name</label>
            <Field
              type="text"
              name="mothername"
              placeholder="Martha Wayne"
              value={values.mothername}
            />
            {errors.mothername && touched.mothername ? (
              <div>{errors.mothername}</div>
            ) : null}
          </div>
          <div>
            <label>Father's Occupation</label>
            <Field
              type="text"
              name="fatherOccupation"
              placeholder="Bussiness/Salaried"
              value={values.fatherOccupation}
            />
            {errors.fatherOccupation && touched.fatherOccupation ? (
              <div>{errors.fatherOccupation}</div>
            ) : null}
          </div>
          <div>
            <label>Mother's Occupation</label>
            <Field
              type="text"
              name="motherOccupation"
              placeholder="HouseMaker/Salaried"
              value={values.motherOccupation}
            />
            {errors.motherOccupation && touched.motherOccupation ? (
              <div>{errors.motherOccupation}</div>
            ) : null}
          </div>
          <button onClick={previousStep}>Previous Step</button>
          <button type="submit">Next Step</button>
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
