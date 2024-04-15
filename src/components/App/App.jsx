import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import userData from "../userData.json";
import friendsJson from "../friends.json";
import transactions from "../transactions.json";
import css from "./App.module.css";

export default function App() {
  return (
    <>
      <div className={css.profileContainer}>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </div>
      <FriendList friends={friendsJson} />
      <TransactionHistory items={transactions} />
    </>
  );
}
