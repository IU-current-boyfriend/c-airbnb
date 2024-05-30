import styled from "styled-components";

export const FooterWarpper = styled.div`
  border-top: 1px solid #ddd;
  padding: 48px 24px;
  margin-top: 100px; // 之后会去掉
  .footer-info {
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
    .list {
      padding-top: 15px;
    .item {
      color: #767676;
      padding: 5px 0;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
     }
    }
  }
  .footer-desc {
    padding: 20px;
    color: #767676;
    text-align: center;
    border-top: 1px solid #EBEBEB;
  }
  
`;