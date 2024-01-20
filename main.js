let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemsList = document.getElementById("kitchen-items-list");
let tickBtn;
let kitchenInputData = [];
let li;

function setLocalStorage() {
     localStorage.setItem("kitchenInput", kitchenInputData);
}

function getLocalStorage() {
     if (localStorage.getItem("kitchenInput")) {
          kitchenInputData = localStorage.getItem("kitchenInput");
          builtUI();
     }
}

function builtUI() {
     li = document.createElement("li");
     tickBtn = document.createElement("i");
     tickBtn.classList.add("fa-regular", "fa-circle");
     li.appendChild(tickBtn);

     let spanEl = document.createElement("span");
     li.appendChild(spanEl);
     spanEl.innerText = kitchenInputData;
     li.classList.add("li");
     kitchenItemsList.appendChild(li);
     let editBtn = document.createElement("i");
     editBtn.classList.add("fa-solid", "fa-pen-to-square");
     li.appendChild(editBtn);

     kitchenInput.value = "";
     kitchenInput.focus();
     let deleteItem = document.createElement("i");
     deleteItem.classList.add("fa-solid", "fa-trash");
     li.appendChild(deleteItem);
}

function confirmHandler(event) {
     console.log("ev", event);
     console.log("event", event);
     if (event.target.classList[1] === "fa-circle") {
          li.classList.remove("li");
          li.classList.add("text-decoration");
     } else if (event.target.localName === "span") {
          li.classList.remove("text-decoration");
          li.classList.add("li");
     }
}

function addKitchenItems() {
     kitchenInputData = kitchenInput.value;

     setLocalStorage();
     getLocalStorage();
}

function deleteKitchenItems(event) {
     if (event.target.classList[1] === "fa-trash") {
          let newItem = event.target.parentElement;

          newItem.classList.add("slideOut");
          newItem.addEventListener("transitionend", function () {
               newItem.remove();
          });
     }
}

function editFunction(event) {
     if (event.target.classList[1] === "fa-pen-to-square") {
          let editedValue = prompt("Enter the new edited value");
          let li = event.target.parentElement;
          let spanEl = li.querySelector("span");
          spanEl.innerText = editedValue;
     }
}

addBtn.addEventListener("click", addKitchenItems);

kitchenItemsList.addEventListener("click", confirmHandler);

kitchenItemsList.addEventListener("click", deleteKitchenItems);

kitchenItemsList.addEventListener("click", editFunction);
getLocalStorage();
