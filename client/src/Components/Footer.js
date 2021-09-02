import { useContext } from "react";
import { Button } from "semantic-ui-react";
import { Context } from "../context/Context";

const Footer = ({ handleLogout }) => {
  const { loggedin } = useContext(Context);

  return (
    <div>
      <div style={{textAlign:"center"}}> 
        {loggedin ? (
          <Button secondary className="FooterBtn" onClick={handleLogout}>
            Logout
          </Button>
        ) : null}
      </div>
      <small>Powered by IBM Watson and Pushshift API. Brinton Reed 2021.</small>
    </div>
  );
};

export default Footer;
