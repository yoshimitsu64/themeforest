import useMediaQuery from 'hooks/useMediaQuery';
import NewSolutionsSectionDesktop from 'pages/home/newSolutionsSection/desktop';
import NewSolutionsSectionMobile from 'pages/home/newSolutionsSection/mobile';

function NewSolutionsSection(): JSX.Element {
  const isMobile = useMediaQuery(860);

  if (isMobile) {
    return <NewSolutionsSectionMobile />;
  }
  return <NewSolutionsSectionDesktop />;
}

export default NewSolutionsSection;
