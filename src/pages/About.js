import React, { Component } from 'react';

import "./About.css";
import profile_pic_name from "../assets/profile_pic_name.png";

export default class About extends Component {
  render() {
    return (
      <div>
        <p>
          <div>
            <div className="split left">
              <div className="centered">
                <img
                  className="profile_image" src={profile_pic_name}
                  // Image goes here
                  alt="Profile Pic"
                ></img>
              </div>
            </div>
            <div className="split right">
              <div className="centered">
                <div className="name_title">Emily Perez-Rodriguez</div>
                <div className="brief_description">
                  I am a computer science and public health studies student from Baltimore, Maryland. I also love OnePiece.
                </div>
              </div>
            </div>
          </div>




        </p>
      </div>
    )
  }
}