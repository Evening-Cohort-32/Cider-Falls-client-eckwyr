const database = {
  services: [
    { id: 1, name: "rafting" },
    { id: 2, name: "canoeing" },
    { id: 3, name: "fishing" },
    { id: 4, name: "hiking" },
    { id: 5, name: "picnicking" },
    { id: 6, name: "rock climbing" },
    { id: 7, name: "lodging" },
    { id: 8, name: "parking" },
    { id: 9, name: "information" },
    { id: 10, name: "ziplines" },
  ],
  parkAreas: [
    { id: 1, name: "Chamfort River", location: "Northeast Section" },
    { id: 2, name: "Lost Wolf Hiking Trail", location: "Northern Section" },
    { id: 3, name: "Lodge", location: "Northwest Section" },
    { id: 4, name: "Gander River", location: "Southwest Section" },
    { id: 5, name: "Campgrounds", location: "Southern Section" },
    { id: 6, name: "Pine Bluffs Trails", location: "Southeast Section" },
  ],
  guests: [
    { id: 1, firstName: "Sarah", lastName: "Johnson" },
    { id: 2, firstName: "Michael", lastName: "Chen" },
    { id: 3, firstName: "Emily", lastName: "Rodriguez" },
    { id: 4, firstName: "David", lastName: "Patel" },
    { id: 5, firstName: "Jessica", lastName: "Martinez" },
    { id: 6, firstName: "James", lastName: "Wilson" },
    { id: 7, firstName: "Maria", lastName: "Garcia" },
    { id: 8, firstName: "Robert", lastName: "Anderson" },
  ],
};

export const getServices = () => {
  return structuredClone(database.services);
};

export const getParks = () => {
  return structuredClone(database.parkAreas);
};

export const getGuests = () => {
  return structuredClone(database.guests);
};
