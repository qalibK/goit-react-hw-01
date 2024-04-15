import clsx from "clsx";
import css from "../FriendList/FriendList.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  const amountClassNames = clsx(
    css.text,
    css.status,
    isOnline ? css.isOnline : css.isOffline
  );

  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.text}>{name}</p>
      <p className={amountClassNames}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
