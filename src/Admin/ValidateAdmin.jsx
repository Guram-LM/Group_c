import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthorization } from "../context/AuthNontext";
import css from "../style.module.css"


export const ValidateAdmin = () => {
  const { login } = useAuthorization();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
   
    if (email === "admin@admin.com" && password === "1234") {
      login();
      navigate("/admin/dashboard");
    } else {
      alert("არასწორია ელ. ფოსტა ან პაროლი");
    }
  };

  return (
    <div className={css.validationPage}>
      <form onSubmit={onSubmit} className={css.validationInpute}>
        <h2>Login to the admin page</h2>
        <input type="email" placeholder="ელ. ფოსტა" autoComplete="current-password" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="პაროლი" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className={css.validationButton} type="submit">log in</button>
      </form>
    </div>
  );
};