<template>
  <section>
    <base-card>
      <h2>Page not found!</h2>
      <p>
        This page could not be found - maybe check out our all
        <router-link to="/coaches">coaches</router-link>
      </p>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: "World",
    };
  },
};
</script>

<style>
/* Your styles go here */
</style>
