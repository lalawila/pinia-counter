import { defineStore } from "pinia"

export const useCounterStore = defineStore("counter", {
    state() {
        return {
            times: 0, // 点击次数
        }
    },
    getters: {
        isMoreThan10Times() {
            // 是否点击超过了 10 次
            return this.times > 10
        },
    },
    actions: {
        increase() {
            this.times++
        },
    },
})
