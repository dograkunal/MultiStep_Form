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
          <div>
            <label>Address line 1</label>
            <Field
              type="text"
              name="address1"
              placeholder=""
              value={values.address1}
              onChange={(e) => {
                handleChange(e);
                const newData = { ...data, ...values };
                setData(newData);
              }}
            />
            {errors.address1 && touched.address1 ? (
              <div>{errors.address1}</div>
            ) : null}
          </div>
          <div>
            <label>Address line 2</label>
            <Field
              type="text"
              name="address2"
              placeholder=""
              value={values.address2}
              onChange={(e) => {
                handleChange(e);
                const newData = { ...data, ...values };
                setData(newData);
              }}
            />
            {errors.address2 && touched.address2 ? (
              <div>{errors.address2}</div>
            ) : null}
          </div>
          <div>
            <label>zipcode</label>
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
            />
            {errors.zipcode && touched.zipcode ? (
              <div>{errors.zipcode}</div>
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
