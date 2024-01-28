import React from 'react';
// styles
import './style.scss';

const TitlePreview = () => {
  return (
    <div className='title-block'>
      <div className="title-container">
        <p className='icon'>Hello 👋</p>
        <section className="animation">
            <div className="first">
              <div>Created</div>
            </div>
            <div className="second">
              <div>Edit</div>
            </div>
            <div className="third">
              <div>Calendar Events</div>
            </div>
        </section>
      </div>
      <div>
        <p>Your ticke`s</p>
      </div>        
    </div>
  )
}

export default TitlePreview