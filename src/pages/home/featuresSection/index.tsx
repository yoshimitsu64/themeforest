import TextBlock from 'components/textBlock';
import Typography from 'components/typography';
import { useMediaQuery } from 'hooks/useMediaQuery';

function FeaturesSection(): JSX.Element {
  const { isDesktop, isDesktopOrTablet, isTablet, isMobile } = useMediaQuery();

  return (
    <>
      {(isDesktopOrTablet || isDesktop) && (
        <TextBlock mt={120} mb={140}>
          <Typography type="headLine" variant="extraBold" size={0}>
            The{' '}
            <Typography type="headLine" variant="extraBold" size={0} element="span" color="primary">
              newest
            </Typography>{' '}
            business analytics platform
          </Typography>
          <Typography type="paragraph" variant="regular" size={1} color="grey">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </Typography>
        </TextBlock>
      )}
      {isTablet && (
        <TextBlock mt={80} mb={90}>
          <Typography type="headLine" variant="extraBold" size={1}>
            The{' '}
            <Typography type="headLine" variant="extraBold" size={1} element="span" color="primary">
              newest
            </Typography>{' '}
            business analytics platform
          </Typography>
          <Typography type="paragraph" variant="regular" size={2} color="grey">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </Typography>
        </TextBlock>
      )}
      {isMobile && (
        <TextBlock mt={40} mb={50}>
          <Typography type="headLine" variant="extraBold" size={2}>
            The{' '}
            <Typography type="headLine" variant="extraBold" size={2} element="span" color="primary">
              newest
            </Typography>{' '}
            business analytics platform
          </Typography>
          <Typography type="paragraph" variant="regular" size={2} color="grey">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </Typography>
        </TextBlock>
      )}
    </>
  );
}

export default FeaturesSection;
