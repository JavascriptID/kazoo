<template>
    <div class="py-3">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link :to="{name: 'messages'}">
                    mail
                </router-link>
            </li>
            <li class="breadcrumb-item active">
                {{ item.name }}
            </li>
        </ol>
        <h1>{{ item.name }}</h1>
        <div v-html="item.content"></div>
    </div>
</template>

<script>
  export default {
    name: 'messages-details',
    computed: {
      item() {
        return this.$store.getters['messages/getItem'](this.$route.params);
      },
    },
    methods: {
      isItemRead(item) {
        if (!item.read) {
          this.$store.dispatch('messages/readItem', item);
        }
      },
      addTimeline() {
        this.$routeTimeline.set(this.item.name, 'Message');
      },
    },
    mounted() {
      this.isItemRead(this.item);
      this.addTimeline();
    },
    watch: {
      item(item) {
        this.isItemRead(item);
        this.addTimeline();
      },
    },
  };
</script>
