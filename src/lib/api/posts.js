import qs from 'qs';
import client from './client';

// http://localhost:3065


export const writePost = ({ title, about, tags, images, price }) =>
    client.post('/api/posts', {title, about, tags, images, price });


export const readPost = id => client.get(`/api/posts/${id}`);


export const listPosts = ({ page, email, tag, image, price }) => {
    const queryString = qs.stringify({
        page,
        email,
        tag,
        image,
        price,
    });
    return client.get(`/api/posts?${queryString}`);
};

export const updatePost = ({ id, title, about, tags, images, price }) =>
    client.patch(`/api/posts/${id}`, {
        title,
        about,
        tags,
        images,
        price,
    });

export const removePost = id => client.delete(`/api/posts/${id}`)

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





/* export const writePost = ({ title, about, tags, images, price }) =>
    client.post('http://localhost:3065/posts', {title, about, tags, images, price});


export const readPost = id => client.get(`http://192.168.1.104:3065/api/posts/${id}`);

export const listPosts = ({ page, email, tag, image, price }) => {
    const queryString = qs.stringify({
        page,
        email,
        tag,
        image,
        price
    });
    return client.get(`http://192.168.1.104:3065/api/posts?${queryString}`);
};


export const updatePost = ({ id, title, about, tags, images, price }) =>
    client.patch(`http://localhost:3065/posts/${id}`, {
=======

        title,
        about,
        tags,
        images,
        price,
    });

export const removePost = id => client.delete(`http://192.168.1.104:3065/api/posts/${id}`); */