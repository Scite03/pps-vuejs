<template>
    <div class="box">
        <h3 class="title">Two: {{ doubleCounter * 3}}</h3>
    </div>
</template>

<script>
export default {
    props: ['doubleCounter']
}
</script>