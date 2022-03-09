var containerEl = document.getElementById("scheduler");
var currentDay = document.getElementById("current-day");
var hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

hours.forEach(function (hour) {
  var hourDiv = document.createElement("div");
  hourDiv.classList.add("row", "time-block");
  hourDiv.innerHTML = `<div class="col-md-1 hour">${hour}:00</div>
  <textarea class="col-md-10 description ${timeColor(hour)}"> </textarea>
  <button data-hour="${hour}" class="btn saveBtn col-md-1" onclick="saveText(this)">
    <i class="fas fa-save"></i>
  </button>`;
  containerEl.append(hourDiv);
});
currentDay.textContent = new Date().toLocaleDateString();
console.log(new Date().getHours());

function timeColor(hour) {
  var currentHour = new Date().getHours();
  if (currentHour == hour) return "present";
  else if (currentHour < hour) return "future";
  else return "past";
}

function saveText(button) {
  console.log(button.dataset.hour);
  console.log(button.parentNode.children[1].value);
  localStorage.setItem(
    button.dataset.hour,
    button.parentNode.children[1].value
  );
}

// var savedTasks = JSON.parse(window.localStorage.getItem("tasks")) || [];
// var task = {
//   hour: currentHour,
//   initials: initials,
// };
// // save to localStorage
// savedTasks.push(task);
// localStorage.setItem("highscore", JSON.stringify(highscore));
