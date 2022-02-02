import React, {useEffect} from 'react';
import styles from "./content.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import {useParams} from "react-router";
import axios from "axios";
import emptyAvatar from '../../assets/images/empty.png'

const Content = ({setProfileIsLoading, setProfileData, profile, isLoading}) => {

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
      setProfileData({
        profile: {
          id: 0,
          name: 'Me',
          avatar: 'https://99px.ru/sstorage/56/2013/02/mid_88793_9191.jpg',
          status: 'Bla bla bla',
          age: 'My real age',
          info: 'Looking for a good job'
        }
      })
    }
  }, [params.userID])
  return (
    <div className={styles.appContent}>
        <ProfileInfo profile={profile} isLoading={isLoading}/>
        <PostsContainer/>
    </div>

  );
};

export default Content;