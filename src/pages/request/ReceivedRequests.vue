<template>
  <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <base-card>
      <header>
        <h2>Requests Recieved</h2>
      </header>

      <base-spinner v-if="isLoading"></base-spinner>

      <ul v-else-if="hasRequests && !isLoading">
        <request-itemm
          v-for="req in requests"
          :key="req.id"
          :email="req.userEmail"
          :message="req.message"
        ></request-itemm>
      </ul>
      <h3 v-else>you have not any requests yet</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItemm from "../../components/requests/RequestItemm.vue";
export default {
  data() {
    return {
      isLoading: false,
      error: null,
    };
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
  created() {
    this.loadRequests();
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("requests/fetchRequests");
      } catch (error) {
        this.error = error.message || "Something failed!";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  mounted() {
    console.log(this.hasRequests);
    console.log(this.isLoading);
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
