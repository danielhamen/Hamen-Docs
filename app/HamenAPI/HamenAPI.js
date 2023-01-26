const HamenAPI = {
    logMessage(message, type = "INFO") {
        // Remove previous boxes:
        let boxes = document.getElementsByClassName("log\:log-box");
        while (boxes.length !== 0) {
            boxes[0].remove();
        }

        // Create info box:
        let infoBox = document.createElement("div");
        infoBox.classList.add("log:log-box");
        infoBox.innerHTML = message;

        // Change info box type:
        if (type === "INFO") {
            infoBox.classList.add("log\:info-log");
        } else if (type === "ERROR") {
            infoBox.classList.add("log\:error-log");
        } else if (type === "WARNING") {
            infoBox.classList.add("log\:warning-log");
        } else {
            if (type) {
                throw `Unknown Info Type: "${type}"`;
            }
        }

        // Remove info box on click:
        infoBox.addEventListener("click", function () {
            infoBox.classList.add("hidden");
            setTimeout(function () {
                infoBox.remove();
            }, 300);
        })

        // Add info box to body:
        document.body.appendChild(infoBox);

        // Remove info box after 7 seconds:
        setTimeout(function () {
            infoBox.classList.add("hidden");
            setTimeout(function () {
                infoBox.remove();
            }, 300)
        }, 7000);
    }, generateID(length = 6) {
        let id = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < length; i++) {
            id += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return id;
    }
}