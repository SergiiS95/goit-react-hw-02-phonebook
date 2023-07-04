import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddContact = contactData => {
    const isExist = this.state.contacts.some(
      contact => contactData.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isExist) {
      alert(`${contactData.name} is already in contacts.`);
      return;
    } 

      const finalContact = {
        id: nanoid(3),
        ...contactData,
      };
      this.setState(prevState => ({
        contacts: [finalContact, ...prevState.contacts],
      }));
    
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getVisibleFilter = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  render() {
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onAddContact={this.onAddContact} />
        <h2 className={css.titleContact}>Contacts</h2>
        <Filter value={this.state.filter} handleFilter={this.handleFilter} />
        <ContactList
          contacts={this.getVisibleFilter()}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}
