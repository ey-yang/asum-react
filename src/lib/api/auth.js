import client from './client';

// http://localhost:3065

// 로그인
export const login = ({ email, password }) =>
    client.post('/api/auth/login', { email, password });

// 회원가입
export const register = ({ email, password, username, year, month, day, gender }) =>
    client.post('/api/auth/register', { email, password, username, year, month, day, gender });

// 소셜 회원가입
    export const socialregister = ({ username, year, month, day, gender }) =>
    client.post('/api/auth/socialregister', { username, year, month, day, gender });

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');

// 로그아웃
export const logout = () => client.post('/api/auth/logout');