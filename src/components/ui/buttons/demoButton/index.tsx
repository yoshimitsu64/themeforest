import { useRef } from 'react';

import { PlayCircle24Regular } from '@fluentui/react-icons';

import Modal, { ForwardRef } from 'components/modal';

import { StyledButton } from './styled';

const DemoButton = (): JSX.Element => {
  const ref = useRef<ForwardRef>(null);

  const handleClose = (): void => {
    ref.current?.closeModal(true);
  };

  return (
    <StyledButton onClick={handleClose}>
      <PlayCircle24Regular />
      Watch the demo
      <Modal ref={ref}>
        <iframe
          src="https://www.youtube.com/embed/p7S-S7FWmmw"
          allow="autoplay; encrypted-media"
          width="70%"
          height="70%"
          allowFullScreen
          title="video"
        />
      </Modal>
    </StyledButton>
  );
};

export default DemoButton;
