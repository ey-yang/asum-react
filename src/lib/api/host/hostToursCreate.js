import client from '../client';
import qs from 'qs';

// 호스트 상품등록
export const create = ({ title, price, closedDays, option, tags, refund_type, about }) =>
    client.post('/api/host/tours/create', { title, price, closedDays, option, tags, refund_type, about });

//호스트 상품관리
export const toursList = ({ title, image, price, email, id, about }) => {
    const queryString = qs.stringify({
        title,
        image,
        price,
        email,
        id,
        about,
    })
    return client.get(`/api/host/tours`);
};