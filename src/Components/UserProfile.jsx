
import style from "./CSS/UserProfile.module.css"

function UserProfile() {


  return (
    <div>
        <h1 className={style.heading}> User Profile</h1>
      <div className={style.card}>
        <img
        className={style.img}
          src="https://i.pinimg.com/736x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg"
          alt=""
        />
        <div>
          <h4>Dheeraj Kumar</h4>
          <p>Frontend Developer</p>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
