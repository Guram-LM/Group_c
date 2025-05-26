import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>მენიუ</h2>
      <ul>
        <li><Link to="/admin">თამუნა გამსტილე</Link></li>
        <li><Link to="/admin">თამუნა გამსტილე</Link></li>
        <li><Link to="/admin">თამუნა გამსტილე</Link></li>
      </ul>
    </div>
  );
};