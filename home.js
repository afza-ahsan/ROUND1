document.addEventListener("DOMContentLoaded", function () {
    const popup1 = document.querySelector("#popup1");
    const popup2 = document.querySelector("#popup2");
    const closebutton1 = document.querySelector("#close-button1");
    const closebutton2 = document.querySelector("#close-button2");
    const openpopup1 = document.querySelector("#openpopup1");
    const openpopup2 = document.querySelector("#openpopup2");

    function openPopup1() {
        popup1.style.display = "block";
    }

    function openPopup2() {
        popup2.style.display = "block";
    }

    function closePopup(event) {
        event.target.closest(".popup").style.display = "none";
    }

    openpopup1.addEventListener("click", openPopup1);
    openpopup2.addEventListener("click", openPopup2);
    closebutton1.addEventListener("click", closePopup);
    closebutton2.addEventListener("click", closePopup);
});