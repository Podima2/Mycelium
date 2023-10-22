import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="frame">
        <div className="frame1">
          <div className="based-on-your">{`Based on your location, the maximum you could crowdfund every month is `}</div>
          <div className="already-a-member-log-in-parent">
            <div className="already-a-member-container">
              <span>{`Already A Member? `}</span>
              <span className="log-in">Log In</span>
            </div>
            <div className="frame2">
              <button className="create-account-wrapper">
                <div className="create-account">Create Account</div>
              </button>
            </div>
            <input
              className="frame3"
              placeholder="Wallet Address"
              type="text"
            />
            <div className="rectangle-group">
              <div className="frame-item" />
              <div className="frame-inner" />
              <div className="rectangle-container">
                <input
                  className="rectangle-input"
                  placeholder="Country"
                  type="text"
                />
                <input
                  className="frame-child1"
                  placeholder="State"
                  type="text"
                />
                <input
                  className="frame-child2"
                  placeholder="PostCode"
                  type="text"
                />
              </div>
              <input className="frame-child3" placeholder="City" type="text" />
              <input
                className="frame-child4"
                placeholder="House No."
                type="text"
              />
              <input
                className="frame-child5"
                placeholder="Home Address"
                type="text"
              />
            </div>
            <div className="frame4">
              <div className="sign-up1">Sign up</div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame5">
        <img
          className="muneeb-syed-x9nfed3fpse-unspla-icon"
          alt=""
          src="/muneebsyedx9nfed3fpseunsplash-1@2x.png"
        />
        <div className="frame6">
          <div className="my-group">
            <b className="my1">MY</b>
            <b className="celium1">CELIUM</b>
          </div>
          <img className="frame-icon" alt="" src="/frame.svg" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
