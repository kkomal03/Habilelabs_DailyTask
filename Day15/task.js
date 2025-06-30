//example for debouncing
//destucturing








// Debouncing in JavaScript can be defined as the technique that is used to limit the number of times a function gets executed. Debouncing is useful when the event is frequently being triggered in a short interval of time like typing, scrolling, and resizing.

// Limit Function Calls: During frequent events like typing, resizing, or scrolling debouncing prevents the frequent function calls.
// Delays Execution: After the specific delay only the function is executed, ensuring no rapid consecutive calls.
// Prevents Overload: Efficiently managing high-frequency triggers helps in preventing overloading.



// Debounce function
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Function to be debounced
function search(query) {
    console.log('Searching for:', query);
}

// Create a debounced version of the search function
const dSearch = debounce(search, 100);

// Simulate typing with multiple calls to the debounced function
dSearch('Hello');
dSearch('Hello, ');
dSearch('Hello, World!');  // Only this call will trigger after 100ms








function NamesList() {
    return ["a", "b", "c", "d"]
}

let [fst, snd, thr] = NamesList();

console.log(fst);
console.log(snd);
console.log(thr);