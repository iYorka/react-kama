import React, {useEffect} from 'react';
import Header from "./Header";

import {connect} from "react-redux";
import {setLoginData, setLoginDataThunk} from "../redux/authReducer";

const HeaderContainer = ({isLogined, login, email, setLoginDataThunk}) => {
  useEffect(() => setLoginDataThunk(), [])
  return (
    <Header isLogined={isLogined} login={login} email={email}/>
  )
}

const mapStateToProps = (state) => {
  return ({
    isLogined: state.auth.isLogined,
    login: state.auth.login,
    email: state.auth.email
  })
}

export default connect(mapStateToProps, {setLoginData, setLoginDataThunk})(HeaderContainer)