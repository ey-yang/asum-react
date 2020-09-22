import qs from 'qs';
import client from './client';

// http://localhost:3065

export const writePost = ({ title, body, tags }) =>
    client.post('/api/posts', {title, body, tags});

export const readPost = id => client.get(`/api/posts/${id}`);

export const listPosts = ({ page, email, tag }) => {
    const queryString = qs.stringify({
        page,
        email,
        tag,
    });
    return client.get(`/api/posts?${queryString}`);
};

export const updatePost = ({ id, title, body, tags }) =>
    client.patch(`/api/posts/${id}`, {
        title,
        body,
        tags,
    });

export const removePost = id => client.delete(`/api/posts/${id}`);





/* export const writePost = ({ title, body, tags }) =>
    client.post('/http://localhost:3065/posts', {title, body, tags});

export const readPost = id => client.get(`/http://localhost:3065/posts/${id}`);

export const listPosts = ({ page, email, tag }) => {
    const queryString = qs.stringify({
        page,
        email,
        tag,
    });
    return client.get(`/http://localhost:3065/posts?${queryString}`);
};

export const updatePost = ({ id, title, body, tags }) =>
    client.patch(`/http://localhost:3065/posts/${id}`, {
        title,
        body,
        tags,
    });

export const removePost = id => client.delete(`/http://localhost:3065/posts/${id}`); */