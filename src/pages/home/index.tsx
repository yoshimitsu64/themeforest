import Description from 'components/description';
import Title from 'components/description/title';
import Subtitle from 'components/description/subtitle';
import NewSolutionsSection from 'pages/home/newSolutionsSection';
import CompanyOverviewSection from 'pages/home/CompanyOverviewSection';
import BenefitsSection from 'pages/home/benefitsSection';

import CircleButton from 'components/ui/circleButton';
import { StyledImage } from './styled';

const Home = (): JSX.Element => {
  return (
    <>
      <Description>
        <Title variant="extraBold" size={1}>
          <span>
            Find true power in your data with{' '}
            <span style={{ color: '#185CFF' }}>Ensome</span>
          </span>
        </Title>
        <Subtitle variant="regular" size={1}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi.
        </Subtitle>
      </Description>
      <StyledImage>
        <CircleButton>Learn more</CircleButton>
      </StyledImage>
      <Description>
        <Title variant="extraBold" size={0}>
          <span>
            The <span style={{ color: '#185CFF' }}>newest</span> business
            analytics platform
          </span>
        </Title>
        <Subtitle variant="regular" size={1}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Subtitle>
      </Description>
      <NewSolutionsSection />
      <CompanyOverviewSection />
      <BenefitsSection />
    </>
  );
};

export default Home;
