import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { Checkbox } from 'antd';

const HostRegisterBlock = styled.div`
  padding: 5%
`;

const HostRegister = () => {
  
  return (
    <HostRegisterBlock>
      <form action="">
        <div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
            <label style={{ marginTop: '7%' }}>사진</label>
              <img width="20%" src="https://d2yoing0loi5gh.cloudfront.net/assets/roma/common/profile_blank-6f7e02b6e140f8f71688a633df0afefc4f98128a4c79a94e0cf0abac56c882e1.gif" alt="사진"/>
              <Button style={{ width: '30%', height: '40px', marginTop: '5%' }} cyan>
                     사진 업로드
              </Button>
              <input type="file" id="picture__upload" style={{ marginTop: '7%', marginBottom: '7%' }} hidden />
          </div>

          <div style={{ height: '30px' ,display: 'flex', marginTop: '7%', justifyContent: 'space-between', textAlign: 'center' }}>
            <label style={{ marginTop: '1%' }} >연락처</label>
            <select name="" id="">
              <option value="">+82(대한민국)</option>
              <option value="">+82(대한민국)</option>
              <option value="">+82(대한민국)</option>
            </select>
            <input type="tel" style={{ width: '70%' }} />
          </div>

          <div style={{ display: 'flex', marginTop: '7%', justifyContent: 'space-between', textAlign: 'center' }}>
          <label >사업유형</label>
          <Checkbox>
            개인
          </Checkbox>
          <Checkbox>
            사업
          </Checkbox>
          <input type="file" />
          </div>

          <div style={{ display: 'flex', marginTop: '7%', justifyContent: 'space-between', textAlign: 'center' }}>
            <label>소개</label>
            <textarea name="" id="" cols="60" rows="10" style={{ resize: 'none' }}></textarea>
          </div>

          <div style={{ height: '30px' ,display: 'flex', marginTop: '7%', justifyContent: 'space-between', textAlign: 'center' }}>
            <label style={{ marginTop: '1%' }} >상품 유형</label>
            <select style={{ width: '20%' }} name="" id="">
              <option value="">판매 기간 설정</option>
              <option value="">판매 기간 설정</option>
              <option value="">판매 기간 설정</option>
            </select>
            <select style={{ width: '20%' }} name="" id="">
              <option value="">판매 기간 설정</option>
              <option value="">판매 기간 설정</option>
              <option value="">판매 기간 설정</option>
            </select>
            <select style={{ width: '20%' }} name="" id="">
              <option value="">판매 기간 설정</option>
              <option value="">판매 기간 설정</option>
              <option value="">판매 기간 설정</option>
            </select>
          </div>

          <div style={{ display: 'flex', marginTop: '7%', justifyContent: 'space-between', textAlign: 'center' }}>
            <label>파트너 약관</label>
            <textarea name="" id="" cols="60" rows="10" style={{ resize: 'none' }}></textarea>
          </div>
          <div style={{ float: 'right' }}>
            <Checkbox>
              파트너 약관에 동의합니다.
            </Checkbox>
          </div>

          <div style={{ display: 'flex', marginTop: '7%', justifyContent: 'space-between', textAlign: 'center' }}>
            <label>개인정보 수집 및 이용</label>
            <textarea name="" id="" cols="60" rows="10" style={{ resize: 'none' }}></textarea>
          </div>
          <div style={{ float: 'right' }}>
            <Checkbox>
              개인정보 수집 및 이용에 동의합니다.
            </Checkbox>
            </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '7%' }}>
          <Button style={{ width: '50%', height: '50px', fontSize: '1.25rem' }} cyan>
            작성 완료
          </Button>
          </div>

        </div>

      </form>
    </HostRegisterBlock>    
  )
}

export default HostRegister;