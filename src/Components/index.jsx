import React, { useEffect, useState } from "react";
import MultiStepSignup from "./form";
import "./style.css";

export default function FormContainer() {
  const [step, setStep] = useState(1);
  const [stepName, setstepName] = useState({
    name: true,
    address: false,
    details: false,
    submission: false,
  });

  function stepNumber() {
    if (step === 1) {
      return setstepName({
        name: true,
        address: false,
        details: false,
        submission: false,
      });
    } else if (step === 2) {
      return setstepName({
        ...stepName,
        address: true,
        details: false,
        submission: false,
      });
    } else if (step === 3) {
      return setstepName({
        ...stepName,
        details: true,
        submission: false,
      });
    } else if (step === 4) {
      return setstepName({
        ...stepName,
        submission: true,
      });
    } else {
      return stepName;
    }
  }
  useEffect(() => {
    stepNumber();
  }, [step]);

  return (
    <>
      <section className="FormStepper">
        <div className={`StepperDetails`}>
          <span className={`StepperCount ${stepName.name ? "active" : ""}`}>
            1
          </span>
          <span className="CountDetail">Name & Email</span>
        </div>
        <div className="DoneLine">
          <hr className={`${stepName.address ? "active" : ""}`} />
        </div>
        <div className={`StepperDetails`}>
          <span className={`StepperCount ${stepName.address ? "active" : ""}`}>
            2
          </span>
          <span className="CountDetail">Address Detail</span>
        </div>
        <div className="DoneLine">
          <hr className={`${stepName.details ? "active" : ""}`} />
        </div>
        <div className={`StepperDetails`}>
          <span className={`StepperCount ${stepName.details ? "active" : ""}`}>
            3
          </span>
          <span className="CountDetail">Personal Detail</span>
        </div>
        <div className="DoneLine">
          <hr className={`${stepName.submission ? "active" : ""}`} />
        </div>
        <div className="StepperDetails">
          <span
            className={`StepperCount ${stepName.submission ? "active" : ""}`}
          >
            4
          </span>
          <span className="CountDetail">Submission</span>
        </div>
      </section>
      <section>
        <MultiStepSignup step={step} setStep={setStep} />;
      </section>
    </>
  );
}
