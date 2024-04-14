import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import userData from "../userData.json";
import friendsJson from "../friends.json";

export default function App() {
  return (
    <>
      <div>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </div>
      <FriendList friends={friendsJson} />
    </>
  );
}
