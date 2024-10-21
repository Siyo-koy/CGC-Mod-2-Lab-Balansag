const geometry = new THREE.PlaneGeometry( 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const plane = new THREE.Mesh( geometry, material );

// Function to generate a random color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return new THREE.Color(r / 255, g / 255, b / 255);
}

// Function to randomize velocity
function randomizeVelocity(value) {
    const randomFactor = (Math.random() * 0.5) + 0.75; // Random value between 0.75 and 1.25
    return value * randomFactor;
}
