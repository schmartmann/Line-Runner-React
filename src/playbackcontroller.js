import React, { Component } from 'react';

class PlaybackController extends Component {
  render(){
    return(
      <div className="PlaybackController">
        <button>
          Play
        </button>
        <button>
          Pause
        </button>
        <button>
          Skip Ahead One Line
        </button>
        <button>
          Skip Back One Line
        </button>
      </div>
    )
  }
}

export default PlaybackController;
