import React, { useState }  from 'react';
import { AppLoading } from 'expo'
import { Provider } from 'react-redux'

const App =() => {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
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