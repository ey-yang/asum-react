import client from '../client';

// 호스트 상품등록
export const create = ({ name, images, price, closedDays, option, tags, refund_type, about }) =>
    client.post('http://localhost:3065/host/tours/create', { name, images, price, closedDays, option, tags, refund_type, about });