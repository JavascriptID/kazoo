<template>
    <div class="row">
        <div class="col-md-4 col-xl-3 bg-info vh-100">
            <div class="py-1" v-for="item in items" key="item.id">
                <router-link :to="{name: 'people-details', params: { id: item.id }}" class="d-block text-white">
                    {{ item.name }}
                </router-link>
            </div>
        </div>
        <div class="col-md-8 col-xl-9 vh-100">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'people',
    computed: {
      items() {
        return this.$store.getters['people/getItems'];
      },
    },
  };
</script>
