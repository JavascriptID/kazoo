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
      this.$routeTimeline.set('Dashboard', 'Im on a dashboard');
    },
    data() {
      return {
        msg: 'Kazoo admin',
      };
    },
  };
</script>
