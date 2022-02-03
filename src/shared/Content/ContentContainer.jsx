import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Content from "./Content";
import {
  addPost,
  changeText,
  setMyProfile,
  setProfile,
  setProfileData,
  setProfileIsLoading
} from "../redux/profileReducer";
import {useParams} from "react-router";

const ContentContainer = ({setProfile, setMyProfile, isLogined, profile, isLoading }) => {
  const params = useParams();
  const userID = params.userID;
  useEffect(() => {
    if (params.userID) {
      setProfile(userID)
    } else { setMyProfile (isLogined)    }
  }, [params.userID, isLogined])
  return (
    <Content profile={profile} isLoading={isLoading}/>
  );
}

const mapStateToProps = (state) => {
  // debugger
  return {
    user_id: state.profilePage.profile.id,
    name: state.profilePage.profile.name,
    status: state.profilePage.profile.status,
    age: state.profilePage.profile.age,
    profile: state.profilePage.profile,
    isLoading: state.profilePage.isLoading,
    isLogined: state.auth.isLogined
  }
}

export default connect(mapStateToProps, {setProfile, setMyProfile, setProfileIsLoading, setProfileData, addPost, changeText})(ContentContainer);