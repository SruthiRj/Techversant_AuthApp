const config = {
  intialRouteName: 'BottomTab',
  screens: {
    Home: 'home',
    Notifications: 'notifications',
    // Profile: {
    //   path: 'profile/:id',
    //   parse: {
    //     id: id => `${id}`,
    //   },
    // },
    Share: 'share',
  },
};

const linking = {
  prefixes: ['authapp://app'],
  config,
};

export default linking;
