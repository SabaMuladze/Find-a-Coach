<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Recieved</h2>
      </header>
      <ul v-if="hasRequests">
        <request-itemm
          v-for="req in requests"
          :key="req.id"
          :email="req.userEmail"
          :message="req.message"
        ></request-itemm>
      </ul>
      <h3 v-if="!hasRequests">you have not any requests yet</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItemm from "../../components/requests/RequestItemm.vue";
export default {
  data() {
    return {};
  },
  components: {
    RequestItemm,
  },
  computed: {
    requests() {
      return this.$store.getters["requests/receivedRequests"];
    },
    hasRequests() {
      return this.$store.getters["requests/hasRequests"];
    },
  },
  mounted() {
    console.log(this.hasRequests);
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
