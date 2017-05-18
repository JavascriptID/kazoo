<template>
    <div class="py-3">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link :to="{name: 'mail'}">
                    mail
                </router-link>
            </li>
            <li class="breadcrumb-item active">
                {{item.name}}
            </li>
        </ol>
        <h1>{{item.name}}</h1>
        <div v-html="item.content"></div>
    </div>
</template>

<script>
  export default {
    name: 'mail-details',
    computed: {
      item() {
        return this.$store.getters['mail/getItem'](this.$route.params);
      },
    },
    methods: {
      isItemRead(item) {
        if (!item.read) {
          this.$store.dispatch('mail/readItem', item);
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
