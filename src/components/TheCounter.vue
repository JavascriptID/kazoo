<template>
    <div class="py-3">
        <h3>{{ count }}</h3>
        <button @click="decrementCount()" class="btn btn-outline-primary">subtract one</button>
        <button @click="incrementCount()" class="btn btn-outline-primary">add one</button>
    </div>
</template>

<script>
  export default {
    name: 'the-counter',
    computed: {
      count() {
        return this.$store.getters.getCount;
      },
    },
    methods: {
      incrementCount() {
        this.$store.dispatch('incrementCount');
      },
      decrementCount() {
        this.$store.dispatch('decrementCount');
      },
    },
  };
</script>
