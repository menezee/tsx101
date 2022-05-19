import {addDays, format} from 'date-fns'
import buildComponent from './build-component';

function component(): HTMLDivElement {
  const today = new Date();
  const formattedDate = format(addDays(today, 5), 'yyyy-MM-dd');
  return buildComponent(`Hello!\n${formattedDate}`);
}

document.body.appendChild(component());
