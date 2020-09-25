import client from '../client';

// 호스트 등록  host_image,
export const apply = ({  host_name, host_phone, business_type, business_license, bank_account, about, contract, personal_information }) =>
    client.post('http://192.168.1.104:3065/api/host/apply', { host_name, host_phone, business_type, business_license, bank_account, about, contract, personal_information });

//호스트 이미지 업로드

// export const applyHostImage = ({applyHostImage})

// 호스트 계정관리
export const account = ({ host_image, host_name, host_phone, business_type, business_license, bank_account, about, contract, personal_information }) =>
    client.post('http://192.168.1.104:3065/api/host/account', { host_image, host_name, host_phone, business_type, business_license, bank_account, about, contract, personal_information });

// 호스트 상품등록
// export const hostToursCreate = ({ name, images, price, closedDays, option, tags, refund_type, about }) =>
//     client.post('/api/host/tours/create', { name, images, price, closedDays, option, tags, refund_type, about });

// 로그아웃
// export const logout = () => client.post('/api/auth/logout');