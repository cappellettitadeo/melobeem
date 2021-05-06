import { useRequest } from "ahooks";
import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { api } from "../../api";
import ChildContext from "../../helpers/child-context";
import UserContext from "../../helpers/user-context";
import { CompetitionInfo } from "../competition-info";
import { Competitors } from "../competitors";
import { Error } from "../error";
import { Footer } from "../footer";
import { HeaderLogin } from "../header-login";
import { HeaderNotLogin } from "../header-not-login";
import { Loading } from "../loading";

const Leaderboard = () => {
  const { user } = useContext(UserContext);
  const { setCurrentChild } = useContext(ChildContext);

  const location = useLocation();

  const getCompetition = () => {
    return api.get(`/competitions/current`);
  };
  const getEntries = () => {
    return api.get("/entries", {
      params: {
        per: 50,
      },
    });
  };

  const getCurrentEntryWhenUserLogin = async () => {
    const {
      data: { entry },
    } = await api.get("/entries/current");
    setCurrentChild(entry);
  };

  const {
    data: childrenData,
    error: childrenError,
    loading: childrenLoading,
  } = useRequest(getEntries, {
    formatResult: (res) => res.data.entries,
  });

  const {
    data: competitionData,
    error: competitionError,
    loading: competitionLoading,
  } = useRequest(getCompetition, {
    formatResult: (res) => res.data.competition,
  });

  useEffect(() => {
    const referralParams = new URLSearchParams(location.search);
    const referralId = referralParams.get("ref");

    if (referralId) {
      document.cookie = `ref=${referralId}; max-age=86400`;
    }
  }, [location.search]);

  if (competitionError || childrenError) {
    return <Error />;
  }
  if (competitionLoading || childrenLoading) {
    return <Loading />;
  }

  return (
    <>
      {user ? (
        <HeaderLogin
          endsAt={competitionData.endsAt}
          createdAt={competitionData.createdAt}
        />
      ) : (
        <HeaderNotLogin getCurrentEntry={getCurrentEntryWhenUserLogin} />
      )}
      <CompetitionInfo
        timeLeft={competitionData.endsAt}
        prize={competitionData.prizeCents}
      />
      <Competitors competitors={childrenData} />
      <Footer active="leaderboard" />
    </>
  );
};

export default Leaderboard;
