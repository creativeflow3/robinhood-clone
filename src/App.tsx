import Header from './Header.tsx';
import NewsFeed from './NewsFeed.tsx';
import Stats from './Stats.tsx';
import './App.css';
import { type ReactNode } from 'react';

function App(): ReactNode {
  return (
    <div className="App">
      {/* Header */}
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__container">
          <NewsFeed />
          {/** stats */}
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;
