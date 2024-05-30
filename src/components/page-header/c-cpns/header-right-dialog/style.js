import styled from "styled-components";


export const DialogWarpper = styled.div`
  display: none;
  position: absolute;
  top: 70px;
  right: 30px;
  width: 240px;
  padding: 20px 18px;
  background-color: #fff;
  z-index: 9;
  border-radius: 8px;
  box-sizing: border-box;
  ${props => props.theme.mixin.boxShadow};
  &.visible {
    display: block;
  }
  .dialog-btns {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ddd;
    margin: 0 -18px;
    padding-bottom: 10px;
    box-sizing: border-box;
    .btn {
      color: #464646;
      padding: 10px 15px;
      cursor: pointer;
      &:hover {
        background-color: #f5f5f5;
      }
    }
    .register {
      margin-bottom: 5px;
      font-weight: 600;
    }
  }
  .help-center {
    padding-top: 10px;
    box-sizing: border-box;
    .btn {
      margin: 0 -18px;
      padding: 10px 15px;
      box-sizing: border-box;
      cursor: pointer;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
`;