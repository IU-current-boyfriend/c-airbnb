import { memo } from 'react';
import { FooterWarpper } from './style';

const PageFooter = memo((props) => {
  const { footerData } = props;
  return (
    <>
      <FooterWarpper>
        <div className='footer-info'>
          {
            footerData.map(info => (
              <div
                className='info-container'
                key={info.name}>
                <h4 className='title'>{info.name}</h4>
                <div className='list'>
                  {
                    info.list && info.list.map(list => (
                      <div
                        className='item'
                        key={list}
                      >{list}</div>
                    ))
                  }
                </div>
              </div>
            ))
          }</div>
        <div className='footer-desc'>
          © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301
        </div>
      </FooterWarpper>
    </>
  );
});


export default PageFooter;