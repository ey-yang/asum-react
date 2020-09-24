import qs from 'qs';
import client from '../client';

export const salesList = ({ id, title, qty, tour_date, option, price, username,total_price, email }) => {
        const queryString = qs.stringify({
            id, title, qty, tour_date, option, price, username,total_price, email,
        });
        return client.get(`http://192.168.1.104:3065/api/host/sales?${queryString}`);
    }