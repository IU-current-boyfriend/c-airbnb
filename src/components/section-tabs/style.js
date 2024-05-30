import styled from 'styled-components';


export const SectionTabsWarpper = styled.div`
  .nav-city-container {
    display: flex;
    .nav-city {
      /* flex-basis: 120px; */
      /* flex-shrink: 0; */
      padding: 14px 16px;
      margin-right: 16px;
      border-radius: 3px;
      font-size: 17px;
      text-align: center;
      border: .5px solid #D8D8D8;
      white-space: nowrap;
      cursor: pointer;
      ${props => props.theme.mixin.boxShadow}
      &:last-child {
        margin-right: 0;
      }
      &.active {
        color: #fff;
        background-color: ${props => props.theme.color.secondaryColor};
      }
    }
  }
`;