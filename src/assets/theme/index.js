const theme = {
  color: {
    primaryColor: '#FF385C',
    secondaryColor: "#00848A",
    textColor: "#484848",
  },
  mixin: {
    boxShadow: `
      box-shadow: 0 2px 4px rgba(0,0,0,0.18);
  `,
    boxShadowHover: `
      transition: box-shadow 0.2s ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,0.18);
      }
    `,
    boxScaleShadowHover: `
      img {
        transition: all .2s ease;
      }
      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,0.18);
        img {
          transform: scale(1.2);
        }
      }
    `
  }
}

export default theme;