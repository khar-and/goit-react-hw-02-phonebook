import React from 'react';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <label>
      Find contacts by Name
      <input type="text" value={value} onChange={onChangeFilter} />
    </label>
  );
};

export default Filter;
