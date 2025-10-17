import LoginForm from "./LoginForm";
import { useContext } from "react";
import Footer from "../../components/Footer";
import { DataContext } from "../../context/AppContext";


const Login = () => {
  const { isAuthenticated, navigate } = useContext(DataContext);
  if (isAuthenticated) {
    navigate("/");
    return null;
  }

  return (
    <>
      <div className="container">
        <div className="content">
          
          
          <LoginForm />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
