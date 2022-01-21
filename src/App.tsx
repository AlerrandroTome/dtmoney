import { GlobalStyle } from './styles/global';
import { Header } from './components/header/index';
import { Dashboard } from './components/dashboard';

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
