import React, { Component } from 'react';
import css from './Form.module.css';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = evt => {
    const { name, value } = evt.target;

    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const trimmedName = this.state.name.trim().toLowerCase();

    if (!trimmedName) {
      alert('Пожалуйста, введите корректное имя');
      return;
    }

    const optimizeData = {
      name: trimmedName,
      number: this.state.number,
    };
    this.props.createConatct({ ...optimizeData });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            required
            value={this.state.name}
            onChange={this.handleInput}
          />
        </label>
        <label className={css.label}>
          Phone
          <input
            onChange={this.handleInput}
            value={this.state.number}
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
  }
}
