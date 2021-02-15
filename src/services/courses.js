export const getCourses = () => {
    return fetch('https://desolate-brushlands-20405.herokuapp.com/api/v2/products/', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    });
};