import qs from 'qs';
import client from './client';


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

export const removePost = id => client.delete(`/api/posts/${id}`);

