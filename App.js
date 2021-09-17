import React from 'react';
import {Provider} from 'react-redux'
import store from './src/store';
import StackNav from './src/Navigations/StackNav';
import 'react-native-gesture-handler';
import TabNav from './src/Navigations/TabNav';

function App(){
  return(
    <Provider store={store}>
      {/* <TabNav /> */}
      <StackNav />
    </Provider>


  )
}

export default App;