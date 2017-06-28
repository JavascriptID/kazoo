<template>
    <div class="py-3">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link :to="{name: 'people'}">
                    People
                </router-link>
            </li>
            <li class="breadcrumb-item active">
                {{ item.name }}
            </li>
        </ol>
        <h1>{{ item.name }}</h1>
        <div>
            <i class="fa fa-phone"></i>
            {{ item.phone }}
        </div>
    </div>
</template>

<script>
  export default {
    name: 'people-details',
    computed: {
      item() {
        return this.$store.getters['people/getItem'](this.$route.params);
      },
    },
    methods: {
      isItemRead(item) {
        if (!item.read) {
          this.$store.dispatch('people/readItem', item);
        }
      },
    },
    mounted() {
      this.isItemRead(this.item);
    },
    watch: {
      item(item) {
        this.isItemRead(item);
      },
    },
  };
</script>
