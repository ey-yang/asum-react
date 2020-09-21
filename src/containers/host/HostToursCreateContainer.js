import React, { useEffect, useCallback, useState } from 'react';
import HostToursCreateForm from '../../components/host/HostToursCreateForm';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initializeForm } from '../../modules/host/hostToursCreate';
import { Select } from 'antd';
import 'antd/dist/antd.css';


const HostToursCreateContainer = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ hostToursCreate }) => ({
        form: hostToursCreate.form,
    }));

    function getBase64(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
      }
    
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState([]);
    const [dates, setDates] = useState([]);

    const handleCancel = () => {
        setPreviewVisible(false);
    };

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview)
        setPreviewVisible(true)
    };

    const handleChange = ({ fileList }) => {
        
        console.log(fileList)
        setFileList(fileList);
        dispatch(
            changeField({
                form: 'form',
                key: 'images',
                value: setFileList(fileList),
            })
        );
        
    }

    const onSelect= date => {
            const nextDates = [...dates];
            const index = nextDates.indexOf(date);
            if (index === -1) {
              nextDates.push(date);
            } else {
              nextDates.splice(index, 1);
            }
            setDates(nextDates);
            console.log('Select', date, nextDates);
            dispatch(
                changeField({
                    form: 'form',
                    key: 'closedDays',
                    value: nextDates,
                })
            );
    }


    const children = [];
        for (let i = 10; i < 36; i++) {
        children.push(<Select.Option key={i.toString(36) + i}>{i.toString(36) + i}</Select.Option>);
    }


    const tagsChange = tags => {
        console.log(`selected ${tags}`);
        dispatch(
            changeField({
                form: 'form',
                key: 'tags',
                value: tags,
            })
        );
    }

    



    const onChange = e => {
        const { value, name } = e.target;
        console.log(value, name)
        dispatch(
            changeField({
                form: 'form',
                key: name,
                value
            })
        );
    };




    const onSubmit = e => {
        console.log(e)
    }

    useEffect(() => {
        return () => {
            dispatch(initializeForm('form'));
            console.log(initializeForm('form'))
        };
    }, [dispatch]);

    return (
        <>
        <HostToursCreateForm
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            previewVisible={previewVisible}
            previewImage={previewImage}
            fileList={fileList}
            handleCancel={handleCancel}
            handlePreview={handlePreview}
            handleChange={handleChange}
            onSelect={onSelect}
            dates={dates}
            children={children}
            tagsChange={tagsChange}
            />
        </>
    )
}

export default HostToursCreateContainer;
