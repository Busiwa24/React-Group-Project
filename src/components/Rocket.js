import React from 'react';
import PropTypes from 'prop-types';
import RocketButton from './RocketButton';
import RocketBadge from './RocketBadge';

const Rocket = ({
  Rocket_Name,
  Rocket_Id,
  description,
  Flickr_Images,
  reserved,
}) =>  {
  return (
    <li>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-3">
            <img src={flickr_images[0]} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{Rocket_Name}</h3>
              <p className="card-text">
                <RocketBadge reserved={reserved} />
                {description}
              </p>
              <RocketButton
                id={Rocket_Id}
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
  rocket_name: PropTypes.string,
  rocket_id: PropTypes.string,
  description: PropTypes.string,
  flickr_images: PropTypes.string,
  reserved: PropTypes.bool,
};

Rocket.defaultProps = {
  rocket_name: PropTypes.string,
  rocket_id: PropTypes.string,
  description: PropTypes.string,
  flickr_images: PropTypes.array,
  reserved: PropTypes.bool,
};

export default Rocket;
