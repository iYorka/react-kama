import React, {useEffect} from 'react';
import Header from "./Header";
import {setLoginData} from "../redux/authReducer";
import {connect} from "react-redux";
import axios from "axios";
import {authMe} from "../../api/api";

const HeaderContainer = ({isLogined, login, email, setLoginData}) => {
  useEffect(() => {
    authMe().then((data) => {
      if (data.data.login)
        setLoginData({
          login: data.data.login,
          email: data.data.email,
          id: data.data.id,
          isLogined: true
        })
      else
        setLoginData({
          login: null,
          email: null,
          id: null,
          isLogined: false
        })
    })
  }, [])
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

export default connect(mapStateToProps, {setLoginData})(HeaderContainer)