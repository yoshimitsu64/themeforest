import { useState } from 'react';

import { PlayCircle24Regular } from '@fluentui/react-icons';

import Modal from 'components/modal';

import { StyledButton } from './styled';

const DemoButton = (): JSX.Element => {
  const [isVideoVisible, setIsVideoVisible] = useState<boolean>(false);

  const handleClose = () => (): void => {
    setIsVideoVisible(!isVideoVisible);
  };

  return (
    <StyledButton onClick={handleClose()}>
      <PlayCircle24Regular />
      Watch the demo
      {isVideoVisible && (
        <Modal handleClose={handleClose}>
          <iframe
            src="https://www.youtube.com/embed/p7S-S7FWmmw"
            allow="autoplay; encrypted-media"
            width="70%"
            height="70%"
            allowFullScreen
            title="video"
          />
        </Modal>
      )}
    </StyledButton>
  );
};

export default DemoButton;
