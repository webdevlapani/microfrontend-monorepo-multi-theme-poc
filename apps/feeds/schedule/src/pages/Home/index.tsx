import Shell from '@azaVista/shell';
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Stack
} from '@mui/material';
import { useEffect, useState } from 'react';
import React from 'react';

import { fetchPermissions, fetchTheme } from './utils';
import { useAuth } from '@azaVista/shared';

const useCheckModuleEnabled = (moduleName: string) => {
  const { permissions } = useAuth() as any;
  return permissions['modules'].includes(moduleName.toLowerCase());
};

const bottomNavData = [
  {
    moduleName: 'Schedule',
    icon: <>1</>,
    label: 'Schedule'
  },
  {
    moduleName: 'Feed',
    icon: <>2</>,
    label: 'Feed'
  },
  {
    moduleName: 'Meets',
    icon: <>3</>,
    label: 'Meets'
  },
  {
    moduleName: 'People',
    icon: <>4</>,
    label: 'People'
  },
  {
    moduleName: 'Profile',
    icon: <>5</>,
    label: 'Profile'
  }
];

function Home() {
  const [companyId, setCompanyId] = useState('1');
  const { theme, permissions } = useAuth() as any;
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <>
      From Schedule APP
      <h1 className="text-error">{JSON.stringify(permissions, null, 2)}</h1>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {bottomNavData.map(item => {
            if (useCheckModuleEnabled(item.moduleName))
              return (
                <BottomNavigationAction label={item.label} icon={item.icon} />
              );
          })}
        </BottomNavigation>
      </Paper>
    </>
  );
}

export default Home;
