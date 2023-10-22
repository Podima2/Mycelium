import { Link } from "react-router-dom";
import "./LandingPageHeroSectionDesi.css";

const LandingPageHeroSectionDesi = () => {
  return (
    <div className="landing-page-hero-section-desi">
      <div className="frame7">
        <img className="img-12-icon" alt="" src="/img12@2x.png" />
      </div>
      <div className="frame8">
        <img className="image-27-icon" alt="" src="/image-27@2x.png" />
        <div className="frame-child6" />
        <div className="frame-child7" />
        <div className="my-container">
          <b className="my2">MY</b>
          <b className="celium2">CELIUM</b>
        </div>
        <Link className="sign-up-wrapper" to="/sign-up">
          <div className="sign-up2">Sign Up</div>
        </Link>
        <div className="natural-disaster-crowdfunding">
          Natural Disaster Crowdfunding
        </div>
        <div className="join-a-supportive">{`Join a supportive community that donates to each other in times of need, gain independence from unreliable insurance companies and enjoy cheaper services with collective negotiation. `}</div>
        <div className="how-it-works-parent">
          <button className="how-it-works">How it Works</button>
          <button className="pricing">Pricing</button>
          <button className="log-in-wrapper">
            <div className="log-in1">Log In</div>
          </button>
        </div>
        <div className="frame-child8" />
        <img className="group-icon" alt="" src="/group-328.svg" />
      </div>
    </div>
  );
};

export default LandingPageHeroSectionDesi;
