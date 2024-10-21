"use client";
import React, { useState } from 'react';
import { Modal, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser'; 

const Details = ({setOpen, tvShow}) => {
  return (
    <Modal
      open={true}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box 
        className=
        'absolute maxH overflow-auto left-1/2 top-1/2 bg-slate-400 shadow-2xl p-2 w-1/3 border border-solid border-lime-400 -translate-x-1/2 -translate-y-1/2'
      >
        <Typography id="modal-title" variant="h6" component="h2">
          {tvShow.name}
        </Typography>
        <div className='m-2'>
          <img
            src={tvShow.image.original}
            alt={tvShow.name}
            className='w-full'
          // style={{ width: '100%', margin: '10px 0' }}
          />
        </div>
        <Typography id="modal-description" className='mt-2'>
          {ReactHtmlParser(tvShow.summary)}
        </Typography>
      </Box>
    </Modal>
  );
};

Details.propTypes = {
  setOpen: PropTypes.func,
  tvShow: PropTypes.objectOf({
    id: PropTypes.number,
    name: PropTypes.string,
    language: PropTypes.string,
    image: PropTypes.objectOf({ medium: PropTypes.string, original: PropTypes.string }),
    summary: PropTypes.string
  })
};

export default Details;
