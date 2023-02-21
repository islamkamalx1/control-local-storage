let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

allSpans.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("check-item")) {
      checkItem();
    }

    if (e.target.classList.contains("add-item")) {
      addItem();
    }

    if (e.target.classList.contains("delete-item")) {
      deleteItem();
    }

    if (e.target.classList.contains("show-items")) {
      showItems();
    }
  });
});

function showMessage() {
  results.innerHTML = "Input can't be empty";
}

function checkItem() {
  // if there is input value
  if (theInput.value !== "") {
    // if the input value is on local storage
    if (localStorage.getItem(theInput.value)) {
      results.innerHTML = `Found Local Storage Item Called <span>${theInput.value}</span>`;

      // if not on local storage
    } else {
      results.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span>`;
    }
    // if there is no input value
  } else {
    showMessage();
  }
}

function addItem() {
  // if there is input value
  if (theInput.value !== "") {
    localStorage.setItem(theInput.value, "Test");

    results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Added`;

    theInput.value = "";
    // if there is no input value
  } else {
    showMessage();
  }
}

function deleteItem() {
  // if there is input value
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      localStorage.removeItem(theInput.value);

      results.innerHTML = `Local Storage Item Called <span>${theInput.value}</span> was deleted`;

      theInput.value = "";
      // if not on local storage
    } else {
      results.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span>`;
    }
    // if there is no input value
  } else {
    showMessage();
  }
}

function showItems() {
  if (localStorage.length) {
    results.innerHTML = "";

    for (const [key, value] of Object.entries(localStorage)) {
      results.innerHTML += `<span class="keys">${key}</span>`;
    }
  } else {
    results.innerHTML = `Local Storage Is Empty`;
  }
}
