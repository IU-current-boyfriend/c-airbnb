import styled from "styled-components";


export const LoginWarpper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  color: '#484848';
  font-weight: 600;
  .profile-icon {
    display: flex;
    align-items: center;
    .icon {
      /* height: 18px; */
      box-sizing: border-box;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 20px;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
  .profile-detail {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 42px;
    color: #484848;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    // mixin直接导入即可
    ${props => props.theme.mixin.boxShadowHover};
  }
`;