
function updateCountdown() {
    const christmas = new Date("December 25, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = christmas - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor(
        (difference % (1000 * 60)) / 1000
    );

    if (difference <= 0) {
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";
        return;
    }

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);
