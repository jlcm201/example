"use client";
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import useLocalStorage from '@/hooks/useLocalStorage';
import PropTypes from 'prop-types';

const Filter = ({filter, setFilter}) => {
  const [storedFilter, setStoredFilter] = useLocalStorage('filter', '');

  const onChange = (event) => {
    setFilter(event.target.value);
    setStoredFilter(event.target.value);
  };

  useEffect(() => {
    if (storedFilter !== '')
      onChange({target: {value: storedFilter}});
  });

  return (
    <Container className='pb-4'>
      <TextField
        label="Filtrar por:"
        variant="outlined"
        value={filter}
        onChange={onChange}
        fullWidth
      />
    </Container>
  );
};

Filter.propTypes = {
  filter: PropTypes.string, 
  setFilter: PropTypes.func
};

export default Filter;
