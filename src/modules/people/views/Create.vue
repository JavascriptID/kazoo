<template>
    <div class="py-3">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link :to="{name: 'people'}">
                    People
                </router-link>
            </li>
            <li class="breadcrumb-item active">
                Add person
            </li>
        </ol>
        <form @submit.prevent="addPerson()">
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
                Add person
            </button>
        </form>
    </div>
</template>

<script>
  const uuidv4 = require('uuid/v4');

  export default {
    name: 'people-create',
    data() {
      return {
        person: {
          id: uuidv4(),
          name: '',
          phone: '',
          function: '',
          image: 'static/male.svg',
        },
      };
    },
    methods: {
      addPerson() {
        this.$store.dispatch('people/addPerson', this.person);
        this.person = {
          id: uuidv4(),
          name: '',
          phone: '',
          function: '',
          image: 'static/male.svg',
        };
      },
    },
    mounted() {
    },
  };
</script>
