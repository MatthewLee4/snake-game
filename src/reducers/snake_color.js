const initialState = {
    width: 100,
    height: 200,
    color: "red"
};


const snakeColor = (state = initialState, action) => {
    // const rectangleDOM = document.getElementById('rectangleContainer');

    // rectangleDOM.innerHTML = `
    //     <div style="width: ${state.width}px; height: ${state.height}px; background-color: ${state.color};"></div>
    // `
    switch(action.type){
        case 'COLOR':
            return {
                ...state,
                color: action.payload.color
            }
        default:
            return state;
    }
}

export default snakeColor;