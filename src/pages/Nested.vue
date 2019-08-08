<template>
    <div class="box">
        <h1 class="title">Nested: {{ counter }}</h1>
        <p>
            <button @click="counter+=1" class="button">Update</button>
        </p>
        <One :doubleCounter="counter" />
    </div>
</template>

<script>
import One from '@/components/One'
export default {
    watch: {
        counter() {
        }
    },
    components: {
        One
    },
    data() {
        return {
            counter: 1
        }
    },
}
</script>