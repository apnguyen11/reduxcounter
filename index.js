const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT" }));

//Dispatch the "DECREMENT" acction

const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "DECREMENT" }));

//Dispatch the "ADD5" action

const plusfive = document.getElementById('add5');
plusfive.addEventListener('click', e => dispatch({ type: "ADD5" }));

//Dispatch color action

const pickColor = document.getElementById('dropdown');
pickColor.addEventListener('change', e => dispatch({ type: "COLORCHANGE", colorValue: pickColor.value }));

console.log()
// number change

const numChange = document.getElementById('newValue');
numChange.addEventListener('keyup', e => {
    if(e.keyCode === 13){
        dispatch({type: "NUMBERCHANGE"})
    }
});