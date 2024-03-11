import HelpIcon from '@mui/icons-material/Help'; // eslint-disable-line
// ❗ Please do not modify the `import HelpIcon...` line above.
// ❗ It is used by the app generator (`pnpm new-app`) to bootstrap new apps.

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const apps = [
  {
    href: '/feeds',
    icon: PeopleAltIcon,
    description: 'Feeds',
    color: '#c1d2fb',
    contactEmail: 'noreply@myorg.com',
    tags: ['general']
  },
  {
    href: '/schedule',
    icon: HelpIcon,
    description: 'Schedule',
    color: '#ffffff',
    contactEmail: 'hi@agarun.com'
  }
  // add default apps
  // ❗ Please do not modify the `// add default apps` line above.
  // ❗ It is used by the app generator (`pnpm new-app`) to bootstrap new apps.
];

export { apps };
