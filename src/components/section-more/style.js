import styled from 'styled-components';

export const SectionMoreWarpper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 0 8px;
  color: #00848A;
  &.all {
    color: #000000;
  }
  .desc {
    font-size: 17px;
    font-weight: 600;
    margin: 0 5px 0 0;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;