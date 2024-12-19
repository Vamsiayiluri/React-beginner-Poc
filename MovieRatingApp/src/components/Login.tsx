import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/movies");
  };
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className={styles.loginContainer}>
      {!isLoggedIn && (
        <button className={styles.loginButton} onClick={handleLogin}>
          Login
        </button>
      )}
      {isLoggedIn && (
        <button className={styles.loginButton} onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Login;
