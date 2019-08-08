<template>
    <tr>
        <td>{{user.id}}</td>
        <td><RouterLink :to="'/user/' + user.id">{{user.name}}</RouterLink></td>
        <td>{{user.username}}</td>
        <td>{{user.email}}</td>
        <td>{{user.website}}</td>
        <td>{{counter}}</td>
    </tr>
</template>

<script>
import {mapState} from 'vuex'
export default {
    props: {
        user: {
            required: true
        }
    },
    computed: {
        // counter() {
        //     return this.$store.state.counter
        // },
        ...mapState(['counter'])
    },
}
</script>