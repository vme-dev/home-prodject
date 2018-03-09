export function NEXT_MONTH() {
    return {
        type: 'NEXT_MONTH'
    }
};

export function PREV_MONTH() {
    return {
        type: 'PREV_MONTH'
    }
};
export function RESET() {
    return {
        type: 'RESET'
    }
};
export function CHECK_CURR_DAY(date) {
    return {
        type: 'CHECK_CURR_DAY',
        date: date
    }
};
export function SEND(date, message) {
    return {
        type: 'SEND_MES',
        date: date,
        message: message
    }
};

export function togleModal() {
    return {
        type: 'togleModal'
    }
};