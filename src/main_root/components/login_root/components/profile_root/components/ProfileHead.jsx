import React from "react";
import "../css/profilehead.css";
export default function ProfileHead(props) {
  return (
    <div className="profile-head">
      <h4 className="profile-head__name">Marycarmen Campos Velez</h4>
      <div className="profile-head__container">
        <img
          src={process.env.PUBLIC_URL + "/profile/marycarmen_facebook.jpg"}
          alt="foto del admin"
        />
      </div>
    </div>
  );
}
