import "./style.less";

import propTypes from "prop-types";
import React from "react";

import HeartRating from "../../images/heart-rating.svg";

const HeaderUser = ({ child }) => {
  return (
    <div className="header-user">
      <div className="header-user__list">
        <div className="header-user__item">
          <div className="header-user__item__text text-tiny text-grey">
            Votes
          </div>
          <div className="header-user__item__number headline--medium text-pink">
            {child.likes}
          </div>
        </div>
        <div className="half-circle header-user__level">
          <div className="header-user__level__text text-grey text-tiny">
            Level 1 <span className="text-tiny">(1/5)</span>
          </div>
          <HeartRating />
        </div>
        <div className="header-user__item">
          <div className="header-user__item__text text-tiny text-grey">
            Rank
          </div>
          <div className="header-user__item__number headline--medium text-pink">
            {child.rank}
          </div>
        </div>
      </div>
    </div>
  );
};

HeaderUser.propTypes = {
  child: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    likes: propTypes.number.isRequired,
    rank: propTypes.number.isRequired,
  }),
};

export default HeaderUser;
