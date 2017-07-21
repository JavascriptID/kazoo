<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <route-timeline></route-timeline>
    </div>
</template>

<script>
  export default {
    name: 'dashboard',
    mounted() {
      this.$store.dispatch('timeline/addTimelineItem', {
        title: 'Dashboard',
        route: this.$route,
      });
    },
    data() {
      return {
        msg: 'Kazoo admin',
      };
    },
  };
</script>
