const roleStore= localStorage.getItem("Role")
const nameStore = localStorage.getItem("name")
const infoEl = document.getElementById("information")
const loremEl = document.getElementById("lorem")

//console.log(roleStore, nameStore)

const message = `Welcome ${roleStore} ${nameStore}`
if(roleStore === "Instructor") {
    loremEl.classList.add("bluelorem")
}
else if(roleStore === "student") {
loremEl.classList.add("purplelorem")
}
infoEl.textContent = message
//console.log(`Welcome ${roleStore} ${nameStore}`)
