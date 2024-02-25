import { useEffect, useState } from 'react';
import Section from './section/Section';
import Form from './form/Form';
import ContactList from './contactList/ContactList';
import { eachWordWithCapitalLetter } from '../utils';
import { nanoid } from 'nanoid';
import Filter from './filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState(getContactsFromLocalStorage());

  const [filter, setFilter] = useState('');

  function getContactsFromLocalStorage() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      return JSON.parse(storedContacts);
    } else {
      return [];
    }
  }

  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  const handleFilter = evt => {
    setFilter(evt.target.value);
  };

  const createConatct = item => {
    if (
      contacts.some(
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

    setContacts(prev => [optimiseItemData, ...prev]);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };

  return (
    <>
      <Section>
        <Form createConatct={createConatct} />
      </Section>
      <Section>
        <Filter filterValue={filter} handleFilter={handleFilter} />
        <ContactList
          contacts={getFilteredContacts()}
          deleteContact={deleteContact}
        />
      </Section>
    </>
  );
};

export default App;
