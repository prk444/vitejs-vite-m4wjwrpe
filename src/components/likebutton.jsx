import React, { useState } from 'react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button onClick={toggleLike} style={{ color: liked ? 'red' : 'black' }}>
      {liked ? 'Unlike' : 'Like'}
    </button>
  );
};

export default LikeButton;