import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getPets() {
    try {
        let response = yield axios.get('/api/pets')
        console.log('Pets:', response.data);
        yield put({type:'SET_PETS', payload: response.data});
    } catch (error) {
        console.log('error in getPets', error)
    }
}


function* petsSaga() {
    yield takeLatest('GET_PETS', getPets);
}

export default petsSaga;