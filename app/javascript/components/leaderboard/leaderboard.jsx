import React, {useState, useEffect} from 'react';
import {useRequest} from 'ahooks';

import {createAPI} from '../../api';

import {HeaderNotLogin} from '../header-not-login';
import {NewIn} from '../new-in';
import {CompetitionInfo} from '../competition-info'


const Leaderboard = () => {
  const api = createAPI();

  const getCurrentCompetition = () => {
    return api.get(`/currentCompetition`);
  }

  const {data, error, loading} = useRequest(getCurrentCompetition, 
    {formatResult: (res) => res.data[0]});

  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <HeaderNotLogin/>
      <NewIn competitors={data.competitors}/>
      <CompetitionInfo timeLeft={data.timeLeft} prize={data.prize}/>
    </>
  );
  
}

export default Leaderboard;
