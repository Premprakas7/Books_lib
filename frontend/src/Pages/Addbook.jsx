import axios from "axios";
import React, { useState } from "react";


 const Addbook = () => {
  const [formData, setFormData] = useState({
    company:"",
    position:"",
    contract:"",
    location:""
  });


  const handleChange = (e) => {
    const newData = { ...formData };
    newData[e.target.id] = e.target.value;
    setFormData(newData)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://jobslistdata.herokuapp.com/jobs", {
      company: formData.company,
      position: formData.position,
      contract: formData.contract,
        location:formData.location,
    }).then((res) => {
      console.log(res.data);
    })
  };
  return (
    <div>
    
    <form onSubmit={(e) => handleSubmit(e)}>
      <div
        className="mainDiv">
        <input
          type="text"
          value={formData.company}
          id="company"
          className="inputTag"
          placeholder="Enter company name"
          onChange={(e) => handleChange(e)}
        />

        <input
          type="text"
          value={formData.position}
          id="position"
          className="inputTag"
          placeholder="Enter Position"
          onChange={(e) => handleChange(e)}
        />


<select className="inputTag" value={formData.contract}
        onChange={(e) => handleChange(e)}
         id="contract">
          <option value="">Contract</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Freelance">Freelance</option>
        </select>


        <input
          type="text"
          value={formData.location}
          id="location"
          className="inputTag"
          placeholder="Enter Location"
          onChange={(e) => handleChange(e)}
        />

        <input
          type="submit"
          value="Add data"
          className="btn"
        />
      </div>
    </form>
    </div>
  );
};
export default Addbook