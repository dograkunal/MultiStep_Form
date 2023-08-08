import React from "react";

export default function finalStep({
  data,
  previousStep,
  handleChange,
  handleSubmit,
}) {
  return (
    <form>
      <div>
        <label>University</label>
        <input
          type="text"
          name="college"
          placeholder=" "
          value={data.college}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Passing year</label>
        <input
          type="number"
          name="collegePassYear"
          placeholder="2000"
          value={data.collegePassYear}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>School</label>
        <input
          type="text"
          name="school"
          placeholder=""
          value={data.school}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Passing year</label>
        <input
          type="number"
          name="schoolPassYear"
          placeholder="2000"
          value={data.schoolPassYear}
          onChange={handleChange}
        />
      </div>

      <button onClick={previousStep}>Previous Step</button>
      <button onClick={handleSubmit}>Submit Details</button>
    </form>
  );
}
