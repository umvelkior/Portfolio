function openMenu() {
    document.getElementById("menu").style.display = "flex";
    document.getElementById("openbtn").style.display = "none";
}

function closeMenu() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("openbtn").style.display = "flex";
}

function openHard() {
    document.getElementById("hardbtn").style.color = "#004add";
    document.getElementById("hardbtn").style.borderColor = "#004add";
    document.getElementById("softbtn").style.color = "#000000";
    document.getElementById("softbtn").style.borderColor = "#000000";
    document.getElementById("madbtn").style.color = "#000000";
    document.getElementById("madbtn").style.borderColor = "#000000";

    document.getElementById("Hard_skills").style.display = "flex";
    document.getElementById("Soft_skills").style.display = "none";
    document.getElementById("menu").style.display = "none";
}

function openSoft() {
    document.getElementById("softbtn").style.color = "#004add";
    document.getElementById("softbtn").style.borderColor = "#004add";
    document.getElementById("madbtn").style.color = "#000000";
    document.getElementById("madbtn").style.borderColor = "#000000";
    document.getElementById("hardbtn").style.color = "#000000";
    document.getElementById("hardbtn").style.borderColor = "#000000";

    document.getElementById("Soft_skills").style.display = "flex";
    document.getElementById("Hard_skills").style.display = "none";
    document.getElementById("Mad_skills").style.display = "none";
}

function openMad() {
    document.getElementById("madbtn").style.color = "#004add";
    document.getElementById("madbtn").style.borderColor = "#004add";
    document.getElementById("softbtn").style.color = "#000000";
    document.getElementById("softbtn").style.borderColor = "#000000";
    document.getElementById("hardbtn").style.color = "#000000";
    document.getElementById("hardbtn").style.borderColor = "#000000";

    document.getElementById("Mad_skills").style.display = "flex";
    document.getElementById("Hard_skills").style.display = "none";
    document.getElementById("Soft_skills").style.display = "none";
}