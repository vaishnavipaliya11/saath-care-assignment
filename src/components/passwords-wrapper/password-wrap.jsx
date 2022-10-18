import "./password-wrap.css";
export const PasswordWrapper = () => {
  return (
    <div className="password-container common-column margin-sm pd-lrg">
      <label className=" pass-heading">Password</label>
      <div className="password-group">
        <input type="password" className="pd-sm password-input" />
        <img src="/asset/eye-icon.svg" alt="eye-icon" className="eye-icon" />
      </div>

      <p className="margin-sm forget-pass-heading">
        Forget Password? <a> Reset</a>
      </p>

      <div className="common-flex space-bet pd-lrg sign-bottom-container">
        <label className="common-flex center">
          {" "}
          <input type="checkbox" className="signin-input" />
          <span className="sign-in-label"> Stay signed in</span>
        </label>

        <button className="sign-btn">SignIn</button>
      </div>
    </div>
  );
};
