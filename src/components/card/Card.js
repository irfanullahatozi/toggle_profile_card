import React, { useState } from "react";
import classes from "./Card.module.css";

const Card = () => {
  const [toggle, setToggle] = useState(false);

  const btnHandler = (e) => {
    setToggle(!toggle);
  };

  return (
    <div className={`${classes.profile_card}`}>
      <img src={window.location.origin + "/profile1.png"} alt="profile" />
      <button
        id="toggleBtn"
        className={`${classes.toggleBtn}`}
        onClick={btnHandler}
      >
        {toggle ? (
          <i class="fas fa-arrow-down"></i>
        ) : (
          <i class="fas fa-arrow-up"></i>
        )}
      </button>
      <div
        className={`${classes.info}`}
        style={{
          transform: toggle ? "translateY(0rem)" : "translateY(8rem)",
        }}
      >
        <ul className={`${classes["social-icons"]}`}>
          <li>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-github"></i>
            </a>
          </li>
        </ul>
        <h4 className={`${classes.name}`}>Irfan Ullah</h4>
        <p className={`${classes.profession}`}>Full Stack Engineer</p>
      </div>
    </div>
  );
};

export default Card;
