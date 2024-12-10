import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css";

const FriendsList = ({friends}) => {
  return (
    <ul className={css.list}>  
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendsList;
