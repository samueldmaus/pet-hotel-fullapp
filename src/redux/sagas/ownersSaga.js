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


function* ownersSaga() {
    yield takeLatest('GET_OWNERS', getOwners);
}

export default ownersSaga;