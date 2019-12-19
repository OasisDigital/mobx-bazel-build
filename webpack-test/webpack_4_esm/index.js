import { observable, autorun } from "mobx"

const store = observable.object({ count: 0 })

const counts = []

autorun(function() {
    counts.push("" + store.count)
})

store.count++
store.count--

console.log(counts.join(","))
process.exit(counts.join(",") != "0,1,0")
