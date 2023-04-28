import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";


 const Addbook = () => {
  const [formData, setFormData] = useState({
    title:"",
    author:""
  });

  const handleChange = (e) => {
    const newData = { ...formData };
    newData[e.target.id] = e.target.value;
    setFormData(newData)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://books-lib-g2na.onrender.com/books", {
      title: formData.title,
      author: formData.author
    }).then((res) => {
      console.log(res.data);
    })
  };
  return (
    <div>    
      <Link to="/"><button className="w-[8rem] h-[3rem] bg-[gray] rounded-full text-[white]">Home</button></Link>
    <form onSubmit={(e) => handleSubmit(e)} className="border-[5px] w-[20rem] h-[11rem] bg-slate-800 ml-[38%] mt-[10%]">
      <div >
          <div className=" border-2 ">
          <p className="text-[white] text-[600]">Book Name</p>
        <input
          type="text"
          value={formData.title}
          id="title"
          placeholder="Enter Book Name"
          onChange={(e) => handleChange(e)}/>
          </div>
          <div className=" border-2 bg-slate-800">
          <p className="text-[white] text-[600]">Auhtor Name</p>
        <input
          type="text"
          value={formData.author}
          id="author"
          placeholder="Enter Author"
          onChange={(e) => handleChange(e)}/>
          </div>
        <br />
        <input
          type="submit"
          value="Add data"
          className="border-2 w-[5rem] rounded text-[#000] text-[600] bg-slate-200"
        />
      </div>
    </form>
    </div>
  );
};
export default Addbook