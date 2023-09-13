import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
  state = { name: '' };

  // Generate random ID
  nameIdInput = nanoid();
  numberIdInput = nanoid();

  handleChangeInput = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmitForm = evt => {
    evt.preventDefault();
    this.props.onSubmit({ name: this.state.name });
    this.setState({ name: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <label htmlFor={this.nameIdInput}>
          Name{' '}
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            required
            onChange={this.handleChangeInput}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
