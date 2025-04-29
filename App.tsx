import React, {useEffect} from 'react';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Provider} from 'react-redux';
import store from 'src/redux/store';
import Navigation from '@navigation/Navigation';
import {hide} from 'react-native-bootsplash';
import RealmProviders from '@utils/schema/realmSchema';

export const queryClient = new QueryClient();

const App = () => {
  const init = async () => {};

  useEffect(() => {
    init().finally(async () => {
      await hide({fade: true});
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RealmProviders>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </RealmProviders>
    </QueryClientProvider>
  );
};

export default App;
