import React from "react";
import { Drawer } from "antd";
import "./AuthDrawer.scss";
import { useSearchParams } from "react-router-dom";

const AuthDrawer = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const authType = searchParams.get('auth')
  const closeModal = () => {
    searchParams.delete('auth')
    setSearchParams(searchParams)
  }

  return (
    <div className="auth__drawer__container">
      <Drawer
        placement="right"
        onClose={closeModal}
        open={!!authType}
        closable={false}
        className="auth__drawer"
      >
        {/* <div className="auth__drawer__back__button" onClick={closeModal} >
          <Image src={BackArrow} preview={false} width={'100%'} />
        </div>
        <Image className="auth__cover" src={AuthCover} preview={false} />
        <div className="drawer__form__container">
        <div className="auth__drawer__logo__container">
        <Logo />
        </div>
        {authType === "login" && <LoginForm closeModal={closeModal} />}
        {authType === "register" && (
          <RegisterForm closeModal={closeModal} />
        )}
        </div> */}
      </Drawer>
    </div>
  );
};

export default AuthDrawer;
