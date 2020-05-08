import axios from 'axios'
import { takeEvery, call, put } from 'redux-saga/effects'
import { ACTION_LOAD_DATA, setDataActionCreator, ACTION_TYPE_CATEGORY } from '../actions';

// GENERATOR
export default function* setup() {
    console.log("MyMiddleWare Saga is now running");
    yield takeEvery(ACTION_LOAD_DATA, loadData);
}

function* loadData(action) {
    console.log("SAGA: loadData");
    console.log(action);
    try {
        let result = yield call(sendGetRequest);
        // console.log(result);
        yield put(setDataActionCreator(ACTION_TYPE_CATEGORY, result));
    }
    catch (e) {
        console.log(e);
    }
}

const sendGetRequest = () => {
    console.log("SAGA: sendRequest");
    return axios
        .post('http://178.128.248.160:81/api/auth', { "username": "mgani.tombalak@yahoo.com", "password": "123456" })
        .then(res => {
            let token = res.data.token;
            return axios.get("http://178.128.248.160:81/api/category", { headers: { Authorization: `Bearer ${token}` } })
                .then(res => res.data.data)
                .catch(e => console.log(e))
        })
        .catch(e => console.log(e));
}

// const sendGetRequest = async () => {
//     console.log("SAGA: sendRequest");
//     let token;

//     await axios
//         .post('http://178.128.248.160:81/api/auth', { "username": "mgani.tombalak@yahoo.com", "password": "123456" })
//         .then(res => { token = res.data.token; })
//         .catch(e => console.log(e));

//     return axios.get("http://178.128.248.160:81/api/category", { headers: { Authorization: `Bearer ${token}` } })
//         .then(res => res.data.data)
//         .catch(e => console.log(e))
// }