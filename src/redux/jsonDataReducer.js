import { setUsersCount } from "../Js/jsonData";

const GET_DATA_JSON = 'GET_DATA_JSON';
const DELETE_USER = 'DELETE_USER';

let initialState = {
    data: '',
    usersNamesJsonFile: []
};

const jsonDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_JSON:
            let usersNames = setUsersCount(action.data).sort(function (a, b) {
                return a.toLowerCase().localeCompare(b.toLowerCase());
            });
            return {
                ...state,
                data: action.data,
                usersNamesJsonFile: usersNames
            };
        case DELETE_USER:
            state.usersNamesJsonFile.splice(action.userId, 1);
            return {
                ...state,
                 usersNamesJsonFile: [...state.usersNamesJsonFile]
            }
        default: return state;
    }
}

export const setDataJson = (data) => {
    return ({ type: GET_DATA_JSON, data });
}
export const deleteUser = (userId) => {
    return ({ type: DELETE_USER, userId });
}

export default jsonDataReducer;