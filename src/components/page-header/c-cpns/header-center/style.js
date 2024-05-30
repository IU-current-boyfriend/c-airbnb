import styled from 'styled-components';


export const SearchWarpper = styled.div`
  /* .header-search-container {
    display: flex;
    justify-content: center;
    height: 48px;
  } */
  height: 48px;
  .header-search-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    box-sizing: border-box;
    cursor: pointer;
    .placehoder {
      padding: 0 16px;
      color: #222;
      font-weight: 600;
    }
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background-color: ${props => props.theme.color.primaryColor};
    }
  }
`;