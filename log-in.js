document.addEventListener("DOMContentLoaded", function () {

    const loginPage    = document.getElementById("loginPage");
    const registerPage = document.getElementById("registerPage");
    const goRegister   = document.getElementById("goRegister");
    const goLogin      = document.getElementById("goLogin");
    // Afficher login au début
    loginPage.style.display = "block";
    // Aller vers register
    goRegister.addEventListener("click", function() {
        loginPage.style.display    = "none";
        registerPage.style.display = "block";
    });
    // Aller vers login
    goLogin.addEventListener("click", function() {
        registerPage.style.display = "none";
        loginPage.style.display    = "block";
    });

});