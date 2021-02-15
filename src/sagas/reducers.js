export default function courses(state = [], action) {
    switch (action.type) {
        case 'COURSES_RECEIVED':
            console.log('COURSES_RECEIVED!!!!', action);
            state = action.courses;
            return state;
        default:
            return state;
    }
}