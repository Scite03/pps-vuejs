<template>
    <div>
        <h1 class="title">Vuex</h1>
        <!-- <p><button @click="$store.dispatch('actionGetUsers')" class="button">GetUser</button></p>

        <p v-if="$store.state.waiting">Please waiting.....</p>
        <pre v-if="!$store.state.waiting">{{ $store.state.users }}</pre> -->
        <!-- <p>Counter: {{$store.state.counter}}</p>
        <p>Double Counter: {{$store.getters.doubleCounter}}</p>
        <p><button @click="updateCounter(10)" class="button">Update</button></p>
        <p><button @click="$store.dispatch('actionCounter')" class="button">Update Action</button></p> -->
        <button @click="$store.commit('customer/foo')" class="button">Foo</button>
        <pre>{{ $store.state.user.users}}</pre>
        <p>Count: {{$store.getters.userCount}}</p>
    </div>
</template>

<script>
// import axios from 'axios'
// const url = 'https://jsonplaceholder.typicode.com/users'
// import { mapMutation } from 'vuex'
export default { 
    methods: {

        // getUsers(){
        //     axios.get(url).then(res => {
        //         // this.users = res.data
        //         this.$store.commit('mutateUsers', res.data)
        //     })
        // }
        // updateCounter() {
        //     this.$store.commit('mutateCounter', 10)
        // },
        // ...mapMutation(['mutateCounter'])
    }
}
</script>