import styled from 'styled-components';


export const RoomCarouselPhotoWarpper = styled.div`
  .slider {
    position: relative;
    cursor: pointer;
    &:hover {
      .control {
        display: flex;
      }
    }
    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: none;
      justify-content: space-between;
      border: 0;
      color: #fff;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        &.right {
          background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        }
      }
    }
    .indicator {
      position: absolute;
      z-index: 9;
      width: 30%;
      left: 0;
      right: 0;
      bottom: 10px;
      margin: 0 auto;
      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;
          &.active {
            width: 8px;
            height: 8px;
          }
        }
      }
    }
  }
  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66% 8px 0;
    border-radius: 3px;
    overflow: hidden;
    .ant-carousel {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    .item {
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    > img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;