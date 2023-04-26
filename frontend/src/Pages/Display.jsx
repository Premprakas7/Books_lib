import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Display = () => {
    const [data,setData]=useState();
    const [loading, setLoading]=useState(false);
    const [error, setError]=useState(false)

    useEffect(()=>{
        setLoading(true)
        axios.get("http://localhost:5000/books")
        .then((res)=>setData(res.data))
        .catch((err)=>setError(err.error))
    },[])
    console.log(data);
  return (
    <div>
      
    </div>
  )
}

export default Display
