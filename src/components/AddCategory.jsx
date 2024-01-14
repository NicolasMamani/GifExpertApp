import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ onAddCategory }) => {
  //State
  const [inputValue, setInputValue] = useState('');

  //handle
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length < 1) return;
    onAddCategory(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export default AddCategory;

//prop-types

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};
