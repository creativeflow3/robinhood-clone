import React, { type ReactNode } from 'react';
import LineGraph from './LineGraph.tsx';
import TimeLine from './TimeLine.tsx';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import './NewsFeed.css';

const popularTopics = [
  'Technology',
  'Top Movies',
  'Upcoming Earnings',
  'Crypto',
  'Cannabis',
  'Healthcare Supplies',
  'Index ETFs',
  'Technology',
  'China',
  'Pharma',
];

function NewsFeed(): ReactNode {
  return (
    <div className="newsfeed" test-dataid="test-newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chartSection">
          <div className="newsfeed__portfolio">
            <h1>$114,000</h1>
            <p>+44.63 (+0.04%) Today</p>
          </div>
          <div className="newsfeed__chart">
            <LineGraph />
            <TimeLine />
          </div>
          <div className="newsfeed__buying__section">
            <h2> Buying Power</h2>
            <h2> $4.11</h2>
          </div>
          <div className="newsfeed__market__section">
            <div className="newsfeed__market__box">
              <p>Markets Closed</p>
              <h1>Happy Thanksgiving</h1>
            </div>
          </div>
          <div className="newsfeed__popularlists__section">
            <div className="newsfeed__popularlists__intro">
              <h1>Popular lists</h1>
              <p>Show More</p>
            </div>
            <div className="newsfeed_popularlists_badges">
              {popularTopics.map((topic, id) => (
                <Chip
                  key={id}
                  className="topic__badge"
                  variant="outlined"
                  label={topic}
                  avatar={
                    <Avatar src={`https://api.dicebear.com/8.x/${topic}/svg`} />
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
