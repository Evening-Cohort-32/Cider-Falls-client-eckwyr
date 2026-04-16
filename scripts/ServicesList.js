import { getServices, getParkAreaServices } from "./database.js";

const services = getServices();

export const servicesHTMLforPark = (parkID) => {
  const parkAreaServices = getParkAreaServices();
  let html = `<ul>`;

  for (const relationship of parkAreaServices) {
    if (relationship.parkAreaId === parkID) {
      for (const service of services) {
        if (service.id === relationship.serviceID) {
          html += `<li>${service.name}</li>`;
        }
      }
    }
  }
  html += "</ul>";
  return html;
};

export const servicesBar = () => {
  let servicesHTML = `<section class="services-bar">`;

  for (const service of services) {
    servicesHTML += `<button class="service-button">
        <span class="icon">${service.icon}</span>
        <span class ="label">${service.name}</span>
    </button>`;
  }

  servicesHTML += "</section>";
  return servicesHTML;
};
