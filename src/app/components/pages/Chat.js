"use client";
import React from "react";
import "./Chat.css";
import firebaseConfig from "../FirebaseConfig/FirebaseConfig";
import {ref, set, get, update, remove, child, push, onValue  } from "firebase/database";
import { useState, useEffect } from "react";

const ChatPage = () => {
    const [messageText, setMessageText] = useState("");
    const [messages, setMessages] = useState([]);
    const database = firebaseConfig();
  
    const sendMessage = () => {
      if (messageText.trim() !== "") {
        const messagesRef = ref(database, "messages");
        const newMessage = {
          text: messageText,
          timestamp: new Date().getTime(),
        };
        // Use 'push' method to add a new message
        push(messagesRef, newMessage)
          .then(() => {
            setMessageText("");
          })
          .catch((error) => {
            console.error("Error sending message:", error);
          });
      }
    };
  
    useEffect(() => {
      const messagesRef = ref(database, "messages");
      
      // Use 'get' to fetch initial data
      get(messagesRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const messageData = snapshot.val();
            const messageList = Object.values(messageData);
            setMessages(messageList);
          }
        })
        .catch((error) => {
          console.error("Error fetching messages:", error);
        });
  
      // Use 'onValue' to listen for real-time updates
      const unsubscribe = onValue(messagesRef, (snapshot) => {
        const messageData = snapshot.val();
        if (messageData) {
          const messageList = Object.values(messageData);
          setMessages(messageList);
        }
      });
  
      return () => unsubscribe(); // Clean up the listener when the component unmounts
    }, [database]);
  
  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>Chat</h1>
      </div>
      <div className="chat-messages">
      {messages.map((message, index) => (
        <div className="message sent" key={index}>
        <p>{message.text}</p>
        </div>
        ))}
        <div className="message received">
          <p>Hi there! I have a question.</p>
        </div>
        {/* Add more chat messages here */}
      </div>
      <div className="chat-input-container">
        <input type="text"
          placeholder="Type your message..."
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)} />
        <div class="button-container">
          <button class="send-button" onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
