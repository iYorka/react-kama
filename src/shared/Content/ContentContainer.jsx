import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Content from "./Content";
import {addPost, changeText, setProfileData, setProfileIsLoading} from "../redux/profileReducer";
import {useParams} from "react-router";
import axios from "axios";
import emptyAvatar from "../../assets/images/empty.png";

const ContentContainer = ({isLogined, setProfileIsLoading, setProfileData, profile, isLoading }) => {
  const params = useParams();
  const userID = params.userID;
  useEffect(() => {
    if (params.userID) {
      setProfileIsLoading(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then((response) => {
        setProfileData({
          profile: {
            id: userID,
            name: response.data.fullName,
            avatar: response.data.photos.small ? response.data.photos.small : emptyAvatar,
            status: 'status',
            age: 'unknown',
            info: response.data.lookingForAJob ? 'Looking for job' : 'Not looking for job'
          }
        })
        setProfileIsLoading(false)
      })

    } else {
      setProfileData(
        isLogined ? ({
        profile: {
          id: 0,
          name: 'Me',
          avatar: 'https://99px.ru/sstorage/56/2013/02/mid_88793_9191.jpg',
          status: 'Bla bla bla',
          age: 'My real age',
          info: 'Looking for a good job'
        }
      }) : ({
          profile: {
            id: 0,
            name: 'NONE',
            avatar: 'https://99px.ru/sstorage/56/2013/02/mid_88793_9191.jpg',
            status: 'NONE',
            age: 'NONE',
            info: 'NONE'
          }
        }))
    }
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

export default connect(mapStateToProps, {setProfileIsLoading, setProfileData, addPost, changeText})(ContentContainer);