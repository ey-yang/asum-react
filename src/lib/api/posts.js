import qs from 'qs';
import client from './client';

// http://localhost:3065

// export const writePost = ({ title, body, tags }) =>
//     client.post('/api/posts', {title, body, tags});

// export const readPost = id => client.get(`/api/posts/${id}`);

// export const listPosts = ({ page, email, tag }) => {
//     const queryString = qs.stringify({
//         page,
//         email,
//         tag,
//     });
//     return client.get(`/api/posts?${queryString}`);
// };

// export const updatePost = ({ id, title, body, tags }) =>
//     client.patch(`/api/posts/${id}`, {
//         title,
//         body,
//         tags,
//     });

// export const removePost = id => client.delete(`/api/posts/${id}`);




 export const writePost = ({ title, body, tags }) =>
    client.post('http://192.168.1.104:3065/api/posts', {title, body, tags});

export const readPost = id => client.get(`http://192.168.1.104:3065/api/posts/${id}`);

export const listPosts = ({ page, email, tag }) => {
    const queryString = qs.stringify({
        page,
        email,
        tag,
    });
    return client.get(`http://192.168.1.104:3065/api/posts?${queryString}`);
};

export const updatePost = ({ id, title, body, tags }) =>
    client.patch(`http://192.168.1.104:3065/api/posts/${id}`, {
        title,
        body,
        tags,
    });

export const removePost = id => client.delete(`http://192.168.1.104:3065/api/posts/${id}`);