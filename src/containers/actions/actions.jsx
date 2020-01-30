import types from "../../types";

export default {
  increment: count => ({
    type: types.INCREMENT.type,
    value: count + 1
  }),
  decrement: count => ({
    type: types.DECREMENT.type,
    value: count - 1
  }),
  add5: count => ({
    type: types.DECREMENT.type,
    value: count + 5
  }),
  substract5: count => ({
    type: types.SUBSTRACT5.type,
    value: count - 5
  })
};
