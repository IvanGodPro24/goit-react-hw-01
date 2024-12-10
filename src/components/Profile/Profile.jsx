import clsx from "clsx";
import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={clsx(css["profile-card"])}>
      <div className={css.info}>
        <img
          src={image}
          alt="User avatar"
          width="100"
          className={css["profile-image"]}
        />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css["stats-list"]}>
        <li className={css["stats-item"]}>
          <span>Followers</span> <span>{followers}</span>
        </li>
        <li className={css["stats-item"]}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css["stats-item"]}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
