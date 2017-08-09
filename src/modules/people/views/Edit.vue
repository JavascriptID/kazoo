<template>
    <div class="py-3">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link :to="{name: 'people'}">
                    People
                </router-link>
            </li>
            <li class="breadcrumb-item active">
                {{ person.name }}
            </li>
        </ol>
        <form @submit.prevent="patchPerson()">
            <div class="form-group">
                <label for="person-name">Name</label>
                <input type="text" class="form-control" id="person-name" v-model="person.name">
            </div>
            <div class="form-group">
                <label for="person-phone">Phone</label>
                <input type="text" class="form-control" id="person-phone" v-model="person.phone">
            </div>
            <div class="form-group">
                <label for="person-function">Function</label>
                <input type="text" class="form-control" id="person-function" v-model="person.function">
            </div>
            <button type="submit" class="btn btn-primary">
                Update person
            </button>
        </form>
    </div>
</template>

<script>
  export default {
    name: 'people-details',
    computed: {
      person() {
        return this.$store.getters['people/getItem'](this.$route.params);
      },
    },
    methods: {
      patchPerson() {
        this.$store.dispatch('people/patchPerson', this.person);
      },
    },
  };
</script>
