import React from 'react';
import Header from './components/Header.tsx';
import NewsFeed from './components/NewsFeed.tsx';
import Stats from './components/Stats.tsx';
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
