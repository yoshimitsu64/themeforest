import { useMediaQuery } from 'hooks/useMediaQuery';
import { memo } from 'react';
import { SocialIcon } from 'react-social-icons';

import {
  CalendarArrowCounterclockwise20Regular,
  Person20Regular,
  DataLine20Regular,
  Share20Regular,
  Tag20Regular,
} from '@fluentui/react-icons';

import { blogNetworks } from 'constants/socialNetworks';

import RelatedPosts from 'components/article/relatedPosts';
import Typography from 'components/typography';
import Tag from 'components/tag';

import { IProps } from './types';
import {
  StyledArticle,
  StyledImage,
  StyledInfoBlock,
  StyledInfo,
  StyledFooterArticle,
  StyledFooterItem,
  StyledArticleText,
  StyledArticleDesktopOrTablet,
} from './styled';

const Article = ({ imageURL, date, author, title, text, views, tags }: IProps): JSX.Element => {
  const { isDesktopOrTablet } = useMediaQuery();

  const ArticleContainer = isDesktopOrTablet ? StyledArticleDesktopOrTablet : StyledArticle;

  return (
    <ArticleContainer>
      <StyledImage src={imageURL} />
      <StyledInfoBlock>
        <StyledInfo>
          <CalendarArrowCounterclockwise20Regular color="grey" />
          <Typography type="paragraph" variant="regular" size={2} color="grey">
            {date}
          </Typography>
        </StyledInfo>
        <StyledInfo>
          <Person20Regular color="grey" />
          <Typography type="paragraph" variant="regular" size={2} color="grey">
            {author}
          </Typography>
        </StyledInfo>
      </StyledInfoBlock>
      <Typography type="headLine" variant="extraBold" size={2} mt={40}>
        {title}
      </Typography>
      <StyledArticleText>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </StyledArticleText>
      <StyledFooterArticle>
        <StyledFooterItem>
          <DataLine20Regular color="grey" />
          <Typography type="paragraph" variant="regular" size={2} color="grey">
            {views} views
          </Typography>
        </StyledFooterItem>
        <StyledFooterItem>
          <Share20Regular color="grey" />
          <Typography type="paragraph" variant="regular" size={2} color="grey" textAlign="center">
            Share:
          </Typography>
          {blogNetworks?.map((item) => (
            <SocialIcon
              bgColor="grey"
              network={item}
              style={{ width: 20, height: 20 }}
              key={item}
            />
          ))}
        </StyledFooterItem>
        <StyledFooterItem>
          <Tag20Regular color="grey" />
          <Typography type="paragraph" variant="regular" size={2} color="grey" textAlign="center">
            Tags:
          </Typography>
          {tags.map((tag, index) => (
            <Tag text={tag} key={index} />
          ))}
        </StyledFooterItem>
      </StyledFooterArticle>
      <RelatedPosts tags={tags} />
    </ArticleContainer>
  );
};

export default memo(Article);
