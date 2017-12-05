<template>
    <div class="admin">
        <div class="admin-sidebar bg-light">
            <the-navbar></the-navbar>
        </div>
        <div class="admin-body" role="main">
            <div class="container-fluid">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
  import TheNavbar from './components/TheNavbar';

  export default {
    components: { TheNavbar },
    name: 'app',
//    mounted() {
//      this.$store.dispatch('initialize', null, { root: true });
//    },
  };
</script>

<style lang="scss">
    $enable-rounded: false;
    $fa-font-path: "~font-awesome/fonts";
    $kazoo-grid-breakpoint: 992px;

    @import '~bootstrap/scss/bootstrap';
    @import '~font-awesome/scss/font-awesome';
    @import '~vue-route-timeline/src/style/vue-route-timeline';
    @import './scss/tabbar';

    @media screen and (min-width: $kazoo-grid-breakpoint) {
        .admin {
            height: 100vh;
            display: flex;

            .admin-sidebar {
                width: 280px;
                overflow: auto;
            }

            .admin-body {
                flex: 1;
                overflow: auto;
            }
        }

        .vh-100 {
            height: 100vh;
            overflow: auto;
        }
    }
</style>
