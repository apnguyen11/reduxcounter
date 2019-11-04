const initialState = {
    value: 0,
    color: "black"
}


const reducer = (state = initialState, action) => {
    let { type } = action;
    if (type === "INCREMENT") {
        return {
            value: state.value + 1
        }
    } else if (type === "DECREMENT"){
        return {
            value: state.value - 1
        }
    } else if (type === "ADD5"){
        return {
            value: state.value + 5
        }
    } else if (type === "COLORCHANGE"){
        console.log("it changed", pickColor.value)
      
            state.color = pickColor.value
        
    } else if (type === "NUMBERCHANGE"){
        console.log(newValue.value)
        state.value = state.value + parseInt(newValue.value)
        
    }
    return state
}

