"use client";
import React, { useEffect, useState } from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { getTVShows } from '../api/get';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ListTVShows = ({setSelected}) => {
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (tvShows.length === 0) {
        const _tvShows = await getTVShows();
        console.log(JSON.stringify(_tvShows, null, 2));
        setTVShows(_tvShows);
      }
    }
    fetchData();
  });

  return (
    <List>
      {tvShows.map((item, index) => (
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
  );
};


ListTVShows.propTypes = {
  setSelected: PropTypes.func
};

export default ListTVShows

