import Typography from 'components/business/typography';
import { memo } from 'react';

import { ArrowRightFilled } from '@fluentui/react-icons';

import { IProps } from './types';
import { StyledServiceCard, StyledServiceCardLogo } from './styled';

function ServiceCard({ imageURL, title, children }: IProps): JSX.Element {
  return (
    <StyledServiceCard>
      <StyledServiceCardLogo imageURL={imageURL} />
      <Typography type="headLine" variant="bold" size={0} mt={20}>
        {title}
      </Typography>
      <Typography type="paragraph" variant="regular" size={1} color="grey" mt={15}>
        {children}
      </Typography>
      <Typography type="headLine" variant="semiBold" size={0} color="primary" mt={10}>
        Read more &nbsp; <ArrowRightFilled />
      </Typography>
    </StyledServiceCard>
  );
}

export default memo(ServiceCard);
