import "../../styles.css";
import "./profile.css";
export const UserProfile = () => {
  return (
    <div className="common-flex space-bet user-profile-container">
      <div className="common-column">
        <div>
          <img src="/asset/back-btn.svg" alt="back-btn"  className="back-btn"/>
        </div>

        <button>back</button>
      </div>
      <div className="common-column center">
        <img src="/asset/profile.svg" className="profile-img" alt="profile" />
        <p className="margin-sm">Personal Account</p>
        <p className="username">Andrew@polka.io</p>
      </div>
    </div>
  );
};
