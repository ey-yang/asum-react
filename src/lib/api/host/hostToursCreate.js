import client from '../client';
import qs from 'qs';

// 호스트 상품등록
export const create = ({ title, image, price, closedDays, option, tags, refund_type, about }) =>
    client.post('http://192.168.1.104:3065/api/host/tours/create', { title, image, price, closedDays, option, tags, refund_type, about });

//호스트 상품관리
export const toursList = ({ title, image, price }) => {
    const queryString = qs.stringify({
        title,
        image,
        price,
    })
    return client.get(`http://192.168.1.104:3065/api/host/tours?${queryString}`);
};