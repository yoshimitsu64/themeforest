import Description from 'components/business/description';
import Title from 'components/business/description/title';
import Subtitle from 'components/business/description/subtitle';

const FeaturesSection = (): JSX.Element => {
  return (
    <Description>
      <Title variant="extraBold" size={0}>
        <span>
          The <span style={{ color: '#185CFF' }}>newest</span> business analytics platform
        </span>
      </Title>
      <Subtitle variant="regular" size={1}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo.
      </Subtitle>
    </Description>
  );
};

export default FeaturesSection;
