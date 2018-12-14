import './SeasonDisplay.css'; // before we import react, webpack will take the contents of this import and attach it to the index.html file
import React from 'react';

// Design pattern that is used very often, its called a config object at the top of the component
const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun'
  },
  winter: {
    text: "Brrr It's Chilly",
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const { lat } = props;
  const season = getSeason(lat, new Date().getMonth);
  const { text, iconName } = seasonConfig[season]; // {text, iconName} we de-structure it from the object which calls the key based on the retured statement in getSeason method

  // make sure that the root element of the component has a class name equal to the name of the component
  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon massive icon-left`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon massive icon-right`} />
    </div>
  );
};

export default SeasonDisplay;
