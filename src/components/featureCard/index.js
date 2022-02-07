import React from "react";
import "./featureCard.css";
import userpic from "../../img/idpic2.jpg";

const FeatureCard = () => {
  return (
    <>
      <div className="featureCard mt-4 mx-1 mx-sm-5 mx-md-2 mx-xl-5">
        <div className="featureCard-img">
          <img src={userpic} alt="user-pic" />
          <div className="top-details d-flex justify-content-between align-items-start">
            <div class="d-flex justify-content-between align-items-center w-100">
              <h4>Edward Norton</h4>
              <p className="py-1">
                <span class="px-2">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </span>
                (4.5)
              </p>
            </div>
          </div>
        </div>
        <div className="featureCard-detail p-3">
          <div className="d-flex justify-content-between align-items-center">
          <h5>Specialties:</h5>
            <span className="status"><i class="fas fa-circle mx-2"></i>Online</span>
            </div>
          <ul>
              <li>Love & Relationhips</li>
              <li>Twin Flames</li>
              <li>Numerology</li>
              <li>Tarot</li>
          </ul>
          <div className="d-flex justify-content-center align-items-center px-3">
              <del>
              <p className="old-price mx-2"><span>$</span>3/min</p>
              </del>
          <p className="card-price mx-2"><span>$</span>1/min</p>
          </div>
          <a href="#">
              <button className="btn w-100">Chat Now</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
