import React from 'react';
import css from './ContactItem.module.css';

const ContactItem = ({ contact: { name, number, id }, deleteContact }) => {
  return (
    <li className={css.li}>
      <p>
        {name}:{number}
      </p>
      <button
        type="button"
        className={css.btn}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
