import { memo } from 'react';
import IconSearchBar from '@/assets/svg/icon-search-bar';
import { SearchWarpper } from './style';
const Search = memo(() => {
  return (
    <SearchWarpper>
      <div className="header-search-container">
        <div className='placehoder'>搜索房源和体验</div>
        <div className='icon'>
          <IconSearchBar />
        </div>
      </div>
    </SearchWarpper>
  );
})

export default Search;