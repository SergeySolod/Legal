import React, { useState }  from 'react';
import { AppLoading } from 'expo'
import { Provider } from 'react-redux'
import { AppNavigation } from './src/navigation/AppNavigation'
import store from './src/redux/redux-store'

const App =() => {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
      />
    )
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

export default App