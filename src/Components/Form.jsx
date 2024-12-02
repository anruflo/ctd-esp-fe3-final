import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [user, setUser] = useState({name: "", email:""});
  const [error, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (
      user.name.trim().length >= 5 &&
      regexEmail.test(user.email) &&
      user.name.includes(" ")
    ) {
      setSuccessMessage(true);
      setError(false);
    } else {
      setError(true);
    }
  }
  console.log(user);
  return (
    <div>
      {successMessage ? (`Thank you ${user.name}, we will contact you as soon as possible by email` ): (
        <form onSubmit={handleSubmit}>
          <label>Full Name:</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <label>Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <button>Send</button>
          {error ? ("Please verify your information again"): null}
        </form>
      )}
    </div>
  );
};

export default Form;
