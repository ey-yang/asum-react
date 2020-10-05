import qs from 'qs';
import client from './client';

// http://localhost:3065


export const writePost = ({ title, about, tags, images, price }) =>
    client.post('/api/user/landing', {title, about, tags, images, price });

export const readPost = id => client.get(`/api/tours/${id}`);

export const listPosts = ({ page, email, tag, image, price }) => {
    const queryString = qs.stringify({
        page,
        email,
        tag,
        image,
        price,
    });
    return client.get(`/api/user/landing?${queryString}`);
};

export const updatePost = ({ id, title, about, tags, images, price }) =>
    client.patch(`/api/user/landing/${id}`, {
        title,
        about,
        tags,
        images,
        price,
    });

export const removePost = id => client.delete(`/api/user/landing/${id}`)