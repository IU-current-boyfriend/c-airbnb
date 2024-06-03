import styled from 'styled-components';

export const RoomMaskItemWarpper = styled.div`
  position: relative;
  width: ${props => props.itemWidth};
  flex-shrink: 0;
  padding: 0 8px 0;
  box-sizing: border-box;
  cursor: pointer;
  > img {
    width: 100%;
  }
`;

export const RoomMaskContentWarpper = styled.div`
  position: absolute;
  bottom: 0;
  left: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  right: 8px;
  height: 50%;
  padding: 0 24px 32px;
  color: #fff;
  // 渐变效果
  background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%);
  .city {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .price {
    font-size: 14px;
    .average {
      margin-right: 5px;
    }
  }
`;