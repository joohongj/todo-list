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
       list.innerHTML = "";

     todoItems.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;

        // Optional: remove item when clicked
        li.addEventListener("click", () => {
            todoItems.splice(index, 1);
            updateList();
        });

        list.appendChild(li);
    });
}

updateList();



// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function (event) {

    // add your code here
});




// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    // add your code here
    const name_AZ = (a, b) =>(a.name > b.name ? 1 : b.name > a.name ? -1 : 0);
    

});




// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    // add your code here
});

