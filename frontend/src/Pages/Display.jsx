import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Display = () => {
    const [data,setData]=useState();
    const [loading, setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true)
        axios.get("https://books-lib-g2na.onrender.com/books")
        .then((res)=>setData(res.data), setLoading(false))
        .catch((err)=>console.log(err))
    },[])
    console.log(data);
  return (
    <div>
      <Link to="/"><button className="w-[8rem] h-[3rem] bg-[gray] rounded-full text-[white]">Home</button></Link>
        {loading && <div>...loading</div>}
        {data?.map((e)=><div key={e.id} className='text-lg italic font-semibold border '>
          <p key={e.id}>Book : {e.title}</p>
          <p key={e.id}> Author :{e.author}</p>
        </div>)}
    </div>
  )
}

export default Display
