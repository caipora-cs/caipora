import React, { useState } from "react";
import Modal from "react-modal";

type LoginProps = {
  setCurrentUser: React.Dispatch<React.SetStateAction<string>>;
};

Modal.setAppElement("#root");

const Login: React.FC<LoginProps> = ({ setCurrentUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Login successful, user:", data);
      setCurrentUser(data.username);
      setModalIsOpen(false);
    } else {
      console.error("Login failed:", response.statusText);
    }
  };

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Login</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </form>
      </Modal>
    </div>
  );
};

export default Login;
