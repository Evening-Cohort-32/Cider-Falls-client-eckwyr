const database = {
  services: [
    { id: 1, name: "rafting", icon: "🛶" },
    { id: 2, name: "canoeing", icon: "🛶" },
    { id: 3, name: "fishing", icon: "🎣" },
    { id: 4, name: "hiking", icon: "🥾" },
    { id: 5, name: "picnicking", icon: "🧺" },
    { id: 6, name: "rock climbing", icon: "🧗" },
    { id: 7, name: "lodging", icon: "🏕️" },
    { id: 8, name: "parking", icon: "🅿️" },
    { id: 9, name: "information", icon: "ℹ️" },
    { id: 10, name: "ziplines", icon: "🪢" },
  ],
  parkAreas: [
    { id: 1, name: "Chamfort River", location: "Northeast Section" },
    { id: 2, name: "Lost Wolf Hiking Trail", location: "Northern Section" },
    { id: 3, name: "The Lodge", location: "Northwest Section" },
    { id: 4, name: "Gander River", location: "Southwest Section" },
    { id: 5, name: "Campgrounds", location: "Southern Section" },
    { id: 6, name: "Pine Bluffs Trails", location: "Southeast Section" },
  ],
  parkAreaServices:
    /*Join Table for many to many relationship between Parks and Services*/
    [
      //Chamfort River
      { id: 1, parkAreaId: 1, serviceID: 1 /*rafting*/ },
      { id: 2, parkAreaId: 1, serviceID: 2 /*canoeing*/ },
      { id: 3, parkAreaId: 1, serviceID: 3 /*fishing*/ },
      //Lost Wolf Hiking Trail
      { id: 4, parkAreaId: 2, serviceID: 4 /*hiking*/ },
      { id: 5, parkAreaId: 2, serviceID: 5 /*picnicking*/ },
      { id: 6, parkAreaId: 2, serviceID: 6 /*rock climbing*/ },
      //The Lodge
      { id: 7, parkAreaId: 3, serviceID: 7 /*lodging*/ },
      { id: 8, parkAreaId: 3, serviceID: 8 /*parking*/ },
      { id: 9, parkAreaId: 3, serviceID: 9 /*information*/ },
      { id: 10, parkAreaId: 3, serviceID: 5 /*picnicking*/ },
      //Gander River
      { id: 11, parkAreaId: 4, serviceID: 3 /*fishing*/ },
      { id: 12, parkAreaId: 4, serviceID: 4 /*hiking*/ },
      //Campgrounds
      { id: 13, parkAreaId: 5, serviceID: 9 /*information*/ },
      { id: 14, parkAreaId: 5, serviceID: 7 /*lodgin*/ },
      { id: 15, parkAreaId: 5, serviceID: 8 /*parking*/ },
      //Pine Bluff Trails
      { id: 16, parkAreaId: 6, serviceID: 9 /*hiking*/ },
      { id: 17, parkAreaId: 6, serviceID: 7 /*picnicking*/ },
      { id: 18, parkAreaId: 6, serviceID: 8 /*zip lines*/ },
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

export const getParkAreaServices = () => {
  return structuredClone(database.parkAreaServices);
};
