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
                <UserListItem 
                    :key="each.id" v-for="each in users" :user="each" 
                />
            </table>
        </div>
        <!-- <p v-for="each in users" :key="each.id">{{ each.name }}</p>
        <pre>{{users}}</pre> -->
    </div>
</template>

<script>
import axios from 'axios'
import UserListItem from '@/components/UserListItem'

const url = 'https://jsonplaceholder.typicode.com/users'
export default {
    components: {
        UserListItem
    },
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