import axios from 'axios';

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function signup(data){
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, data);
    return promise;
}
//ok
function login(data){
    const promise = axios.post(`${BASE_URL}/auth/login`, data);
    return promise;
}

function createHabit({data, token}){
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const promise = axios.post(`${BASE_URL}/habits`, data, config);
    return promise;
}

function deleteHabit({token, idHabit}){
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const promise = axios.delete(`${BASE_URL}/habits/${idHabit}`, config);
    return promise;
}
//ok
function getHabitsToday(token){
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const promise = axios.get(`${BASE_URL}/habits/today`, config);
    return promise;
}

function getHabits(token){
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const promise = axios.get(`${BASE_URL}/habits`, config);
    return promise;
}

function checkHabit({token, idHabit}){
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const promise = axios.post(`${BASE_URL}/habits/${idHabit}/check`, {}, config);
    return promise;
}

function uncheckHabit({token, idHabit}){
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const promise = axios.post(`${BASE_URL}/habits/${idHabit}/uncheck`, {}, config);
    return promise;
}

function getHistoryHabits(token){
    const promise = axios.get(`${BASE_URL}/habits/history/daily`, {Authorization: `Bearer ${token}`});
    return promise;
}

export {signup, login, getHabitsToday, getHabits, getHistoryHabits, createHabit, deleteHabit, checkHabit, uncheckHabit};