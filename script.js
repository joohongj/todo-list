// ADD YOUR CODE BELOW 

// 1. Start with an array of strings
let todoItems = [
    "pho",
    "sushi",
    "ribeye steak",
    "grilled fish",
    "broccolini",
    "pomodoro",
    "papaya salad",
    "oyster",
    "steamed crabs",
    "wine",
    "beer",
    "hojicha"
    // add more items here
];


// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
const itemInput = document.getElementById('text');
const list = document.getElementById('list');
const sortBtn = document.getElementById('sort');
const clearBtn = document.getElementById('clear');


// 3. Write a function to display all items in the #list element
function updateList() {
    list.innerHTML = "";
    todoItems.forEach(function (item) {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

updateList();


// 4. Handle adding a new item when the button is clicked
addItemButton.addEventListener('click', function (event) {
    event.preventDefault();

    const newItem = itemInput.value.trim();

    if (newItem !== "") {
        todoItems.push(newItem);
        itemInput.value = "";
        updateList();
    }
});


// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    todoItems.sort();
    updateList();
});


// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    todoItems = [];
    updateList();
});