import React from 'react';

export default React.createContext({
  social_name: '',
  type: '',
  addData: (name, type) => {},
  deleteData: () => {},
});
