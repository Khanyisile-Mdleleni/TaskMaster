import React from "react";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/profile.png";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";



function AppMenu() {
  return (
    <div className="AppMenu">
      <img
        src={logo}
        alt="logo image"
        style={{
          width: "25px",
          height: "25px",
          marginTop: '4px'
        }}
      />
      <h5
        style={{
          position: "absolute",
          top: "10px",
          left: "40px",
          marginTop: "-2px",
        }}
      >
        Task Master
      </h5>

      <div style={{
        width: '500px',
      }}>
        <Form.Control type="text" placeholder="Search" />
      </div>
      <div
        style={{
          fontSize: "30px",
          position: "absolute",
          top: "10px",
          right: "150px",
          marginTop: "-10px",
        }}
      >
        <a href="">
          <i className="uil uil-bell"></i>
        </a>
      </div>
      <div>
        <Link to="/profile">
          <img
            src={profile}
            alt="user profile"
            style={{
              width: "40px", 
              height: "40px",
              borderRadius: "50%", 
            }}
          />
        </Link>
      </div>
    </div>
  );
}

export default AppMenu;
