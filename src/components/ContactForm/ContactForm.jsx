import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { useState } from "react";
import css from './ContactForm.module.css';


const ContactForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting:", { name, number });

        if (!name.trim() || !number.trim()) {
            alert("Будь ласка, введіть ім'я та номер телефону!");
            return;
        }

        dispatch(addContact({ name, number }));
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    className={css.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Введіть ім'я"
                />
            </label>

            <label>
                Number
                <input
                    type="text"
                    name="number"
                    className={css.input}
                    value={number}
                    onChange={(e) => setNumber(e.target.value)} 
                    placeholder="Введіть номер телефону"
                />
            </label>

            <button type="submit" className={css.button}>
                Add Contact
            </button>
        </form>
    );
};

export default ContactForm;