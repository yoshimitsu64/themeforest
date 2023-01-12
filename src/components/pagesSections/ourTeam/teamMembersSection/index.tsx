import { useRef } from 'react';

import { useMediaQuery, usePartialFetch, useLastCardRef } from 'hooks/index';

import TeamMemberCard from 'components/cards/teamMemberCard';

import { teamMemberCards } from 'mocks/index';

import { StyledTeamMembersSection, StyledContainer, StyledContainerMobile } from './styled';

const TeamMembersSection = (): JSX.Element => {
  const observer = useRef<IntersectionObserver>();

  const { isMobile } = useMediaQuery();

  const [lastCardRef, countOfCards] = useLastCardRef(observer);

  const cards = usePartialFetch(teamMemberCards, countOfCards);

  const Container = isMobile ? StyledContainerMobile : StyledContainer;

  return (
    <StyledTeamMembersSection>
      <Container>
        {cards.map(({ name, imageURL, speciality, id }, index) => {
          if (cards.length !== index + 1) {
            return (
              <TeamMemberCard
                name={name}
                imageURL={imageURL}
                speciality={speciality}
                ref={lastCardRef}
                key={id}
              />
            );
          }
          return (
            <TeamMemberCard name={name} imageURL={imageURL} speciality={speciality} key={id} />
          );
        })}
      </Container>
    </StyledTeamMembersSection>
  );
};

export default TeamMembersSection;
