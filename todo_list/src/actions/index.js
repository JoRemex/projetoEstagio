export const array = (obj) => {
  return {
    type: "ADD",
    payload: obj,
  };
};
export const editTask = (task) => {
  return {
    type: "EDIT",
    payload: task,
  };
};
export const removeTask = (id) => {
  return {
    type: "REMOVE",
    payload: id,
  };
};
