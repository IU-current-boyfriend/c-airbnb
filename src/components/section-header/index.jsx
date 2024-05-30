import { memo } from 'react';
import PropTypes from 'prop-types';
import { SectionHeaderWarpper } from './style';


const SectionHeader = memo((props) => {
  const { subtitle, title } = props;
  return (
    <SectionHeaderWarpper>
      <h2 className='title'>{title}</h2>
      {subtitle && <div className='sub-title'>{subtitle}</div>}
    </SectionHeaderWarpper>
  );
});

SectionHeader.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string
}

export default SectionHeader;