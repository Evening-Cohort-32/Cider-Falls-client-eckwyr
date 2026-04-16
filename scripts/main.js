import { guestList } from "./GuestList.js";
import { parkList } from "./ParkAreasList.js";
import { servicesBar } from "./ServicesList.js";

const mainContainer = document.querySelector("#container");
const applicationHTML = `
    ${servicesBar()}
    <section class = "main-layout">
        <div class="parks-column">
        ${parkList()}
        </div>

        <div class="guests-column">
        ${guestList()}
        </div>
    </section>
`;

mainContainer.innerHTML = applicationHTML;
