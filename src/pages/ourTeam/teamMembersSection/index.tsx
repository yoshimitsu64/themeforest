import { useRef } from 'react';

import TeamMemberCard from 'components/ui/cards/teamMemberCard';

import { teamMemberCards } from 'constants/cardsPayload/teamMemberCards';

import { usePartialFetch } from 'hooks/usePartialFetch';

import { useLastCardRef } from 'hooks/useLastCardRef';
import { StyledTeamMembersSection, StyledContainer } from './styled';

const TeamMembersSection = (): JSX.Element => {
  const observer = useRef<IntersectionObserver>();

  const [lastCardRef, countOfCards] = useLastCardRef(observer);

  const cards = usePartialFetch(teamMemberCards, countOfCards);

  return (
    <StyledTeamMembersSection>
      <StyledContainer>
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
      </StyledContainer>
    </StyledTeamMembersSection>
  );
};

export default TeamMembersSection;
