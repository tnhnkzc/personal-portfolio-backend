export default (competences = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return competences;
    default:
      return competences;
  }
};
