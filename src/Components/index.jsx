import React, { useState } from "react";
import MainDetail from "./mainDetail";
import AddressDetail from "./addressDetail";
import FinalStep from "./finalStep";
import PersonalDetail from "./personalDetail";

export default function MultiStepSignup() {
  const initialState = {
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
    password: "",
    address1: "",
    address2: "",
    zipcode: "",
    college: "",
    collegePassYear: 0,
    school: "",
    schoolPassYear: 0,
    fathername: "",
    mothername: "",
    fatherOccupation: "",
    motherOccupation: "",
  };

  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialState);

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
  }

  switch (step) {
    case 1:
      return (
        <MainDetail
          data={data}
          nextStep={nextStep}
          setData={setData}
          handleChange={handleChange}
        />
      );
    case 2:
      return (
        <AddressDetail
          data={data}
          nextStep={nextStep}
          previousStep={previousStep}
          handleChange={handleChange}
        />
      );
    case 3:
      return (
        <PersonalDetail
          data={data}
          nextStep={nextStep}
          previousStep={previousStep}
          handleChange={handleChange}
        />
      );
    case 4:
      return (
        <FinalStep
          data={data}
          previousStep={previousStep}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      );
    default:
      null;
  }
}
