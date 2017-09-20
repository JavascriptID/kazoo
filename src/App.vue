<template>
    <div class="admin">
        <div class="admin-sidebar bg-light">
            <navbar></navbar>
        </div>
        <div class="admin-body" role="main">
            <div class="container-fluid">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
  import Navbar from './components/Navbar';

  export default {
    components: { Navbar },
    name: 'app',
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
