import React, {useEffect, useState, createContext} from 'react';
import socketIOClient from 'socket.io-client';
import {BASE_URL1} from "@env"
// const ENDPOINT = 'http://192.168.1.4:8010'
const ENDPOINT = BASE_URL1;
const socket = socketIOClient(ENDPOINT);

export const ChatContext = createContext();
export const ChatProvider = ({user, children, navigation}) => {
  const [userOnline, setUserOnline] = useState([]);

  const auth = {
    token: 'berenang_renang_ketepian',
    userId: user.idForUser,
    username: user.displayName,
    profileImage: user.photoURL,
  };

  const unsubscribe = navigation.addListener('focus', () => {
    // The screen is focused
    // Call any action
    console.log('focuse');
  });

  useEffect(() => {
    socket.auth = auth;
    socket.connect();

    socket.on('USER_ONLINE', list => {
      const result = Object.keys(list).map(key => list[key]);
      console.log(result);
      setUserOnline(result);
    });

    return unsubscribe;
  }, [navigation]);

  const chatState = {socket, userOnline};

  return (
    <ChatContext.Provider value={chatState}>{children}</ChatContext.Provider>
  );
};
