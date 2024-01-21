<template>
  <section>
    <base-card>
      <h2>Register as a Coach now!</h2>
      <coach-form></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from "../../components/coaches/CoachForm.vue";
export default {
  data() {
    return {};
  },
  components: {
    CoachForm,
  },
};
</script>

<style>
/* Your styles go here */
</style>
