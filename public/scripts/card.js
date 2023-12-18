document.addEventListener('DOMContentLoaded', function() {
    let colors = [
        "linear-gradient(170deg, rgb(255, 0, 118), rgb(89, 15, 183))",
        "linear-gradient(170deg, rgb(11, 99, 246), rgb(0, 60, 197))",
        "linear-gradient(170deg, rgb(64, 38, 98), rgb(57, 0, 166))",
        "linear-gradient(170deg, rgb(244, 0, 118), rgb(52, 39, 17))",
        "linear-gradient(170deg, rgb(214, 255, 127), rgb(0, 179, 204))",
        "linear-gradient(170deg, rgb(226, 51, 255), rgb(255, 107, 0))",
        "linear-gradient(170deg, rgb(64, 37, 101), rgb(48, 190, 150))",
        "linear-gradient(170deg, rgb(241, 70, 88), rgb(220, 37, 55))",
        "linear-gradient(170deg, rgb(250, 124, 187), rgb(241, 70, 88))",
        "linear-gradient(170deg, rgb(250, 124, 187), rgb(241, 70, 88))",
    ]

    let badge = document.querySelectorAll(".products__tag")

    for (let i = 0; i < badge.length; i++) {
        badge[i].style.background = colors[Math.floor(Math.random() * 10)]
    }
});