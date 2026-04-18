import { getGuests, getParkAreaServices, getParks } from "./database.js";

const findParkNameForGuest = (guest, parkAreaServices, parks) => {
  const parkRelationship = parkAreaServices.find(
    (relationship) => relationship.id === guest.parkAreaServicesId
  );

  if (!parkRelationship) {
    return "Unknown Area";
  }

  const park = parks.find((currentPark) => currentPark.id === parkRelationship.parkAreaId);
  return park ? park.name : "Unknown Area";
};

const visitorOptions = (guests) => {
  return guests
    .map(
      (guest) =>
        `<option value="${guest.id}">${guest.firstName} ${guest.lastName}</option>`
    )
    .join("");
};

const parkOptions = (parks) => {
  return parks
    .map((park) => `<option value="${park.id}">${park.name}</option>`)
    .join("");
};

export const guestList = (isAdmin) => {
  const guests = getGuests();
  const parks = getParks();
  const parkAreaServices = getParkAreaServices();

  let guestHTML = `<section class="guests">
  <h2>Park Visitors</h2>
  <ul>`;

  for (const guest of guests) {
    const parkName = findParkNameForGuest(guest, parkAreaServices, parks);
    guestHTML += `<li>${guest.firstName} ${guest.lastName} (${parkName})</li>`;
  }

  const adminControlsHTML = isAdmin
    ? `
    <section class="admin-access authenticated">
      <h3>Admin Access</h3>
      <p>Logged in as Ranger Admin</p>
      <button id="adminLogoutButton" type="button">Log Out</button>
    </section>
    `
    : `
    <section class="admin-access">
      <h3>Admin Access</h3>
      <label for="adminUsername">Username</label>
      <input id="adminUsername" type="text" placeholder="Enter admin username" />
      <label for="adminPassword">Password</label>
      <input id="adminPassword" type="password" placeholder="Enter password" />
      <button id="adminLoginButton" type="button">Log In</button>
    </section>
    `;

  const moveControlsHTML = isAdmin
    ? `
    <section class="move-visitor-controls">
      <h3>Move Visitor</h3>
      <label for="visitorSelect">Visitor</label>
      <select id="visitorSelect">
        ${visitorOptions(guests)}
      </select>
      <label for="parkSelect">Park Area</label>
      <select id="parkSelect">
        ${parkOptions(parks)}
      </select>
      <button id="moveVisitorButton" type="button">Move</button>
    </section>
    `
    : `<p class="admin-note">Log in as admin to move visitors between park areas.</p>`;

  guestHTML += `</ul>
  ${adminControlsHTML}
  ${moveControlsHTML}
  </section>`;

  return guestHTML;
};
