import qs from 'qs';
import client from '../client';

export const salesList = ({ key, salesDate, salesProduct, salesNumber, travelDay, addOne,
    addTwo, addThree, guestName, phoneNumber, Progress }) => {
        const queryString = qs.stringify({
            key, salesDate, salesProduct, salesNumber, travelDay, addOne,
            addTwo, addThree, guestName, phoneNumber, Progress,
        });
        return client.get(`http://192.168.1.104:3065/api/host/sales?${queryString}`);
    }