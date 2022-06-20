const array = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "EDIT":
      return state.map((task) => {
        if (action.payload.id === task.id) {
          return { ...task, ...action.payload };
        }
        return task;
      });
    case "REMOVE":
      return state.filter((task) => action.payload !== task.id);

    default:
      return state;
  }
};

export default array;
