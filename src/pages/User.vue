<template>
    <div>
        <h1 class="title">Title</h1>
        <button @click="getUsers()" class="button">Get Users</button>
        <div class="table-container">
            <table class="table is-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tr v-for="each in users" :key="each.id">
                    <td>{{each.id}}</td>
                    <td><RouterLink :to="'/user/' + each.id">{{each.name}}</RouterLink></td>
                    <td>{{each.username}}</td>
                    <td>{{each.email}}</td>
                    <td>{{each.website}}</td>
                </tr>
            </table>
        </div>
        <!-- <p v-for="each in users" :key="each.id">{{ each.name }}</p>
        <pre>{{users}}</pre> -->
    </div>
</template>

<script>
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'
export default {
    data() {
        return {
            users: []
        }
    },
    methods: {
        getUsers(){
            axios.get(url).then(res => {
                this.users = res.data
            })
        }
    },
}
</script>