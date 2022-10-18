import "../../styles.css";
import "./profile.css";
export const UserProfile = () => {
  return (
    <div className="main-profile-container">
      <div className="common-flex back-btn-container">
      <img src="/asset/back-btn.svg" alt="back-btn" className="back-btn" />
        <button>Back</button>
        
      </div>
      <div className="common-flex space-bet user-profile-container">
        <div className="common-column center">
          <img src="/asset/profile.svg" className="profile-img" alt="profile" />
          <p className="margin-sm personal-account">Personal Account</p>
          <p className="username">Andrew@polka.io</p>
        </div>
      </div>
    </div>
  );
};
