import React from "react";
import { LogoLinkedin, LogoGithub, LogoTwitter, LogoDiscord, LogoChrome, Star, StarHalf } from "react-ionicons";

const Contact = () => {
  return (
    <div className="section dark contact">
      <div className="container">
        <h2>Get in touch with me</h2>
        <div className="socials">
          <LogoDiscord height="40px" width="40px" className="social" title="harshagw#5934" />
          <LogoGithub height="40px" width="40px" className="social" title="harshagw" />
          <LogoLinkedin height="40px" width="40px" className="social" title="harshagw" />
          <LogoTwitter height="40px" width="40px" className="social" title="harsh_agw" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
