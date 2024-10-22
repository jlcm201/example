"use client";
import React, { useState } from 'react'
import { Typography } from '@mui/material';
import ListTVShows from '../components/ListTVShows';
import Details from '../components/Details';
import Filter from '../components/Filter';

const TVShows = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const [tvShowSelected, setTvShowSelected] = useState(undefined);
  const [filter, setFilter] = useState('');

  const selectItem = item => {
    setTvShowSelected(item);
    if (item !== null) setOpenDetails(true);
  };

  return (
    <div className='h-full flex flex-col bg-slate-400 rounded p-2 overflow-hidden'>
      <div className=''>
        <Typography align='center' variant="h3" gutterBottom>
          TV Shows
        </Typography>
      </div>
      <div>
        <Filter 
          filter={filter}
          setFilter={setFilter}
        />
      </div>
      <div className='rounded-md overflow-hidden'>
        <div className='minH maxH overflow-y-auto bg-slate-300'>
          <ListTVShows 
            setSelected={selectItem} 
            filter={filter}
          />
        </div>
      </div>
      <div>
        {
          openDetails && (
            <Details
              setOpen={setOpenDetails}
              tvShow={tvShowSelected}
            />
          )
        }
      </div>
    </div>
  )
}

export default TVShows