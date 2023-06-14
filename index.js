const enterBtnEl = document.getElementById(`enterBtn`);
const textEl = document.getElementById(`name`);
const studentEl = document.getElementById(`student`);
const instructorEl = document.getElementById(`instructor`);


enterBtnEl.addEventListener(`click`, () => {
    localStorage.setItem("name", textEl.value)
    if(studentEl.checked) {
    localStorage.setItem("Role","student")
    }
    else if(instructorEl.checked) {
        localStorage.setItem("Role","Instructor")
    }
    window.location.href = "information.html";
})