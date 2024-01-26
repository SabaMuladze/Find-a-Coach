export default {
  receivedRequests(state, _, _2, rootGetters) {
    const coachId = rootGetters.userId;
    console.log(state.requests);
    return state.requests.filter((req) => req.coachId === coachId);
  },
  hasRequests(_, getters) {
    return getters.receivedRequests && getters.receivedRequests.length > 0;
  },
};
