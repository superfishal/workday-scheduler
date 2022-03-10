var containerEl = document.getElementById("scheduler");
var currentDay = document.getElementById("current-day");
var hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
// for each of the hours listed above
// creates a div with classes and inner html generated for each hour
// template literals ${hour} apply to each row
hours.forEach(function (hour) {
  var hourDiv = document.createElement("div");
  hourDiv.classList.add("row", "time-block");
  hourDiv.innerHTML = `<div class="col-md-1 hour">${hour}:00</div>
  <textarea class="col-md-10 description ${timeColor(hour)}">${
    localStorage.getItem(hour) || ""
  }</textarea>
  <button data-hour="${hour}" class="btn saveBtn col-md-1" onclick="saveText(this)">
    <i class="fas fa-save"></i>
  </button>`;
  // appends to container
  containerEl.append(hourDiv);
});
// current day
currentDay.textContent = new Date().toLocaleDateString();
console.log(new Date().getHours());
// checks color of each hour div to the currentHour
function timeColor(hour) {
  var currentHour = new Date().getHours();
  if (currentHour == hour) return "present";
  else if (currentHour < hour) return "future";
  else return "past";
}
// run by saveBtn onclick function
function saveText(button) {
  console.log(button.dataset.hour);
  console.log(button.parentNode.children[1].value);
  localStorage.setItem(
    button.dataset.hour,
    button.parentNode.children[1].value
  );
}
