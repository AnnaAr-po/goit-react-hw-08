import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

    console.log("Filtered contacts:", contacts);

 if (!contacts || contacts.length === 0) {
    return <p className={css.nofound}>No contacts found.</p>;
  }

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;