/* eslint-disable no-shadow */
import React, { createRef, useState, useMemo } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-hooks-web';
import { ThemeProvider } from 'styled-components';
import StyledSearchBox from './styled-search-box';
import StyledSearchResult from './styled-search-result';
import StyledSearchRoot from './styled-search-root';
import useClickOutside from './use-click-outside';

const theme = {
  foreground: '#050505',
  background: 'white',
  faded: '#888',
};

export default function Search({ indices }) {
  const rootRef = createRef();
  const [query, setQuery] = useState();
  const [hasFocus, setFocus] = useState(false);
  const searchClient = useMemo(
    () => algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY),
    [],
  );

  useClickOutside(rootRef, () => setFocus(false));

  return (
    <ThemeProvider theme={theme}>
      <StyledSearchRoot ref={rootRef}>
        <InstantSearch searchClient={searchClient} indexName={indices[0].name}>
          <StyledSearchBox
            onChange={(query) => setQuery(query)}
            onFocus={() => setFocus(true)}
            hasFocus={hasFocus}
          />
          <StyledSearchResult show={query && query.length > 0 && hasFocus} indices={indices} />
        </InstantSearch>
      </StyledSearchRoot>
    </ThemeProvider>
  );
}
