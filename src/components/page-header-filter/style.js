import styled from 'styled-components';

export const PageHeaderFilterWarpper = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding-left: 16px;
  background-color: #fff;
  border-bottom: 1px solid rgb(221, 221, 221);
  .filter-tag {
    margin: 0 4px 0 8px;
    padding: 6px 12px;
    border: 1px solid #dce0e0;
    border-radius: 4px;
    color: #484848;
    cursor: pointer;
    &.active {
      background-color: ${props => props.theme.color.secondaryColor};
      color: #fff;
    }
  }
`;