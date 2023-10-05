"use client";
import FirebaseConfig from "../FirebaseConfig/FirebaseConfig";
import { ref, set, get, update, remove, child } from "firebase/database";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faPhone, faComments } from "@fortawesome/free-solid-svg-icons";
import ChatPage from "./Chat";
import { useRouter } from 'next/router'

const HomePage = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isCallVisible, setIsCallVisible] = useState(true);
  

  const handleAlertButtonClick = () => {
    alert("Alert Button is clicked!");
  };

  const handleCallButtonClick = () => {
    const phoneNumber = "+919552344220";
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="container">
      <h1 className="heading">CpGuard</h1>
      <div className="card">
        <h1>BMW</h1>
        <h4>MH 12 BM 6262</h4>
        <p>Ajay Bakshi</p>
      </div>
      <div className="button-container">
        {isAlertVisible && (
          <button className="primary-button" onClick={handleAlertButtonClick}>
            <FontAwesomeIcon icon={faBell} /> Alert
          </button>
        )}
        {isCallVisible && (
          <button className="secondary-button" onClick={handleCallButtonClick}>
            <FontAwesomeIcon icon={faPhone} /> Call
          </button>
        )}
        <button className="tertiary-button">
          <FontAwesomeIcon icon={faComments} /> Chat
        </button>
      </div>
    </div>
  );
};

export default HomePage;
