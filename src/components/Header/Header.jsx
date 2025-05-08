import { useState } from "react";

import * as Style from "./Header.styles";
import LoginIcon from "@mui/icons-material/Login";
import LoginModal from "../LoginModal";

const Header = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <Style.Container>
        <Style.Navigation>
          <Style.Login>
            <LoginIcon
              className="login-icon"
              onClick={() => setLoginOpen(true)}
            />
          </Style.Login>
        </Style.Navigation>
      </Style.Container>
      <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
};

export default Header;
