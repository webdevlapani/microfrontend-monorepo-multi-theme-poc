import {
  Box,
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Typography,
  SelectChangeEvent,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Stack,
  BottomNavigation,
  Paper,
  BottomNavigationAction
} from '@mui/material';
import { Redirect, useHistory } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useStyles } from './styles';
import React, { ReactNode, useEffect, useState } from 'react';
import { useAuth } from '@azaVista/shared';
import { fetchPermissions, fetchTheme } from './utils';
import { useTheme } from '@emotion/react';

const companies = ['Company1', 'Company2', 'Company3', 'Company4'];

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

const useCheckModuleEnabled = (moduleName: string) => {
  const { permissions } = useAuth();
  console.log('permissions', permissions);
  return permissions?.['modules']?.includes(moduleName.toLowerCase());
};

export default function Header() {
  const history = useHistory();

  const {
    theme,
    setTheme,
    permissions,
    setPermissions,
    companyId,
    setCompanyId
  } = useAuth();

  useEffect(() => {
    (async () => {
      if (companyId) {
        const data = await fetchPermissions(companyId);
        setPermissions(data);
      }
    })();
    (async () => {
      if (companyId) {
        const data = await fetchTheme(companyId);
        setTheme(data);
      }
    })();
    console.log('companyId', companyId);
  }, []);

  const handleChange = async (event: SelectChangeEvent) => {
    setCompanyId(event.target.value as string);
    const permissions_data = await fetchPermissions(
      event.target.value as string
    );
    setPermissions(permissions_data);
    const theme_data = await fetchTheme(event.target.value as string);
    setTheme(theme_data);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{ backgroundColor: 'white', height: 80, px: 3 }}
      >
        <Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <DashboardIcon />
          </IconButton>
          <Button color="inherit" onClick={() => history.push('/')}>
            Home
          </Button>
        </Box>
        <Box paddingX={2}>
          <FormControl fullWidth sx={{ width: 180 }}>
            <InputLabel id="demo-simple-select-label">Companies</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={companyId}
              label="Companies"
              onChange={handleChange}
            >
              {companies.map((item, index) => {
                return (
                  <MenuItem value={index + 1} key={index}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </Stack>
    </Box>
  );
}

export function Dashboard({ children }: { children: ReactNode }) {
  const theme = useTheme();
  // const classes = useStyles(theme);
  const { permissions } = useAuth() as any;
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const history = useHistory();

  console.log(theme, 'new theme');

  return (
    <Box
      sx={{
        background: theme.palette.primary.main,
        height: `calc(100vh - ${64}px)`
      }}
    >
      <Header />
      <Box role="main" sx={{ height: '100%' }}>
        {children}
      </Box>
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
                <BottomNavigationAction
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                  onClick={() => history.push(`/${item.moduleName}`)}
                />
              );
          })}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
