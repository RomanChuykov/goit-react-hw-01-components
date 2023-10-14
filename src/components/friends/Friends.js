// import React from 'react'
import { FriendItem } from './FriendItem';
import { Container } from './Friends.styled';


export const Friends = ({friends}) => {
  return (
    <Container>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return <FriendItem avatar={avatar} name={name} isOnline={isOnline} key={id} />;
      })}
    </Container>
  );
};