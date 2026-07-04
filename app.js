function updateClocks() {

    const usa = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const turkey = new Date().toLocaleTimeString("tr-TR", {
        timeZone: "Europe/Istanbul",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    document.getElementById("usaTime").textContent = usa;
    document.getElementById("trTime").textContent = turkey;

}

updateClocks();
setInterval(updateClocks,1000);
