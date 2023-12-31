import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css'
import ParentComponent from './components/ParentComponent';
import reportWebVitals from './reportWebVitals';

// Add the viewport meta tag to the document head
const viewportMetaTag = document.createElement('meta');
viewportMetaTag.name = 'viewport';
viewportMetaTag.content = 'width=device-width, initial-scale=1.0';
document.head.appendChild(viewportMetaTag);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ParentComponent/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
