<template>
    <button @click="hit">点击计数</button>
</template>
<script>
import { useCounterStore } from "../stores/counter"

export default {
    data() {
        const conterStore = useCounterStore() // 引用 conterStore 对象
        return {
            conterStore,
        }
    },
    methods: {
        hit() {
            this.conterStore.increase()
        },
    },
}
</script>
