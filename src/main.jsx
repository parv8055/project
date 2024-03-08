import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ConfigProvider } from 'antd'

const config = {
  token: {
    colorPrimaryBg: '#1890ff',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider theme={config}>
    <App />
  </ConfigProvider>
)
