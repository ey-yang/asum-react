import React, { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TourList from '../../components/common/TourList';
import { listPosts } from '../../modules/tours';

const TourListContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
   
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
    }),
  );
  useEffect(() => {
    const { email } = match.params;
    const { tag, page, image, price } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listPosts({ tag, email, page, image, price }));
  }, [dispatch, location.search, match.params]);

  return (
    <TourList
      loading={loading}
      error={error}
      posts={posts}
      user={user}
    />
  );
};

export default withRouter(TourListContainer);