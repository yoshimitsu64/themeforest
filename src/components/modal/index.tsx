import ReactDOM from 'react-dom';

import { usePortal } from 'hooks/usePortal';

import { StyledModalContainer } from './styled';

interface IProps {
  children: JSX.Element;
  handleClose: () => () => void;
}

const Modal = ({ children, handleClose }: IProps): JSX.Element => {
  const elem = usePortal();

  return ReactDOM.createPortal(
    <StyledModalContainer onClick={handleClose()}>
      {children}
    </StyledModalContainer>,
    elem
  );
};

export default Modal;
