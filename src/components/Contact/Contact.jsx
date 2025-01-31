import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  console.log("Contact props:", { id, name, number });
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contact}>
      <p>
        {name}: {number || "Номер відсутній"}
      </p>
      <button onClick={handleDelete} className={css.button}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;