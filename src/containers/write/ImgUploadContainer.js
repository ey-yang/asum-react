import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImgUpload from '../../components/write/ImgUpload';
import { changeField } from '../../modules/write';

const ImgUploadContainer = () => {
    const dispatch = useDispatch();
    const images = useSelector(state => state.write.images);

    const onChangeImages = nextImages => {
        
        const formData = new FormData();
        formData.append('file', nextImages);

            dispatch(
                changeField({
                    key: 'images',
                    value: nextImages,
                }),
            );
          
    };
    

    return <ImgUpload  onChangeImages={onChangeImages} images={images} />;
};

export default ImgUploadContainer;