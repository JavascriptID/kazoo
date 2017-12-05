<template>
    <nav class="tabbar tabbar-toggleable-md">
        <router-link :to="{name: 'dashboard'}" class="tabbar-brand">
            Kazoo
        </router-link>

        <ul class="tabbar-nav bg-light">
            <li class="tabbar-item" v-for="route in routes">
                <router-link :to="route" class="tabbar-link text-dark" active-class="active">
                    <i class="fa tabbar-icon" :class="route.icon"></i>
                    {{ route.title }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
  export default {
    name: 'the-navbar',
    computed: {
      routes() {
        const routes = [];
        Object.keys(this.$router.options.routes).forEach((key) => {
          const route = this.$router.options.routes[key];
          if (route.title) {
            routes.push(route);
          }
        });
        return routes;
      },
    },
  };
</script>
