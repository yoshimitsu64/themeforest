import { memo, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { usePortal } from 'hooks';

import { ForwardRef } from 'appTypes/index';

import { StyledModalContainer } from './styled';

interface IProps {
  children: JSX.Element;
}

const Modal = forwardRef<ForwardRef, IProps>(({ children }, forwardedRef) => {
  const elem = usePortal();

  const [isOpened, setIsOpened] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(forwardedRef, () => ({
    closeModal: (param: boolean) => {
      setIsOpened(param);
    },
    isOpened,
  }));

  const closeModal = (e: MouseEvent) => {
    if ((e.composedPath()[0] as HTMLInputElement) === containerRef.current) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', closeModal);

    return () => document.removeEventListener('click', closeModal);
  }, []);

  if (!isOpened) {
    return null;
  }

  return ReactDOM.createPortal(
    <StyledModalContainer ref={containerRef}>{children}</StyledModalContainer>,
    elem
  );
});

export default memo(Modal);
