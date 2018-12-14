import React from 'react';

// Design pattern that is used very often, its called a config object at the top of the component
const seasonConfig = {
  summer: {},
  winter: {}
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
  const text = season === 'winter' ? "Brrr It's Chilly" : "Let's hit the beach";
  const icon = season === 'winter' ? 'snowflake' : 'sun';

  return (
    <div>
      <h1>
        <i className={`${icon} icon large`} />
        {text}
        <i className={`${icon} icon large`} />
      </h1>
    </div>
  );
};

export default SeasonDisplay;
