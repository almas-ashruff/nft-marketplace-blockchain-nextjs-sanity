import '../styles/globals.css'
import {ThirdwebWeb3Provider} from '@3rdweb/hooks'

const supportedChainIds = [4] // 4 is for rinkeby etherium test chain id
const connectors = {
  injected: {},
}

// wrap the app in a thirdweb provider
function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
    supportedChainIds = {supportedChainIds}
    connectors = {connectors}
    >
      <Component { ... pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
 