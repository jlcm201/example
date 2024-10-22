"use client";
import React, { useEffect, useState } from 'react';
import { Avatar, CircularProgress, Container, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { getTVShows } from '../api/get';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ListTVShows = ({setSelected, filter}) => {
  const [loading, setLoading] = useState(false);
  const [tvShows, setTVShows] = useState([]);
  const [filterTVShows, setFilterTVShows] = useState([]);

  const fetchData = async () => {
    const _tvShows = await getTVShows();
    // console.log(JSON.stringify(_tvShows, null, 2));
    setTVShows(_tvShows);
  }

  useEffect(() => {
    if (tvShows.length === 0) setLoading(true);
  }, [tvShows]);

  useEffect(() => {
    if (loading) fetchData();
  }, [loading]);

  useEffect(() => {
    const regex = new RegExp(filter, 'i'); // Ignora mayúsculas y minúsculas
    if (tvShows.length > 0) {
      setLoading(false);
      if (filter !== '')
        setFilterTVShows(tvShows.filter(item => regex.test(`${item.name} (${item.language})`)));
      else
        setFilterTVShows(tvShows);
    }
  }, [tvShows, filter]);

  return (
    <>
      {
        !loading &&
        <List>
          {filterTVShows.map((item, index) => (
            <ListItem
              button
              key={item.id}
              className={classNames('cursor-pointer', { 'bg-stone-100': index % 2 === 0, 'bg-stone-200': index % 2 === 1 })}
              onClick={() => setSelected(item)}
            >
              <ListItemAvatar>
                <Avatar
                  alt={item.name}
                  src={item.image.medium}
                />
              </ListItemAvatar>
              <ListItemText 
                primary={`${item.name} (${item.language})`} 
              />
            </ListItem>
          ))}
        </List>
      }
      {
        loading && 
        <div className='flex minH items-center justify-center'>
          <CircularProgress size="100px" />
        </div>
      } 
    </>
  );
};


ListTVShows.propTypes = {
  setSelected: PropTypes.func
};

export default ListTVShows

