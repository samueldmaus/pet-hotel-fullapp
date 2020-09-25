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

function* addPet(action) {
    try {
        yield axios.post('/api/pets', action.payload )
        yield put({ type: 'GET_PETS' })
    } catch (error) {
        console.log('error in addPet', error);
    }
}

function* removePet(action) {
    try {
        yield axios.delete(`/api/pets/${action.payload}`)
        yield put({ type: 'GET_PETS' })
        // yield put({ type: 'GET_OWNERS' })
    } catch (error) {
        console.log('error in removePet', error);
    }
}

function* checkIn(action) {
    try {
        yield axios.put(`/api/pets`, action.payload)
        yield put({ type: 'GET_PETS' })
    } catch (error) {
        console.log('error in checkIn', error);
    }
}

function* petsSaga() {
    yield takeLatest('GET_PETS', getPets);
    yield takeLatest('ADD_PET', addPet);
    yield takeLatest('REMOVE_PET', removePet);
    yield takeLatest('CHECK_IN', checkIn);
}

export default petsSaga;