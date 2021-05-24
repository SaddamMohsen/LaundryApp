const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

export const createRequestTypes = base => {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
};

export const createAction = (type, data = {}) => {
  return { type, payload: data };
};

export const createActionTypes = type => ({
  request: data => createAction(type.REQUEST, data),
  success: data => createAction(type.SUCCESS, data),
  failure: error => createAction(type.FAILURE, error)
});
