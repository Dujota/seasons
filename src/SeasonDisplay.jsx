import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter';
  } else {
    return lat > 0 ? 'Winter' : 'Summer';
  }
};

const SeasonDisplay = props => {
  const { lat } = props;
  const season = getSeason(lat, new Date().getMonth);
  const text = season === 'Winter' ? "Brrr It's Chilly" : "Let's hit the beach";
  const icon = season === 'Winter' ? 'snowflake' : 'sun';

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
