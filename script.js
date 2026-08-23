const members = [
    "Chetan",
    "Kumar",
    "Rohan",
    "Pratham",
    "Rajendra",
    "Shahid"
];

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const today = new Date();
const day = today.getDay();

// Today's cleaner
if (day === 0) {
    document.getElementById("cleaner").innerText = "OFF 😴";
} else {
    document.getElementById("cleaner").innerText = members[day - 1];
}

document.getElementById("date").innerText =
    today.toDateString();

// Weekly schedule
const schedule = document.getElementById("schedule");

for (let i = 1; i <= 6; i++) {

    const item = document.createElement("div");

    item.className = "schedule-item";

    item.innerText =
        days[i] + " — " + members[i - 1];

    schedule.appendChild(item);
}

// Sunday
const sunday = document.createElement("div");

sunday.className = "schedule-item";

sunday.innerText = "Sunday — OFF 😴";

schedule.appendChild(sunday);
function markCleaned() {

    const todayKey = new Date().toDateString();

    localStorage.setItem("cleaned_" + todayKey, "yes");

    document.getElementById("status").innerText =
        "✅ Cleaning completed!";
}
function markCleaned() {

    const todayKey = new Date().toDateString();

    localStorage.setItem("cleaned_" + todayKey, "yes");

    document.getElementById("status").innerText =
        "✅ Cleaning completed!";
}
function showMembers() {

    const list = document.getElementById("membersList");

    list.innerHTML = "";

    members.forEach((member, index) => {

        const person = document.createElement("p");

        person.innerText =
            (index + 1) + ". " + member;

        list.appendChild(person);
    });
}
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
            .then(() => {
                console.log("RoomClean PWA ready!");
            })
            .catch(error => {
                console.log("Service Worker error:", error);
            });
    });
}

// Mark cleaned
