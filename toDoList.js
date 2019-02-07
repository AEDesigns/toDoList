const editSmall = document.querySelector("small");
const textInput = document.querySelector("input");
const span = document.querySelectorAll("span");
const input = document.querySelector("input[type='text']");

editSmall.addEventListener("click", function() {
  textInput.style.display = "block";
  textInput.focus();
  editSmall.innerHTML = "<br>// Press enter to add to list.";
});

input.onkeypress = function(evt) {
  if (evt.which == 13) {
    var Todo = document.createElement("li");
    var TodoText = document.createTextNode(this.value);

    if (!this.value) {
      alert("Please enter To-Do list item.");
    } else {
      Todo.appendChild(TodoText);

      let span = document.createElement("span");
      let span2 = document.createElement("span");
      let x = document.createTextNode("\u00D7");
      let done = document.createTextNode("\u2610");

      span2.classList.add("complete");
      span2.appendChild(done);
      span.classList.add("delete");
      span.appendChild(x);
      document.getElementById("text-holder").appendChild(Todo);
      let li = document.querySelector("#text-holder li:last-child");
      li.append(span2);
      li.append(span);

      deleteEventHandler(li);
      completeEventHandler(li);
      textInput.value = "";
    }
  }
};

function hasClass(element, className) {
  return (" " + element.className + " ").indexOf(" " + className + " ") > -1;
}

function deleteEventHandler(item) {
  let deleteButton = item.getElementsByClassName("delete")[0];
  deleteButton.addEventListener("click", function() {
    this.parentElement.remove();
    let listItemsCount = document.getElementById("text-holder").children.length;

    if (listItemsCount <= 0) {
      textInput.style.display = "none";
      editSmall.innerHTML = "// ADD";
    }
  });
}

function completeEventHandler(item) {
  let completeButton = item.getElementsByClassName("complete")[0];
  completeButton.addEventListener("click", function() {
    if (!hasClass(this, "checked")) {
      this.innerHTML = "&#9745;";
      this.classList.add("checked");
    } else {
      this.innerHTML = "&#9744;";
      this.classList.remove("checked");
    }
  });
}
