import React, { Component } from 'react';

class StreamItem extends Component {

  tweetOrRetweetProfileImageSetter = tweet => {

    const tweetProfileImage = tweet.hasOwnProperty('retweeted_status') ? tweet.retweeted_status.user.profile_image_url : tweet.user.profile_image_url;
    return tweetProfileImage

  }

  render() {
      return (
        <ul>
          {this.props.streamItemsFromParent.map(tweet =>
            <li key={tweet.id}><img src={this.tweetOrRetweetProfileImageSetter(tweet)} alt='Profile' />{tweet.text}</li>
          )}
        </ul>
      )
  }
}


export default StreamItem;
