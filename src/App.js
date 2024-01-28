

import { useEffect, useState } from 'react';
// actions
import api from './api';
// components
import TitlePreview from './components/title';
import ButtonCreateEvent from './components/modals/create';
import ButtonCalendarEvents from './components/modals/calendar';
import EventsMemo from './components/events';
// styles
import './app.scss';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.getEvents(setData);
  }, []);

  return (
    <div className="main">
      <div className="wrapper">
        <TitlePreview />
        <header>
          <nav className='event-nav'>
            <ButtonCreateEvent data={data} setData={setData} />
            <ButtonCalendarEvents data={data} />
          </nav>
        </header>
        <section className='event-section'>
          <EventsMemo data={data} setData={setData} />
        </section>
      </div>
    </div>
  );
}

export default App;
