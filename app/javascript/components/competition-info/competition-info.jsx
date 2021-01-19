import React from 'react';
import propTypes from 'prop-types';
import './style.less';
import {calcDaysLeft} from '../../helpers/date';

const CompetitionInfo = ({timeLeft, prize}) => {
  return (
    <div className="competition-info">
      <div className="competition-info__item">
        <div className="competition-info__item__title text-grey">Days left</div>
        <div className="competition-info__item__title headline--medium text-pink">{calcDaysLeft(timeLeft)}</div>
      </div>
      <div className="competition-info__item">
        <div className="competition-info__item__title text-grey">Prize</div>
        <div className="competition-info__item__title headline--medium text-pink">£{Math.trunc(prize)}</div>
      </div>
    </div>
  );
}

CompetitionInfo.propTypes = {
  timeLeft: propTypes.string.isRequired,
  prize: propTypes.string.isRequired
};

export default CompetitionInfo;
