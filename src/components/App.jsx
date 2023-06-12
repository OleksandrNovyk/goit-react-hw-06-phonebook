import { Container, MainHeader, SecondHeader } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <Container>
      <MainHeader>Phonebook</MainHeader>
      <ContactForm />
      <SecondHeader>Contacts</SecondHeader>
      <Filter />
      <ContactList />
    </Container>
  );
};
