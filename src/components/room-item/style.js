import styled from 'styled-components';

export const RoomItemWarpper = styled.div`
  width: ${props => props.itemWidth};
  padding: 8px;
  margin: 8px 0;
  flex-shrink: 0;
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  ${props => props.theme.mixin.boxScaleShadowHover};
`;

export const RoomRatingReviewWarpper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.theme.color.textColor};
`;