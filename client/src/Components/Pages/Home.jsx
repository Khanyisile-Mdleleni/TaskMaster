import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div className="Main-page">
      <h4>Welcome to TaskMaster, Your Ultimate Tool for Task Management!</h4>{" "}
      <br />
      <p>
        With TaskMaster, you can organize your projects, optimize your workflow,
        and manage your obligations <br />
        more effectively than before and it provides a full range of tools that
        are designed to empower both
        <br /> people and teams to manage their work efficiently.
      </p>{" "}
      <br />  <br />
      <div className="Home-btns">
        <div>
        <Link to="/signup">
          <Button type="button">
            Get Started
          </Button>
        </Link>
        </div> 
        <div className="login-btn">
        <Link to="/login">
          <Button type="button">
            Login
          </Button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;