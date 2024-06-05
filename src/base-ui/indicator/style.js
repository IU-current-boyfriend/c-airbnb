import styled from 'styled-components';

export const IndicatorWarpper = styled.div`
  overflow: hidden;
  .scroll {
    position: relative;
    display: flex;
    transition: transform 200ms ease;
    > * {
      flex-shrink: 0;
    }
  }
`;

