import { lazy, Suspense } from 'react';

const IntroductionSection = lazy(() => import('./introductionSection'));
const TeamMemberSection = lazy(() => import('./teamMembersSection'));

const OurTeam = (): JSX.Element => {
  return (
    <Suspense fallback={<h1>Team members loading...</h1>}>
      <IntroductionSection />
      <TeamMemberSection />
    </Suspense>
  );
};

export default OurTeam;
