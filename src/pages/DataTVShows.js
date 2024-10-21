"use client";
import { getTVShows } from '../api/get';
import React, { useEffect, useState } from 'react'

const DataTVShows = () => {
  const [tvShows, setTVShows] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      if (tvShows.length === 0) {
        const _tvShows = await getTVShows();
        console.log(JSON.stringify(_tvShows, null , 2));
        setTVShows(_tvShows);
      }
    } 
    fetchData();
  })
  
  return (
    <>
      <h1>DataTVShows</h1>
      <textarea rows={10} style={{width: '60%'}} value={JSON.stringify(tvShows, '=>' , 2)} disabled={false} />
      <p>{JSON.stringify(tvShows,null , 2)}</p>
    </>
  )
}

export default DataTVShows