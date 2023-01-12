import { useMediaQuery } from 'hooks/useMediaQuery';
import { useResponsiveContainer } from 'hooks/useResponsiveContainer';
import { lazy } from 'react';
import { useParams } from 'react-router-dom';

import { blogInfo } from 'mocks/index';

import { componentsArray } from './styled';

const Article = lazy(() => import('components/article'));
const SideBarSection = lazy(() => import('../sideBarSection'));

const BlogsSection = (): JSX.Element | null => {
  const { id: routeId } = useParams();

  const Container = useResponsiveContainer(componentsArray);

  const { isMobile, isTablet } = useMediaQuery();

  const { imageURL, date, author, title, text, views, tags, id } = blogInfo.find(
    (item) => item.id === routeId
  )!;

  if (!Container) {
    return null;
  }

  return (
    <Container>
      {isMobile && <SideBarSection />}
      <Article
        imageURL={imageURL}
        date={date}
        author={author}
        title={title}
        text={text}
        views={views}
        tags={tags}
        id={id}
        key={id}
      />
      {!isMobile && !isTablet && <SideBarSection />}
    </Container>
  );
};

export default BlogsSection;
