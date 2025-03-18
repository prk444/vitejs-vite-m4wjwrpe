import React from 'react';
import LikeButton from './likebutton';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <img src={post.profileImage} alt={`${post.username}'s profile`} className="profile-picture" />
      <div className="post-details">
        <h3>{post.username}</h3>
        <p>{post.content}</p>
        <LikeButton />
      </div>
    </div>
  );
};

export default PostCard;