import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readPost, unloadPost } from '../../modules/post';
import PostViewer from '../../components/post/PostViewer';
import PostActionButtons from '../../components/post/PostActionButtons';
import { setOriginalPost } from '../../modules/write';
import { removePost } from '../../lib/api/posts';

const TourViewerContainer = ({ match, history }) => {
    // 처음 마운트될 때 투어 뷰어 API 요청
    const { tourId } = match.params;
    const dispatch = useDispatch();
    const { tour, error, loading, user } = useSelector(
      ({ tour, loading, user }) => ({
        tour: tour.tour,
        error: tour.error,
        loading: loading['tour/READ_TOUR'],
        user: user.user,
      }),
    );

    useEffect(() => {
        dispatch(readTour(tourId));
        // 언마운트될 때 리덕스에서 포스트 데이터 없애기
        return () => {
          dispatch(unloadTour());
        };
    }, [dispatch, tourId]);

    

    return (
        <TourViewer
          post={post}
          loading={loading}
          error={error}
        />
      );
}