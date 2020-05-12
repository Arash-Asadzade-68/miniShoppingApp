import React  from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { storeConfiguration } from '../store/store';



// pages/_app.js

const MyApp = (props) => {
    const {store,Component} = props;
    return  <Provider store={store}>
        <Component {...props} />
      </Provider>
}

MyApp.getInitialProps = async ({Component, ctx}) => {
  let pageProps = {}
  if(Component.getInitialProps){
    pageProps = await Component.getInitialProps(ctx)
  }
  return { pageProps }
}
export default withRedux(storeConfiguration)(MyApp)