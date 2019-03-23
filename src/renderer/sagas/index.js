import 'babel-polyfill';
import { fork, take, cancel, put, select, delay } from 'redux-saga/effects';
import { START_TIMER, STOP_TIMER, stopTimer, updateTime } from '../actions';

function* countDown() {
  while (true) {
    const { remainedTime } = yield select();
    if (remainedTime <= 0) {
      yield put(stopTimer());
      break;
    }
    yield put(updateTime(remainedTime - 1));
    yield delay(1000);
  }
}

function* timerProcess() {
  while (true) {
    yield take(START_TIMER);
    const countDownTask = yield fork(countDown);
    yield take(STOP_TIMER);
    yield cancel(countDownTask);
  }
}

function* rootSaga() {
  yield fork(timerProcess);
}

export default rootSaga;
