import React from 'react';
import PropTypes from 'prop-types';
import RocketButton from './RocketButton';
import RocketBadge from './RocketBadge';

const Rocket = ({
  rocketName,
  rocketId,
  description,
  flickrImages,
  reserved,
}) => {
  console.log(flickrImages);

  return (
    <li>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-3">
            <img src={flickrImages[1]} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{rocketName}</h3>
              <p className="card-text">
                <RocketBadge reserved={reserved} />
                {description}
              </p>
              <RocketButton
                id={rocketId}
                reserved={reserved}
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  rocketName: PropTypes.string,
  rocketId: PropTypes.string,
  description: PropTypes.string,
  flickrImages: PropTypes.instanceOf(Array),
  reserved: PropTypes.bool,
};

Rocket.defaultProps = {
  rocketName: PropTypes.string,
  rocketId: PropTypes.string,
  description: PropTypes.string,
  flickrImages: PropTypes.array,
  reserved: PropTypes.bool,
};

export default Rocket;
