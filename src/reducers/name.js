const playerName = (state = '', action) => {
    console.log(action.payload)
    switch(action.type){
        case 'ADD_NAME':
            return state + action.payload;
        default:
            return state;
    }
}
export default playerName;