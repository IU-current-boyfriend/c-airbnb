import { memo, useState } from 'react';
import PropType from 'prop-types';
import classNames from 'classnames';
import { PageHeaderFilterWarpper } from './style';

const PageHeaderFilter = memo((props) => {
  const { searchData } = props;
  const [selectItem, setSelectItem] = useState([]);
  const handleClickFilterTag = (item, index) => {
    // 如果选中选项不存在筛选数组中
    if (!selectItem.includes(item)) return setSelectItem([...selectItem, item]);
    // 如果选中项存在筛选数组中
    const filterSelectItem = selectItem.filter(element => element !== item);
    setSelectItem(filterSelectItem);
  };
  return (
    <PageHeaderFilterWarpper>
      {
        searchData && searchData.map((item, index) => (
          <div
            className={classNames('filter-tag', { active: selectItem.includes(item) })}
            key={index}
            onClick={() => handleClickFilterTag(item, index)}
          >
            {item}
          </div>
        ))
      }
    </PageHeaderFilterWarpper>
  );
});

PageHeaderFilter.propType = {
  searchData: PropType.array
}

export default PageHeaderFilter;