import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';
import Rocket from '../components/Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRockets());
    }
  }, []);

  console.log(
    rockets,
  );

  return (
    <div className="ms-4 me-3">
      <h1>Rockets</h1>
      <ul className="pb-3 ps-0">
        {
          rockets.map((rocket) => (
            <Rocket
              key={rocket.rocket_id}
              rocketName={rocket.rocket_name}
              rocketId={rocket.rocket_id}
              description={rocket.description}
              flickrImages={rocket.flickr_images}
              reserved={rocket.reserved}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default Rockets;
