import React from 'react';
// import PropTypes from "prop-types";
import css from './stats.module.css';

const Stats = ({ followers, views, likes }) => {
  return (
    <ul className={css.stats}>
      <li className={css.eachStats}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li className={css.eachStats}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li className={css.eachStats}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{likes}</span>
      </li>
    </ul>
  );
};

// Stats.defaultProps = {
//   followers: 0,
//   views: 0,
//   likes: 0
// };

// Stats.propTypes = {
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       followers: PropTypes.number,
//       views: PropTypes.number,
//       likes: PropTypes.number
//     })
//   )
// };

export default Stats;
