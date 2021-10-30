const LOAD_ROCKETS = 'App/rockets/LOAD_ROCKETS';
const BOOK_ROCKET = 'App/rockets/BOOK_ROCKET';
const CANCEL_ROCKET = 'App/rockets/CANCEL_ROCKET';

const url = 'https://api.spacexdata.com/v3/rockets';

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_ROCKETS:
      return [...state, ...action.payload];
    case BOOK_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.rocket_id !== action.id) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
      return newState;
    }
    case CANCEL_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.rocket_id !== action.id) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
      return newState;
    }
    default:
      return state;
  }
};

export const loadRockets = (payload) => ({
  type: LOAD_ROCKETS,
  payload,
});

export const bookRocket = (id) => ({
  type: BOOK_ROCKET,
  id,
});

export const cancelRocket = (id) => ({
  type: CANCEL_ROCKET,
  id,
});

export const getRockets = () => async (dispatch) => {
  const basket = [];
  const rockets = await fetch(url);
  const rockesResult = await rockets.json();
  Object.entries(rockesResult).forEach((rocket) => {
    const target = rocket[1];
    basket.push({
      rocket_name: target.rocket_name,
      rocket_id: target.rocket_id,
      description: target.description,
      flickr_images: target.flickr_images,
      reserved: false,
    });
  });

  console.log(basket);
  dispatch(loadRockets(basket));
};

export default rocketsReducer;
