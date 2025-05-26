import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthorization } from "../context/AuthNontext";


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
    <form onSubmit={onSubmit}>
      <h2>შესვლა ადმინის გვერდზე</h2>
      <input type="email" placeholder="ელ. ფოსტა" autoComplete="current-password" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="პაროლი" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">შესვლა</button>
    </form>
  );
};