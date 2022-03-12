import React from 'react';
import { Rating } from "@material-ui/lab";
import profilePng from "../../images/Profile.png";

function ReviewCard({ review }) {

    const options = {
        value: 4.3,
        readOnly: true,
        precision: 0.5,
    };

  return (
    <div className="reviewCard">
      <img src={profilePng} alt="User" />
      <p>Abishek</p>
      <Rating {...options} />
      <span className="reviewCardComment">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
    </div>
  )
}

export default ReviewCard