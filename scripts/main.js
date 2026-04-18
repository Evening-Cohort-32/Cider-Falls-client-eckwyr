import { guestList } from "./GuestList.js";
import { parkList } from "./ParkAreasList.js";
import { servicesBar } from "./ServicesList.js";
import {
    getGuests,
    getParkAreaServices,
    getParks,
    getServices,
    moveGuestToPark,
} from "./database.js";

const toTitleCase = (text) => {
    return text
        .split(" ")
        .filter((word) => word.length > 0)
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
};

const mainContainer = document.querySelector("#container");
const ADMIN_USERNAME = "ranger";
const ADMIN_PASSWORD = "ciderfalls";
let isAdminAuthenticated = false;

const render = () => {
    const applicationHTML = `
    ${servicesBar()}
    <section class = "main-layout">
        <div class="parks-column">
        ${parkList()}
        </div>

        <div class="guests-column">
        ${guestList(isAdminAuthenticated)}
        </div>
    </section>
`;

    mainContainer.innerHTML = applicationHTML;
};

render();

mainContainer.addEventListener("click", (clickEvent) => {
    const loginButton = clickEvent.target.closest("#adminLoginButton");
    if (loginButton) {
        const usernameInput = document.querySelector("#adminUsername");
        const passwordInput = document.querySelector("#adminPassword");

        if (!usernameInput || !passwordInput) {
            return;
        }

        const username = usernameInput.value.trim().toLowerCase();
        const password = passwordInput.value;

        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            isAdminAuthenticated = true;
            render();
            return;
        }

        window.alert("Incorrect admin credentials. Try username 'ranger'.");
        return;
    }

    const logoutButton = clickEvent.target.closest("#adminLogoutButton");
    if (logoutButton) {
        isAdminAuthenticated = false;
        render();
        return;
    }

    const parkTitle = clickEvent.target.closest(".park-title");
    if (parkTitle) {
        const parkId = Number(parkTitle.dataset.parkId);
        const parkAreaServices = getParkAreaServices();
        const guests = getGuests();

        const serviceIdsInPark = parkAreaServices
            .filter((relationship) => relationship.parkAreaId === parkId)
            .map((relationship) => relationship.id);

        const guestsInPark = guests.filter((guest) =>
            serviceIdsInPark.includes(guest.parkAreaServicesId)
        );

        const guestCount = guestsInPark.length;
        const guestLabel = guestCount === 1 ? "guest" : "guests";
        window.alert(`There ${guestCount === 1 ? "is" : "are"} ${guestCount} ${guestLabel} in this area.`);
        return;
    }

    const serviceButton = clickEvent.target.closest(".service-button");
    if (serviceButton) {
        const serviceId = Number(serviceButton.dataset.serviceId);
        const service = getServices().find((currentService) => currentService.id === serviceId);
        const parkAreaServices = getParkAreaServices();
        const parks = getParks();

        const parkIdsForService = parkAreaServices
            .filter((relationship) => relationship.serviceID === serviceId)
            .map((relationship) => relationship.parkAreaId);

        const matchingParks = parks
            .filter((park) => parkIdsForService.includes(park.id))
            .map((park) => park.name);

        if (service) {
            const serviceName = toTitleCase(service.name);
            const formattedParks = matchingParks.join(", ");
            window.alert(`${serviceName} is available in: ${formattedParks}.`);
        }
    }

    const moveButton = clickEvent.target.closest("#moveVisitorButton");
    if (moveButton) {
        if (!isAdminAuthenticated) {
            window.alert("Admin login is required to move visitors.");
            return;
        }

        const visitorDropdown = document.querySelector("#visitorSelect");
        const parkDropdown = document.querySelector("#parkSelect");

        if (!visitorDropdown || !parkDropdown) {
            return;
        }

        const guestId = Number(visitorDropdown.value);
        const parkAreaId = Number(parkDropdown.value);
        moveGuestToPark(guestId, parkAreaId);
    }
});

document.addEventListener("stateChanged", () => {
    render();
});
