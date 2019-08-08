<template>
    <div class="box">
        <h3 class="title">One:{{doubleCounter*2}} </h3>
        <Two :doubleCounter = "doubleCounter"/>
    </div>
</template>

<script>
import Two from '@/components/Two'
export default {
    components: {
        Two
    },
    props: ['doubleCounter']
}
</script>