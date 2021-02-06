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

export const snake_color = (color) => {
    return {
        type: 'COLOR',
        payload: color
    }
}