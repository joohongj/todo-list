// ADD YOUR CODE BELOW 

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
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
// add more variables below
const list = document.getElementById('list');
const sortItemButton = document.getElementById('sort');
const clearAllButton = document.getElementById('clear');



// 3. Write a function to display all items in the #list element
function updateList() {
    // add your code here
    const list = document.getElementById('list');

    const listItems = list.getElementByID(li);
}

updateList();



// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function () {
    // add your code here
    
});




// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    // add your code here
});




// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    // add your code here
});

