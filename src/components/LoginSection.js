import { Button, ButtonGroup } from "@mui/material";
import '../styles/LoginSection.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginSection = () => {

  const handleLoginClick = () => toast("Not Connected to Backend Continue with Guest Mode", {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  const handleSignUpClick = () => toast("Not Connected to Backend Continue with Guest Mode", {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  const handleGuestClick = () => toast("You're already on Guest Mode", {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  return(
    <div>
      <ButtonGroup variant="contained" aria-label="outlined button group" color = "primary" className = "login-button"
      sx = {{margin: "10px",
              maxHeight: "40px",
              minWidth: "150px",
              marginRight: "20px"
             }}>
        <Button onClick = {handleLoginClick}>Login</Button>
        <Button onClick = {handleSignUpClick}>Sign Up</Button>
        <Button onClick = {handleGuestClick}>Guest</Button>
        <ToastContainer 
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      </ButtonGroup>
    </div>
  );
}

export default LoginSection;