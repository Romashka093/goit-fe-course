import React from 'react';
// import PropTypes from "prop-types";
import css from './description.module.css';

const Description = ({ avatar, name, tag, location }) => {
  return (
    <div className={css.description}>
      <img src={avatar} alt={name} className={css.avatar} />
      <p className={css.name}>{name}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};

// Description.defaultProps = {
//   src: "https://cdn.dribbble.com/users/1049434/screenshots/2547653/800x600.png",
//   alt: "user avatar photo"
// };

// Description.propTypes = {
//   src: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired
// };

export default Description;
