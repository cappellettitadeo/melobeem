import "./style.less";

import { useRequest } from "ahooks";
import propTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { Redirect, withRouter } from "react-router";

import { api } from "../../api";
import UserContext from "../../helpers/user-context";
import Loader from "../animation/loader";
import { Error } from "../error";
import { HeaderUserWithChild } from "../header-user-with-child";
import { Payment } from "../payment";
import { Popup } from "../popup";
import AnimationAfterPurchase from "./blocks/animation";
import VoteList from "./blocks/vote-list";

const Vote = ({
  match: {
    params: { id },
  },
}) => {
  const [isPopupShown, setIsPopupShown] = useState(false);
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to={`/entry/${id}`} />;
  }

  const [activeOption, setActiveOption] = useState({
    price: null,
    value: null,
    title: null,
    id: null,
  });
  const [currentPage, setCurrentPage] = useState("vote");

  const [animationParams, setAnimationParams] = useState({
    isAnimationPlay: false,
    votesStart: 0,
    votesEnd: 0,
    rankStart: 0,
    rankEnd: 0,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const getCurrentCompetitor = () => {
    return api.get(`/entries/${id}`);
  };

  const getFreeVoteTimer = () => {
    return api.get(`/entries/${id}/votes/expiration_time_for_free`);
  };

  const getIsShowPopup = () => {
    return api.get("/users/show_share_modal");
  };

  const { data: child, error, loading, run: requestChild } = useRequest(
    getCurrentCompetitor,
    {
      formatResult: (res) => res.data.entry,
    }
  );

  const {
    data: timeFreeVote,
    error: timeError,
    loading: timeLoading,
    run: requestTimeFreeVote,
  } = useRequest(getFreeVoteTimer, {
    formatResult: (res) => res.data.ttlInSeconds,
  });

  const { data: isPopup, loading: isPopupLoading } = useRequest(
    getIsShowPopup,
    {
      formatResult: (res) => res.data,
    }
  );

  if (error || timeError) {
    return <Error />;
  }
  if (loading || timeLoading || isPopupLoading) {
    return <Loader />;
  }

  const handlePriceClick = (option) => {
    setActiveOption(option);
    setCurrentPage("payment");
  };

  const handlePaymentClose = () => {
    setCurrentPage("vote");
  };

  const handlePopupClose = () => {
    setIsPopupShown(false);
  };

  const updateStateAfterVote = async () => {
    requestChild();

    if (isPopup) {
      setTimeout(() => setIsPopupShown(true), 3000);
    }
  };

  const handlePaymentSucceedClose = async () => {
    setCurrentPage("animation");

    setAnimationParams((animationParams) => ({
      ...animationParams,
      votesStart: child.totalVotes,
      rankStart: child.rank,
    }));
    const {
      data: { entry },
    } = await api.get(`/entries/${id}`);

    setAnimationParams((animationParams) => ({
      ...animationParams,
      isAnimationPlay: true,
      votesEnd: entry.totalVotes,
      rankEnd: entry.rank,
    }));
  };

  const updateData = async () => {
    requestTimeFreeVote();
    updateStateAfterVote();
  };

  const renderVoteScreen = () => {
    if (currentPage === "vote") {
      return (
        <VoteList
          childId={child.id}
          timeFreeVote={timeFreeVote}
          handlePriceClick={handlePriceClick}
          updateData={updateData}
        />
      );
    }

    if (currentPage === "payment") {
      return (
        <Payment
          activeType="vote"
          activePrice={activeOption.price}
          activeTitle={activeOption.title}
          activeId={activeOption.id}
          handlePaymentSucceedClose={handlePaymentSucceedClose}
          handlePaymentClose={handlePaymentClose}
          childId={child.id}
          userId={user.id}
        />
      );
    }

    if (currentPage === "animation") {
      return <AnimationAfterPurchase value={activeOption.value} />;
    }

    return null;
  };

  return (
    <>
      <HeaderUserWithChild child={child} animationParams={animationParams} />

      {renderVoteScreen()}

      {isPopupShown && (
        <Popup
          handlePopupClose={handlePopupClose}
          linkId={child.id}
          name={child.name}
          image={child.imageUrl}
          type="vote"
        />
      )}
    </>
  );
};

Vote.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  }),
};

export default withRouter(Vote);
