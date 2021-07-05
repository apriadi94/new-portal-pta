import React, { useEffect, useState, createContext } from 'react';
import socketIOClient from "socket.io-client";
const ENDPOINT = 'https://chat2.pta-banjarmasin.go.id'
const socket = socketIOClient(ENDPOINT);

export const ChatContext = createContext();
export const ChatProvider = ({ user, children }) => {

    const auth = {
        token: 'berenang_renang_ketepian', 
        userId:  user.idForUser, 
        username:  user.displayName, 
        profileImage :  user.photoURL
    }

    useEffect(() => {
        socket.auth = auth;
        socket.connect();

        return(() => {
            socket.disconnect()
        })
    }, [])

    const chatState = { socket };

    return(
        <ChatContext.Provider value={chatState}>
            {children}
        </ChatContext.Provider>
    )
}