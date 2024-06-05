import { memo } from 'react';
import { SectionLoadingWarpper } from './style';

const SectionLoading = memo(props => {
  return (
    <SectionLoadingWarpper>loading...</SectionLoadingWarpper>
  );
});

export default SectionLoading;