import 'babel-polyfill';
import { fork, take, cancel, put, select, delay } from 'redux-saga/effects';
import { START_TIMER, STOP_TIMER, stopTimer, updateTime } from '../actions';

function* decrementTime() {
  while (true) {
    const { remainedTime } = yield select();
    yield put(updateTime(remainedTime - 1));
    yield delay(1000);
  }
}

function* timerProcess() {
  while (true) {
    yield take(START_TIMER);
    const decrementTimeTask = yield fork(decrementTime);
    yield take(STOP_TIMER);
    yield cancel(decrementTimeTask);
  }
}

function* rootSaga() {
  yield fork(timerProcess);
}

export default rootSaga;
