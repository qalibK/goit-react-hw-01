import css from "./Profile.module.css";
import clsx from "clsx";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileContainer}>
      <div className={css.avatarContainer}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.nameText}>{name}</p>
        <p className={clsx(css.profileText, css.tagText)}>@{tag}</p>
        <p className={css.profileText}>{location}</p>
      </div>

      <ul className={css.statsContainer}>
        <li className={css.statsItem}>
          <span>Followers </span>
          <span className={css.countText}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views </span>
          <span className={css.countText}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes </span>
          <span className={css.countText}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
