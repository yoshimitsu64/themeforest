import Typography from 'components/typography';
import { forwardRef, memo } from 'react';

import { IProps } from './types';
import { StyledTeamMemberCard, StyledFooter } from './styled';

const TeamMemberCard = forwardRef<any, IProps>(({ name, speciality, imageURL }, forwardedRef) => {
  return (
    <StyledTeamMemberCard imageURL={imageURL} className="member-card" ref={forwardedRef}>
      <StyledFooter>
        <Typography type="headLine" variant="bold" size={1} color="white">
          {name}
        </Typography>
        <Typography type="paragraph" variant="regular" size={1} color="white">
          {speciality}
        </Typography>
      </StyledFooter>
    </StyledTeamMemberCard>
  );
});

export default memo(TeamMemberCard);
