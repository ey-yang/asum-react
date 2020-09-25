import qs from 'qs';
import client from './client';


export const writePost = ({ title, about, tags, images, price }) =>
    client.post('/api/host/tours', {title, about, tags, images, price });

export const readPost = id => client.get(`/api/host/tours/${id}`);

export const listPosts = ({ page, email, tag, image, price }) => {
    const queryString = qs.stringify({
        page,
        email,
        tag,
        image,
        price,
    });
    return client.get(`/api/host/tours?${queryString}`);
};

export const updatePost = ({ id, title, about, tags, images, price }) =>
    client.patch(`/api/host/tours/${id}`, {
        title,
        about,
        tags,
        images,
        price,
    });

export const removePost = id => client.delete(`/api/host/tours/${id}`);

