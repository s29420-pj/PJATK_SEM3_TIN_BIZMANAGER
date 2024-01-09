function onClickHome() {
    let mainTitleElement = document.getElementById("mainTitle");
    let newContactButton = document.getElementById("newContactButton");
    let hideContactContent = document.getElementById("contactTable");
    mainTitleElement.textContent = "Home";
    newContactButton.style.display = "none";
    hideContactContent.style.display = "none";
    console.log("Changed tab to Home.")

}