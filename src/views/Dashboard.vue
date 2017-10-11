<template>
    <div class="hello">
        <h1>{{ msg }}</h1>

        <div class="row">
            <div class="col-lg-8">
                <h3>The timeline</h3>
                <route-timeline></route-timeline>
            </div>
            <div class="col-lg-4">
                <h3>The counter</h3>
                <the-counter></the-counter>
            </div>
        </div>
    </div>
</template>

<script>
  import TheCounter from './../components/TheCounter';

  export default {
    name: 'dashboard',
    components: {
      TheCounter,
    },
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
