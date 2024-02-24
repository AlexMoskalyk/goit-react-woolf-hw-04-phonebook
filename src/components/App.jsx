import { Component } from 'react';
import Section from './section/Section';
import Form from './form/Form';
import ContactList from './contactList/ContactList';
import { eachWordWithCapitalLetter } from '../utils';
import { nanoid } from 'nanoid';
import Filter from './filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  createConatct = item => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === item.name.toLowerCase()
      )
    ) {
      alert(`${item.name} is already exist!`);
      return;
    }

    const optimiseItemData = {
      name: eachWordWithCapitalLetter(item.name),
      number: item.number,
      id: nanoid(),
    };

    this.setState(prev => ({
      contacts: [optimiseItemData, ...prev.contacts],
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filtredContacts = this.getFilteredContacts();
    return (
      <>
        <Section>
          <Form createConatct={this.createConatct} />
        </Section>
        <Section>
          <Filter
            filterValue={this.state.filter}
            handleFilter={this.handleFilter}
          />
          <ContactList
            contacts={filtredContacts}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
