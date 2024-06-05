import { memo, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import PageHeader from './components/page-header';
import PageFooter from './components/page-footer';
import PageFooterData from '@/assets/data/footer.json';
import SectionLoading from './components/section-loading';
import { AppWarpper } from './style';

const App = memo(() => {
  return (
    <AppWarpper>
      <PageHeader />
      <div className='app-content'>
        <Suspense fallback={<SectionLoading />}>
          {
            useRoutes(routes)
          }
        </Suspense>
      </div>
      {PageFooterData && <PageFooter footerData={PageFooterData} />}
    </AppWarpper>
  );
});

export default App;