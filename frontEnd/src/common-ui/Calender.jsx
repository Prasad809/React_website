import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

function Calendar({events,dateClick,eventView}) {
  
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      dateClick={dateClick}
      eventClick={eventView}
      events={events}
    />
  );
}

export default Calendar;
