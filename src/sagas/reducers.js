export default function courses(state = [], action) {
    switch (action.type) {
        case 'COURSES_RECEIVED':
            state = action.courses;
            return state;
        default:
            return state;
    }
}