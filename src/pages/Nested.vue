<template>
    <div class="box">
        <h1 class="title">Nested: {{ counter }}</h1>
        <!-- <p>
            <button @click="counter+=1" class="button">Update</button>
        </p> -->
        <!-- <One :doubleCounter="counter*2" /> -->
        <Three v-slot="xxx">
            <pre>{{xxx.now}}</pre>
            <hr>
        </Three>
    </div>
</template>

<script>
// import One from '@/components/One'
import Three from '@/components/Three'
export default {
    watch: {
        counter() {
        }
    },
    components: {
        // One,
        Three
    },
    data() {
        return {
            counter: 1
        }
    },
}
</script>