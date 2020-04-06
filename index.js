var mad = document.getElementById("mad");
var euro = document.getElementById("euro");
var usd = document.getElementById("usd");

mad.addEventListener("input", function () {
    exchange(this.id, this.value);
});

usd.addEventListener("input", function () {
    exchange(this.id, this.value);
});

euro.addEventListener("input", function () {
    exchange(this.id, this.value);
});

function exchange(id, valeur) {
    if (id == "mad") {
        euro.value = valeur * 0.09;
        usd.value = valeur * 0.097;
    }

    if (id == "euro") {
        usd.value = valeur * 1.08;
        mad.value = valeur * 11.12;
    }
    if (id == "usd") {
        euro.value = valeur * 0.93;
        mad.value = valeur * 10.30;
    }
}