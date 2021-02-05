export const increment = (number) => {
    return {
        type: 'INCREMENT',
        payload: number
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

export const player_name = (nm) => {
    return {
        type: 'ADD_NAME',
        payload: nm
    }
}
