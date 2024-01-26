export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.firstName,
      lastName: data.lastName,
      description: data.description,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(
      `https://find-a-coach-back-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(coachData),
      }
    );
    // const responseData = await response.json();
    context.commit("registerCoach", {
      ...coachData,
      id: userId,
    });
  },
};
