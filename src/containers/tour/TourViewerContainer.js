import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readPost, unloadPost } from '../../modules/tour';
import TourViewer from '../../components/guest/tour/TourViewer';
import PostActionButtons from '../../components/post/PostActionButtons';
import { setOriginalPost } from '../../modules/write';
import { removePost } from '../../lib/api/posts';

const TourViewerContainer = ({ match, history }) => {
  // 처음 마운트될 때 포스트 읽기 API 요청
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { post, error, loading } = useSelector(
    ({ post, loading, user }) => ({
      post: post.post,
      error: post.error,
      loading: loading['post/READ_POST'],
    }),
  );

  useEffect(() => {
    dispatch(readPost(postId));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    history.push('/write');
  };

  const onRemove = async () => {
    try {
      await removePost(postId);
      history.push('/'); // 홈으로 이동
    } catch (e) {
      console.log(e);
    }
  };

  /* const ownPost = (user && user.id) === (post && post.user.id); */

  return (
    <TourViewer
      post={post}
      loading={loading}
      error={error}
      /* actionButtons={
        ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />
      } */
    />
  );
};

export default withRouter(TourViewerContainer);