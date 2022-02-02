import React from 'react';
import {connect} from "react-redux";
import Content from "./Content";
import {addPost, changeText, setProfileData, setProfileIsLoading} from "../redux/profileReducer";

const mapStateToProps = (state) => {
  // debugger
  return {
    user_id: state.profilePage.profile.id,
    name: state.profilePage.profile.name,
    status: state.profilePage.profile.status,
    age: state.profilePage.profile.age,
    profile: state.profilePage.profile,
    isLoading: state.profilePage.isLoading
  }
}

export default connect(mapStateToProps, {setProfileIsLoading, setProfileData, addPost, changeText})(Content);