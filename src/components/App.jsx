import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson' },
      { id: 'id-2', name: 'Hermione Kline' },
      { id: 'id-3', name: 'Eden Clements' },
    ],
  };
  // Add new contact
  addContactWithForm = data => {
    console.log(data);
  };

  render() {
    console.log(this.state.contacts);
    return (
      <div>
        <p>Phonebook</p>
        <ContactForm onSubmit={this.addContactWithForm} />
        <p>Contacts</p>
        <ul></ul>
      </div>
    );
  }
}
