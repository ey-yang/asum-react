import client from './client';



// 프로필 사진 업로드
export const writeImage = () => client.post('/api/user/profile')