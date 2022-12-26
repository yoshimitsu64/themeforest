import { ArrowRightFilled, ArrowLeftFilled } from '@fluentui/react-icons';

import { StyledCarouselButton } from './styled';

interface IProps {
  variant?: 'next' | 'previous';
  onClick?: () => void;
}

const CarouselButton = ({ variant, onClick }: IProps): JSX.Element => {
  return (
    <StyledCarouselButton onClick={onClick}>
      {variant === 'next' ? <ArrowRightFilled /> : <ArrowLeftFilled />}
    </StyledCarouselButton>
  );
};

export default CarouselButton;
