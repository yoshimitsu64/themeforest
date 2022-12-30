import TeamMemberCard from 'components/ui/cards/teamMemberCard';
import Image from 'assets/images/person/personLargeRectangle.png';

import { StyledTeamMembersSection, StyledContainer } from './styled';

const TeamMembersSection = (): JSX.Element => {
  return (
    <StyledTeamMembersSection>
      <StyledContainer>
        <TeamMemberCard name="Sargis Grigor" speciality="Data analyst" imageURL={Image} />
        <TeamMemberCard name="Sargis Grigor" speciality="Data analyst" imageURL={Image} />
        <TeamMemberCard name="Sargis Grigor" speciality="Data analyst" imageURL={Image} />
        <TeamMemberCard name="Sargis Grigor" speciality="Data analyst" imageURL={Image} />
        <TeamMemberCard name="Sargis Grigor" speciality="Data analyst" imageURL={Image} />
        <TeamMemberCard name="Sargis Grigor" speciality="Data analyst" imageURL={Image} />
        <TeamMemberCard name="Sargis Grigor" speciality="Data analyst" imageURL={Image} />
        <TeamMemberCard name="Sargis Grigor" speciality="Data analyst" imageURL={Image} />
        <TeamMemberCard name="Sargis Grigor" speciality="Data analyst" imageURL={Image} />
      </StyledContainer>
    </StyledTeamMembersSection>
  );
};

export default TeamMembersSection;
