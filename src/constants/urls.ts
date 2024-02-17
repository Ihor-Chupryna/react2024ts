const baseURL = 'https://jsonplaceholder.typicode.com/';

const users = '/users';
const posts = '/posts';

const urls = {
    users: {
        all: users,
        byId: (userId: number): string => `${users}/${userId}`
    },
    posts: {
        all: posts,
        byId: (postId: number): string => `${posts}/${postId}`
    }

}

export { baseURL, urls }