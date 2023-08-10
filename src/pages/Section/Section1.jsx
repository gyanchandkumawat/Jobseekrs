import React from 'react';
import microsoftLogo from '../../assets/microsoft.svg';
import airbnbLogo from '../../assets/airbnb.svg';
import godaddyLogo from '../../assets/godaddy-black.svg';
import bissellLogo from '../../assets/bissell.svg';
import image1 from '../../assets/image-1.jpg';
import { Link } from 'react-router-dom';

const Section1 = () => {
  return (
    <section className="container">
      <div className="section_1_bottom">
        <div className="section_1_bottom_left mt-5">
          <h1 className="title-1">
            How work<br />
            should work
          </h1>
          <h3 className="title-3">
            Forget the old rules. You can have the best people.<br />
            Right now. Right here.
          </h3>
          <div className="section_1_bottom_left_btns">
            <Link to="/findtalent">
            <button className="btn_secondary">Find Talent</button>
            </Link>
            <button className="btn_secondary_outline">Find Work</button>
          </div>
        </div>
        <div className="section_1_bottom_right">
          <img src={image1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section1;
