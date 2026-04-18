import { getParks } from "./database.js";
import { servicesHTMLforPark } from "./ServicesList.js";

const parks = getParks();

export const parkList = () => {
  let parkHTML = `
  <section class="parks">
  <h2>Park Areas</h2>
  <div class ="parks-grid">
  `;

  for (const park of parks) {
    parkHTML += `
    <article class="park-card">
    <h3 class="park-title" data-park-id="${park.id}">${park.name}</h3>
    <p>${park.location}</p>
     ${servicesHTMLforPark(park.id)}
    </article>
    `;
  }

  parkHTML += `
    </div>
    </section>
    `;

  return parkHTML;
};
