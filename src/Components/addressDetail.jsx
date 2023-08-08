import React from "react";

export default function addressDetail({
  data,
  nextStep,
  previousStep,
  handleChange,
}) {
  return (
    <form>
      <div>
        <label>Address line 1</label>
        <input
          type="text"
          name="address1"
          placeholder=""
          value={data.address1}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Address line 2</label>
        <input
          type="text"
          name="address2"
          placeholder=""
          value={data.address2}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>zipcode</label>
        <input
          type="number"
          name="zipcode"
          placeholder="Zipcode"
          value={data.zipcode}
          onChange={handleChange}
        />
      </div>
      <button onClick={previousStep}>Previous Step</button>
      <button onClick={nextStep}>Next Step</button>
    </form>
  );
}
