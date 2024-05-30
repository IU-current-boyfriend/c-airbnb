import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionTabsWarpper } from './style';



const SectionTabs = memo((props) => {
  const { tabNames, tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const navCityHandleClick = (index, name) => {
    setCurrentIndex(index);
    tabClick && tabClick(index, name);
  }

  return (
    <SectionTabsWarpper>
      <div className='nav-city-container'>
        {
          tabNames && tabNames.map((name, index) => (
            <div
              key={name}
              className={classNames('nav-city', { active: currentIndex === index })}
              onClick={() => navCityHandleClick(index, name)}
            >
              {name}
            </div>
          ))
        }
      </div>
    </SectionTabsWarpper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
  tabsIndex: PropTypes.number
}

export default SectionTabs;