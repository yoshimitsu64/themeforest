import { memo } from 'react';

import PopularBlogCard from 'components/cards/popularBlogCard';
import { IProps } from './types';
import { StyledDropdown } from './styled';

const SearchBarDropdown = ({ results, onClick }: IProps): JSX.Element | null => {
  if (results.length === 0) {
    return null;
  }

  return (
    <StyledDropdown onClick={onClick(false)}>
      {results?.map(({ imageURL, date, title, id }) => (
        <PopularBlogCard imageURL={imageURL} date={date} title={title} key={id} id={id} />
      ))}
    </StyledDropdown>
  );
};

export default memo(SearchBarDropdown);
