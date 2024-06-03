import styled from 'styled-components';

export const RoomDescInfoWarpper = styled.div`
  .room-desc-info {
    .desc-title {
      font-size: 16px;
      font-weight: 700;
      line-height: 1.5;
      // 多行省略
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .price {
      margin: 8px 0;
      font-size: 14px;
      color: #000000;
    }
  }
`;