import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import styled from 'styled-components';
import Responsive from '../../common/Responsive';

const EditorBlock = styled(Responsive)`
    padding: 0;
    width: 100%;
`;

const QuillWrapper = styled.div`
  /* 최소 크기 지정 및 padding 제거 */
  border: 1px solid #d9d9d9;
  .ql-editor {
    padding: 1%;
    min-height: 700px;
    font-size: 1rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;
const HostEditor = () => {
  const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
  const quillInstance = useRef(null); // Quill 인스턴스를 설정

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow',
      modules: {
        // 더 많은 옵션
        // https://quilljs.com/docs/modules/toolbar/ 참고
        toolbar: [
            [{ 'size': ['small', false, 'large', 'huge'] }],
           ['bold', 'italic', 'underline', 'strike'],
           [{ list: 'ordered' }, { list: 'bullet' }],
           ['image'],
        ],
      },
    });


    // quill에 text-change 이벤트 핸들러 등록
    // 참고: https://quilljs.com/docs/api/#events

    const quill = quillInstance.current;
    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        onChangeField({ key: 'body', value: quill.root.innerHTML });
      }
    });
  },[onChangeField]);

  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    quillInstance.current.root.innerHTML = body;
  }, [body]);

  // const onChangeTitle = e => {
  //   onChangeField({ key: 'title', value: e.target.value });
  // };

  return (
    <EditorBlock>
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

export default HostEditor;