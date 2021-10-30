import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missions';

import Mission from '../components/Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  });

  return (
    <div className="container">
      <h1>Missions</h1>
      <table className="table table-bordered border-secondary table-striped p-3">
        <thead>
          <tr>
            <th scope="col">Mission</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col" className=""><small className="visually-hidden">.</small></th>
          </tr>
        </thead>
        <tbody>
          {
            missions.map((mission) => (
              <Mission key={mission.mission_id} mission={mission} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
