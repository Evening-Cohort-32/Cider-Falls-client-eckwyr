import { getGuests } from "./database.js";

const guests = getGuests();

export const guestList = () => {
  let guestHTML = `<section class="guests">
  <h2>Park Visitors</h2>
  <ul>`;

  for (const guest of guests) {
    guestHTML += `<li>${guest.firstName} ${guest.lastName}</li>`;
  }
  guestHTML += `</ul>
  </section>`;

  return guestHTML;
};
