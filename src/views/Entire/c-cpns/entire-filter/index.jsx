import { memo } from 'react';
import PropType from 'prop-types';
import { EntireFilterWarpper } from './style';
import PageHeaderFilter from '@/components/page-header-filter';


const EntireFilter = memo((props) => {
  const { searchData } = props;
  return (
    <EntireFilterWarpper>
      <PageHeaderFilter searchData={searchData} />
    </EntireFilterWarpper>
  );
});

EntireFilter.propType = {
  searchData: PropType.array
}

export default EntireFilter;