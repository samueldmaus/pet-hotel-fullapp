import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getOwners() {
    try {
        let response = yield axios.get('/api/owners')
        console.log('Owners:', response.data);
        yield put({type:'SET_OWNERS', payload: response.data});
    } catch (error) {
        console.log('error in getOwners', error)
    }
}

function* addOwner(action) {
    try {
        yield axios.post('/api/owners')
        console.log('Owners:', action.payload);
        yield put({type:'GET_OWNERS'});
    } catch (error) {
        console.log('error in addOwners', error)
    }
}

function* deleteOwners(action) {
    // try {
    //     yield axios.post('/api/owners')
    //     console.log('Owners:', action.payload);
    //     yield put({type:'GET_OWNERS'});
    // } catch (error) {
    //     console.log('error in AddOwners', error)
    // }
}


function* ownersSaga() {
    yield takeLatest('GET_OWNERS', getOwners);
    yield takeLatest('ADD_OWNER', addOwner);
    yield takeLatest('DELETE_OWNER', deleteOwners);
}

export default ownersSaga;