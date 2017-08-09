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
        <h1>{{ person.name }}</h1>
        <div>
            <i class="fa fa-phone"></i>
            <img :src="person.image" alt="">
            <div>
                {{ person.phone }}
            </div>
            <div>
                {{ person.function }}
            </div>
            <router-link :to="{name: 'people-edit', params: { id: person.id }}" class="btn btn-info">
                edit
            </router-link>
            <a @click.prevent="removePerson()" href="#" class="btn btn-danger">remove</a>
        </div>
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
      removePerson() {
        this.$store.dispatch('people/removePerson', this.person.id);
        this.$router.push({
          name: 'people-welcome',
        });
      },
    },
  };
</script>
