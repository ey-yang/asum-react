import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import HostAccountForm from '../../components/host/HostAccountForm';
import { changeField, initializeForm, account } from '../../modules/host/host';


const HostAccountContainer = () => {
    const [businessSuccess, setBusinessSuccess] = useState(null);
    const [bankSuccess, setBankSuccess] = useState(null);

    const dispatch = useDispatch();
    const { form, host, hostError } = useSelector(({ host }) => ({
        form: host.account,
        host: host.host,
        hostError: host.hostError
    }));

    const onChange = e => {
        const {value, name } = e.target;
        console.log(value, name);
        dispatch(
            changeField({
                form: 'account',
                key: name,
                value,
            })
        )
    };

    const onChangeImage = e => {
        const value = e.target.files[0];
        const name = e.target.name;
        console.log(value, name);
        dispatch(
            changeField({
                form: 'account',
                key: name,
                value
            })
        )
    };

    const uploadBusinessImage = e => {
        if (e.target !== null) {
            setBusinessSuccess('등록 완료');
        }
        const value = e.target.files[0];
        const name = e.target.name;
        console.log(value, name);
        dispatch(
            changeField({
                form: 'apply',
                key: name,
                value
            })
        )
    }

    const uploadBankImage = e => {
        if (e.target !== null) {
            setBankSuccess('등록 완료');
        }
        const value = e.target.files[0];
        const name = e.target.name;
        console.log(value, name);
        dispatch(
            changeField({
                form: 'apply',
                key: name,
                value
            })
        )
    }

    const onChecked = e => {
        const { checked, name } = e.target;
        console.log(checked, name);
        dispatch(
            changeField({
                form: 'account',
                key: name,
                value: checked
            })
        )
    };

    const onSubmit = e => { //form 보내기 함수
        const { host_image, host_name, host_phone_nubmer, business_type, business_license,
            bank_account, about, contract, personal_information } = form;

            if (contract === false || personal_information === false) {
                alert('파트너 약관과 개인정보 수집 및 이용에 대한 동의가 필요합니다.');
            } else if (business_license === null || bank_account === null) {
                alert('사업자등록증 사본과 통장 사본이 필요합니다.');
            } else if (host_image === null) {
                alert('사진 업로드가 필요합니다.')
            } else {console.log(e,'전송완료')};

            dispatch(account({ host_image, host_name, host_phone_nubmer, business_type, business_license,
                bank_account, about, contract, personal_information }));
    };

    useEffect(() => {
        dispatch(initializeForm('account'));
    }, [dispatch]);

    useEffect(() => {
        if (hostError) {
            console.log('오류발생');
            console.log(hostError);
            return;
        }
        if (host) {
            console.log('성공');
            console.log(host);
        }
    }, [host, hostError]);




    return (
        <>
        <HostAccountForm 
            type="account"
            form={form}
            onChange={onChange}
            onChangeImage={onChangeImage}
            onChecked={onChecked}
            onSubmit={onSubmit}
            uploadBusinessImage={uploadBusinessImage}
            businessSuccess={businessSuccess}
            uploadBankImage={uploadBankImage}
            bankSuccess={bankSuccess}
        />
        </>
    )
}

export default HostAccountContainer;