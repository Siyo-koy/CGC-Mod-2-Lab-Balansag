// Alysza Mae T. Balansag
// I only learned this today man I am going to die.
// "Everything is just like Ren'py GUI if you're crazy enough" - My mantra
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 800 / 800, 0.1, 300 );
const renderer = new THREE.WebGLRenderer(); renderer.setSize( 800, 800 );
document.body.appendChild( renderer.domElement );

// Calculate bounds based on the camera's field of view
const aspect = 800 / 800;
const viewSize = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
const bounds = {
    x: viewSize * aspect / 2,
    y: viewSize / 2,
    z: 5 // Keep some distance on the z-axis
}
const speed = 0.0002
const scaleIncrement = -0.5;
let velocity = new THREE.Vector3(speed, speed, 0); // Small movement in x and y

scene.add( plane);
camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);

    plane.position.x += velocity.x;
    plane.position.y += velocity.y;

    // Calculate screen bounds based on camera position
    const bounds = {
        x: (camera.position.z * Math.tan((camera.fov * Math.PI) / 365)) * aspect,
        y: (camera.position.z * Math.tan((camera.fov * Math.PI) / 365))
    };

    // Bounce off the edges
    if (plane.position.x <= -bounds.x || plane.position.x >= bounds.x) {
        velocity.x = -velocity.x; // Reverse x direction
        plane.scale.x *= scaleIncrement; // Shrink the cube on x-axis
        plane.scale.y *= scaleIncrement; // Shrink the cube on y-axis
        plane.material.color = getRandomColor(); // Change color

    }

    if (plane.position.y <= -bounds.y || plane.position.y >= bounds.y) {
        velocity.y = -randomizeVelocity(velocity.y); // Reverse y direction with randomness
        plane.scale.x *= scaleIncrement; // Shrink the cube on x-axis
        plane.scale.y *= scaleIncrement; // Shrink the cube on y-axis
        plane.material.color = getRandomColor(); // Change color

    }
    
    // Do not delete you idiot that's why the scene didn't render.
    renderer.render( scene, camera );
}

renderer.setAnimationLoop( animate );