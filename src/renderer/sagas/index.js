import 'babel-polyfill';
import { fork, take, cancel, put, select, delay } from 'redux-saga/effects';
import { RESET_TIMER, START_TIMER, STOP_TIMER, resetTimer, updateTime } from '../actions';

function* countDown() {
  while (true) {
    const { remainedTime } = yield select();
    if (remainedTime <= 0) {
      yield put(resetTimer());
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
    yield take([STOP_TIMER, RESET_TIMER]);
    yield cancel(countDownTask);
  }
}

function* rootSaga() {
  yield fork(timerProcess);
}

export default rootSaga;
