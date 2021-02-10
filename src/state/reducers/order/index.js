const initialState = 'date:desc';

const order = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_ORDER':
      return payload.order;
    default:
      return state;
  }
};

export default order;
