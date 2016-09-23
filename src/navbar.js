import React, { Component } from 'react';

class Navbar extends Component {
  render(){
    return(
      <div className="Navbar">
        <button>
          Add New Script
        </button>
        <button>
          Open Saved Script
        </button>
      </div>
    )
  }
}

export default Navbar;
