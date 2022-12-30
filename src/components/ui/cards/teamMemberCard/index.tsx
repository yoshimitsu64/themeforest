import { memo } from 'react';

import { StyledTeamMemberCard, StyledFooter, StyledName, StyledSpeciality } from './styled';

interface IProps {
  name: string;
  speciality: string;
  imageURL: string;
}

const TeamMemberCard = ({ name, speciality, imageURL }: IProps): JSX.Element => {
  return (
    <StyledTeamMemberCard imageURL={imageURL} className="member-card">
      <StyledFooter>
        <StyledName>{name}</StyledName>
        <StyledSpeciality>{speciality}</StyledSpeciality>
      </StyledFooter>
    </StyledTeamMemberCard>
  );
};

export default memo(TeamMemberCard);
