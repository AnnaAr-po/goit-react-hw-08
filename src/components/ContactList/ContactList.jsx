import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts) || [];


  return (
  <div className={css.container}>
    <ul className={css.list}>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </ul>
  </div>
  );
};

export default ContactList;