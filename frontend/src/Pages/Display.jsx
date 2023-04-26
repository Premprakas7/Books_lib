import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Display = () => {
    const [data,setData]=useState();
    const [loading, setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true)
        axios.get("http://localhost:5000/books")
        .then((res)=>setData(res.data), setLoading(false))
        .catch((err)=>console.log(err))
    },[])
    console.log(data);
  return (
    <div>
        {loading && <div>...loading</div>}
        {
            
        }
      
    </div>
  )
}

export default Display
