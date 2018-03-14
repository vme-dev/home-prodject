import { combineReducers } from 'redux';
import moment from 'moment';

const text = (state = {}, action) => {
    switch (action.type) {
        case 'TEXT':
            {
                return Object.assign({}, state, {
                    text: action.text
                });

            }
        default:
            return state
    }
}

const counter = (state = { index: 0 }, action) => {
    switch (action.type) {
        case 'ADD':
            {
                return Object.assign({}, state, {
                    index: state.index + 1,
                });

            }
        case 'MINUS':
            return Object.assign({}, state, {
                index: state.index - 1
            });
            break;
        default:
            return state
    }
}
let nD = new Date();
let timeState = {
    doList: {
        "22.1.2018": [
        {"action":"lil peep","statu":true},
        {"action":"lil peep","statu":true}, 
        {"action":"lil peep","statu":true}],
        "25.1.2018": [
        {"action":"lil peep","statu":true}, 
        {"action":"lil peep","statu":true}, 
        {"action":"lil peep","statu":true}]
    },
    modal: false,
    nowDate: new Date(),
    curentDate: new Date(),
    currDate: {
        day: nD.getDate(),
        month: nD.getMonth(),
        year: nD.getFullYear(),
    },
    curentMounth: function() {
        var arr = [];
        var self = this;

        function getLastDayOfMonth() {
            var date = new Date(self.curentDate.getFullYear(), self.curentDate.getMonth() + 1, 0);
            return date.getDate();
        }

        for (var i = 0; i < getLastDayOfMonth(); i++) {
            arr[i] = i + 1;
        }
        return arr;
    },
}

const time = (state = timeState, action) => {
    switch (action.type) {
        case 'NEXT_MONTH':
            {
                var a = new Date();
                a.setFullYear(state.curentDate.getFullYear(), state.curentDate.getMonth() + 1, state.curentDate.getDate());
                return Object.assign({}, state, {
                    curentDate: a,
                });

            }
        case 'PREV_MONTH':
            {
                var a = new Date();
                a.setFullYear(state.curentDate.getFullYear(), state.curentDate.getMonth() - 1, state.curentDate.getDate());
                return Object.assign({}, state, {
                    curentDate: a,
                });

            }
        case 'CHECK_CURR_DAY':
            {
                var a = new Date();
                a.setFullYear(state.curentDate.getFullYear(), state.curentDate.getMonth(), action.date);
                return Object.assign({}, state, {
                    curentDate: a,
                });

            }
        case 'RESET':
            {
                var a = new Date();
                return Object.assign({}, state, {
                    curentDate: a,
                });

            }
        case 'SEND_MES':
            {
                let clon = Object.assign({}, state.doList);

                if (clon[action.date] == undefined) { console.log(clon[action.date]);
                    clon[action.date] = []; }
                clon[action.date].push(action.message);

                console.log(clon);
                return Object.assign({}, state, {
                    doList: clon,
                });

            }
        case 'togleModal':
            {
                // if (state.nowDate.getTime() > state.curentDate.getTime()) {
                //     return state;
                // };

                return Object.assign({}, state, {
                    modal: !state.modal,
                });

            }

        default:
            return state;
    }
}

const reduser = combineReducers({
    counter,
    text,
    time
});

export default reduser;