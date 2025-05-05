let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  if (inp.value === "") {
    alert("⚠️ Please enter a task before adding.");
    return;
  }
  
  let li = document. createElement("li");
 li.innerText = inp.value;

 let delBtn = document.createElement("button");
 delBtn.innerHTML = '<i class="fas fa-trash"></i>'; 
 delBtn.classList.add("delete");

 li.appendChild(delBtn);
 ul.appendChild(li);
 inp.value = "";
});

inp.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    btn.click(); // trigger the same function as the Add button
  }
});

ul.addEventListener("click", function (event) {
  const clickedButton = event.target.closest("button");
  if (clickedButton && clickedButton.classList.contains("delete")) {
    const listItem = clickedButton.parentElement;
    listItem.remove();
  }
});

