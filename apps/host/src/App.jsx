import React from 'react';
import { Baseline, Dashboard } from '@azaVista/shell';
import { AuthProvider, theme } from '@azaVista/shared';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Provider from './provider';
import Shell from '@azaVista/shell';

const HostApp = React.lazy(() => import('./routes'));
const ScheduleApp = React.lazy(() => import('@azaVista/schedule'));
const FeedApp = React.lazy(() => import('@azaVista/feed'));
const ProfileApp = React.lazy(() => import('@azaVista/profile'));
const MeetApp = React.lazy(() => import('@azaVista/meets'));
const PeopleApp = React.lazy(() => import('@azaVista/people'));

function DefaultFallback({ children, fallback }) {
  return <React.Suspense fallback={fallback}>{children}</React.Suspense>;
}

function Apps() {
  return (
    <>
      <Switch>
        <Route path="/feed">
          <DefaultFallback>
            <FeedApp />
          </DefaultFallback>
        </Route>

        <Route path="/schedule">
          <DefaultFallback>
            <ScheduleApp />
          </DefaultFallback>
        </Route>

        <Route path="/profile">
          <DefaultFallback>
            <ProfileApp />
          </DefaultFallback>
        </Route>

        <Route path="/people">
          <DefaultFallback>
            <PeopleApp />
          </DefaultFallback>
        </Route>

        <Route path="/meets">
          <DefaultFallback>
            <MeetApp />
          </DefaultFallback>
        </Route>

        <Route path="/">
          <DefaultFallback>
            {/* <HostApp /> */}
            {/* <>dummy</> */}
            <ScheduleApp />
          </DefaultFallback>
        </Route>
      </Switch>
    </>
  );
}

function App() {
  return (
    <>
      <Baseline />
      <AuthProvider>
        <Provider>
          <Helmet>
            <meta charSet="utf-8" />
            {/* Use minimum-scale=1 to enable GPU rasterization */}
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            />
            {/* PWA primary color */}
            <meta name="theme-color" content={theme.palette.primary.main} />
          </Helmet>
          <BrowserRouter basename={process.env.BASE_URL || '/'}>
            <Shell>
              <Apps />
            </Shell>
          </BrowserRouter>
        </Provider>
      </AuthProvider>
    </>
  );
}

export default App;
