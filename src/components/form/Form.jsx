import React, { useState } from 'react';
import css from './Form.module.css';

const initialState = {
  name: '',
  number: '',
};

const Form = ({ createConatct }) => {
  const [state, setState] = useState(initialState);

  const handleInput = evt => {
    const { name, value } = evt.target;

    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const trimmedName = state.name.trim().toLowerCase();

    if (!trimmedName) {
      alert('Пожалуйста, введите корректное имя');
      return;
    }

    const optimizeData = {
      name: trimmedName,
      number: state.number,
    };
    createConatct({ ...optimizeData });
    setState(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          required
          value={state.name}
          onChange={handleInput}
        />
      </label>
      <label className={css.label}>
        Phone
        <input
          onChange={handleInput}
          value={state.number}
          type="tel"
          name="number"
          pattern="(\(\d{3}\) \d{3}-\d{2}-\d{2}|\d{3} \d{3} \d{2} \d{2}|\d{5,12})"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};

export default Form;
