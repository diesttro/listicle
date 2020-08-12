import { SET_ORDER } from '../../types/order';

const setOrder = order => ({
  type: SET_ORDER,
  payload: { order },
});

export { setOrder };
