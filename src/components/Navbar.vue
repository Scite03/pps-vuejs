<template>
    <div>
        <!-- <h1 class="tital">Navbar</h1> -->
        <RouterLink to="/">One</RouterLink>
        {{ ' | ' }}
        <RouterLink to="/about">Two</RouterLink>
        {{ ' | ' }}
        <RouterLink to="/three">Three</RouterLink>
        {{ ' | ' }}
        <RouterLink to="/user">User</RouterLink>
        {{ ' | ' }}
        <RouterLink to="/form">Form</RouterLink>
        {{ ' | ' }}
        <RouterLink to="/nested">Nested</RouterLink>
        {{ ' | ' }}
        <RouterLink to="/vuex">Vuex</RouterLink>
        {{ ' | ' }}
        <RouterLink to="/chart">Chart</RouterLink>
        {{ ' | ' }}
        User: {{$store.getters.userCount}}
    </div>
</template>
