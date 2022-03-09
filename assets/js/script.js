var containerEl = document.getElementById("scheduler");

var hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

hours.forEach(function (hour) {
  var hourDiv = document.createElement("div");
  hourDiv.classList.add("row", "time-block");
  hourDiv.innerHTML = `<div class="col-md-1 hour">${hour}:00</div>
  <textarea class="col-md-10 description"> </textarea>
  <button class="btn saveBtn col-md-1">
    <i class="fas fa-save"></i>
  </button>`;
  containerEl.append(hourDiv);
});
