import styled from 'styled-components';


export const RoomPhotoWarpper = styled.div`
  position: relative;
  box-sizing: border-box;
  // 因为图片大小不一致，通过padding来设置图片高度和宽度相同，需要配合定位和object-fit属性填充图片
  padding: 66.66% 8px 0;
  border-radius: 3px;
  overflow: hidden;
  > img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;