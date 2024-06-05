import styled from 'styled-components';

export const EntirePagationWarpper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 78px;
  .info {
    margin-top: 20px;
  }
  .MuiPaginationItem-icon {
    font-size: 20px;
  }

  .MuiPaginationItem-page{
    margin: 0 9px;

    &:hover {
      text-decoration: underline;
    }
  }

  .MuiPaginationItem-page.Mui-selected {
    background-color: #222;
    color: #fff;

    &:hover {
      background-color: #222;
    }
  }
`;