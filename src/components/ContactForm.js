import React, { useEffect, useState } from "react";
import styles from "../styles/ContactForm.module.css";

function ContactForm({ addContact, editContact }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (editContact) {
      setName(editContact.name);
      setEmail(editContact.email);
      setPhone(editContact.phone);
    } else {
      setName("");
      setEmail("");
      setPhone("");
    }
  }, [editContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      addContact({ name, email, phone });
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className={styles.inputfield}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={styles.inputfield}
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className={styles.inputfield}
        />
        <button type="submit" className={styles.submitButton}>
          {editContact ? "Update contact" : "Add Contact"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
