import { forwardRef, memo } from 'react';

import { StyledTeamMemberCard, StyledFooter, StyledName, StyledSpeciality } from './styled';

interface IProps {
  name: string;
  speciality: string;
  imageURL: string;
}

const TeamMemberCard = forwardRef<any, IProps>(({ name, speciality, imageURL }, forwardedRef) => {
  return (
    <StyledTeamMemberCard imageURL={imageURL} className="member-card" ref={forwardedRef}>
      <StyledFooter>
        <StyledName>{name}</StyledName>
        <StyledSpeciality>{speciality}</StyledSpeciality>
      </StyledFooter>
    </StyledTeamMemberCard>
  );
});

export default memo(TeamMemberCard);
