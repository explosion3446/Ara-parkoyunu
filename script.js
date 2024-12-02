let car = document.getElementById("car");
let gameContainer = document.getElementById("gameContainer");
let carPosition = { x: 0, y: 0 };

// Araba başta ekranın sol üst köşesine yerleşiyor
car.style.top = carPosition.y + "px";
car.style.left = carPosition.x + "px";

// Ekrana tıklanarak arabayı hareket ettirme
gameContainer.addEventListener("click", function(event) {
    let rect = gameContainer.getBoundingClientRect();
    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;

    // Araba hedef konumuna gitmeli
    carPosition.x = mouseX - 30; // Araba boyutunun yarısı kadar düzeltme yapıyoruz
    carPosition.y = mouseY - 60; // Araba boyutunun yarısı kadar düzeltme yapıyoruz

    // Araba yeni pozisyonda
    car.style.left = carPosition.x + "px";
    car.style.top = carPosition.y + "px";
});

// Park yerlerini kontrol etme
let parkingAreas = document.querySelectorAll(".parking-area");

function checkIfParked() {
    parkingAreas.forEach(parking => {
        let parkingRect = parking.getBoundingClientRect();
        let carRect = car.getBoundingClientRect();

        // Eğer araba park yerine yakınsa
        if (
            carRect.left >= parkingRect.left &&
            carRect.left + carRect.width <= parkingRect.left + parkingRect.width &&
            carRect.top >= parkingRect.top &&
            carRect.top + carRect.height <= parkingRect.top + parkingRect.height
        ) {
            car.style.backgroundColor = "#32CD32"; // Araba park yerine girdiğinde yeşil olur
            alert("Park ettiniz!");
        }
    });
}

setInterval(checkIfParked, 100);
