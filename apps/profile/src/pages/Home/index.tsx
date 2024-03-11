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

function Home() {
  return (
    <Stack justifyContent={'center'} alignItems={'center'} height={'100%'}>
      <h1 style={{ fontSize: 30 }}>From profile APP</h1>
    </Stack>
  );
}

export default Home;
