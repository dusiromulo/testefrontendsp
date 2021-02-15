import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getCourses as getCoursesApi } from '../services/courses';

export function* getCourses() {
    const coursesResp = yield call(getCoursesApi);
    const courses = yield coursesResp.json();
    yield put({ type: 'COURSES_RECEIVED', courses });
}

export function* watchGetCourses() {
    yield takeLatest('GET_COURSES', getCourses);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        call(watchGetCourses),
    ]);
}