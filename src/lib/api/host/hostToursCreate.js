import client from '../client';

// 호스트 상품등록
export const create = ({ title, image, price, closedDays, option, tags, refund_type, about }) =>
    client.post('http://192.168.1.104:3065/api/host/tours/create', { title, image, price, closedDays, option, tags, refund_type, about });