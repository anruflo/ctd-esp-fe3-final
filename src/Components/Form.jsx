import { useState } from "react";
import FormStyles from "../Styles/Form.module.css";

const Form = () => {
  const [user, setUser] = useState({name: "", email:"", query: ""});
  const [error, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (
      user.name.trim().length >= 5 &&
      regexEmail.test(user.email) &&
      user.name.includes(" ") &&
      user.query.trim() !== ""
    ) {
      setSuccessMessage(true);
      setError(false);
    } else {
      setError(true);
    }
  }
  console.log(user);
  return (
    <div className={FormStyles.container}>
      {successMessage ? (<p className={FormStyles.success}>Thank you {user.name}, we will contact you as soon as possible by email</p> ): (
        <form onSubmit={handleSubmit}>
          <label>Full Name:</label>
          <input
            type="text"
            placeholder="Full Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <label>Query:</label>
          <textarea
            placeholder="Write your query here"
            value={user.query}
            onChange={(e) => setUser({ ...user, query: e.target.value })}
            rows="4"
          />
          <button className={FormStyles.send}>Send</button>
          {error && (<p className={FormStyles.error}>Please verify your information again</p>)}
        </form>
      )}
    </div>
  );
};

export default Form;
