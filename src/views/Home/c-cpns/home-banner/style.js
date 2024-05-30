import styled from "styled-components";

export const HomeBannerWapper = styled.div`
  height: 529px;
  // webpack引入背景图片的方式，通过require引入
  background: url(${require('@/assets/img/cover_01.jpeg')}) center / cover;
  /* .cover {
    这是点击搜索之后，才会弹出的遮罩层
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom,rgba(0, 0, 0, .3) 0%,rgba(0, 0, 0, .0) 300px,rgba(0, 0, 0, 0) 100%);
  } */
`;