import styled from 'styled-components';


export const RoomReviewWarpper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.color.textColor};
  .count {
    margin: 0 2px 0 4px;
  } 
  .content {
    font-size: 10px;
  }
`;