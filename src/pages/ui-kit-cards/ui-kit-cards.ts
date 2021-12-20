import '@Blocks/button/button.scss';
import '@Blocks/dropdown/dropdown.scss';
import '@Blocks/dropdown/dropdown';
import '@Blocks/dropdown-dates/dropdown-dates.scss';
import '@Blocks/input-text/input-text.scss';
import '@Blocks/input-text/input-text';
import '@Blocks/link/link.scss';
import '@Blocks/radiogroup/radiogroup.scss';
import '@Blocks/rate-btn/rate-btn.scss';
import '@Blocks/rate-btn/rate-btn';
import '@Blocks/toggle-block/toggle-block.scss';
import '@Blocks/toggle-block/toggle-block';
import '@Blocks/topic-label/topic-label.scss';

import '@Blocks/calendar/calendar';
import '@Blocks/card-room/card-room.scss';
import '@Blocks/form-registration/form-registration.scss';
import '@Blocks/form-reservation/form-reservation.scss';
import '@Blocks/form-reservation/form-reservation';
import '@Blocks/form-search-num/form-search-num.scss';
import '@Blocks/form-search-num/form-search-num';
import '@Blocks/form-sign-in/form-sign-in.scss';

import '@Pages/ui-kit-cards/ui-kit-cards.scss';

import { CardRoom } from '../../blocks/card-room/card-room';

document.querySelectorAll('.js-card-room').forEach((item: Element) => {
  new CardRoom(item);
});
