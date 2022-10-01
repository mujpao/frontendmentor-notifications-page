"use strict";

const numUnreadElement = document.querySelector(".number");
const markReadElement = document.querySelector(".mark-read");

numUnreadElement.textContent = document.querySelectorAll(".notification:not(.read)").length;

markReadElement.addEventListener("click", (e) => {
    e.preventDefault();

    const unreadNotificationElements = document.querySelectorAll(".notification:not(.read)");
    unreadNotificationElements.forEach((unreadNotification) => {
        unreadNotification.classList.add("read");
    });

    numUnreadElement.textContent = 0;
});
