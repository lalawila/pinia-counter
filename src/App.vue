<template>
    <Viewer />
    <Counter />
</template>

<script>
import Counter from "./components/Counter.vue"
import Viewer from "./components/Viewer.vue"

export default {
    components: {
        Counter,
        Viewer,
    },
}
</script>
