<template>
    <h1>你点击了{{ conterStore.times }}次</h1>
    <p v-if="conterStore.isMoreThan10Times">你点击超过了 10 次，休息一下吧</p>
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
}
</script>
