import React, { useCallback, useState, memo } from 'react';

import { useDebounce, useSearch } from 'hooks/index';

import { blogInfo } from 'mocks/index';

import SearchBarDropdown from 'components/fields/searchBar/searchBarDropdown';

import { IProps } from './types';
import { StyledSearchField, StyledInput, StyledSearchBarContainer } from './styled';

const SearchBar = ({ text }: IProps): JSX.Element => {
  const [searchText, setSearchText] = useState('');
  const [isActiveDropdown, setIsActiveDropdown] = useState(false);

  const debouncedText = useDebounce(searchText, 2000);

  const searchResults = useSearch(blogInfo, debouncedText);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleDropdown = useCallback(
    (isActive: boolean) => () => {
      setIsActiveDropdown(isActive);
    },
    [isActiveDropdown]
  );

  return (
    <StyledSearchBarContainer>
      <StyledSearchField>
        <StyledInput onChange={handleChange} placeholder={text} onFocus={handleDropdown(true)} />
      </StyledSearchField>
      {searchText?.length > 0 && isActiveDropdown && (
        <SearchBarDropdown results={searchResults} onClick={handleDropdown} />
      )}
    </StyledSearchBarContainer>
  );
};

export default memo(SearchBar);
