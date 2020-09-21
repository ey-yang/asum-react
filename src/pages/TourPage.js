import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import TourViewer from '../components/tour/TourViewer';
import TourViewerContainer from '../containers/tour/TourViewerContainer';
import Footer from '../components/common/Footer';

const PostPage = () => {
    return (
        <>
            <HeaderContainer />
            <TourViewerContainer />
            <Footer />
        </>
    );
};

export default PostPage;