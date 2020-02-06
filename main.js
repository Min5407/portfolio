// //particle effects
// let particles = [];
// let canvas;

// //setup function works same as start function in unity c# language
// function setup() {
//    canvas = createCanvas(window.innerWidth, window.innerHeight - 98)


//    // k.style("box", "block");
//    // k.parent("startPage");

//    //number of particles
//    const particleLength = Math.floor(window.innerWidth / 14.5);

//    // console.log(particleLength);

//    for (let i = 0; i < particleLength; i++) {
//       particles.push(new Particle());
//    }
// }

// //draw function works same as update function in unity c# language
// function draw() {
//    // delete the previous one to make sure it wont leave any previous trail
//    background(37, 38, 39);
//    particles.forEach((p, index) => {
//       p.update();
//       p.draw();
//       p.connect(particles.slice(index));

//       // console.log(particles.slice(index))
//    })

// }

// class Particle {
//    constructor() {
//       this.pos = createVector(random(window.innerWidth), random(window.innerHeight - 98));
//       this.speed = createVector(random(-2, 2), random(-2, 2));
//       this.size = 10;
//    }

//    //creating another circle near the previous one
//    update() {
//       this.pos.add(this.speed);

//       this.wall();
//       // console.log(window.innerWidth);
//       // console.log(window.innerHeight);
//    }

//    draw() {
//       noStroke();
//       fill('rgba(255,186,72,0.5)');
//       circle(this.pos.x, this.pos.y, this.size);
//    }

//    //detect wall : 
//    wall() {
//       if (this.pos.x < 10 || this.pos.x > window.innerWidth - 10) {
//          this.speed.x = this.speed.x * -1;
//       }
//       if (this.pos.y < 10 || this.pos.y > window.innerHeight - 100) {
//          this.speed.y = this.speed.y * -1;
//       }

//    }

//    //connect the particle

//    connect(particles) {
//       particles.forEach(p => {
//          const d = dist(this.pos.x, this.pos.y, p.pos.x, p.pos.y);

//          if (d < 120) {
//             stroke('rgba(255,186,72,0.2)');
//             line(this.pos.x, this.pos.y, p.pos.x, p.pos.y);
//          }
//          // else if (d > 100 && d < 120) {
//          //    stroke('rgba(255,255,255,0.2)');
//          //    line(this.pos.x, this.pos.y, p.pos.x, p.pos.y);
//          // }

//       })
//    }
// }

document.addEventListener("DOMContentLoaded", function (event) {

   //startPage section

   let startButton = document.querySelector("#startBtn");
   let startPage = document.querySelector("#boxshadow");

   startPage.style.display = "none";
   startButton.addEventListener("click", () => {
      particles = [];
      background(37, 38, 39);
      canvas.width = "0";
      canvas.height = "0";
      startPage.style.display = "none"; a

   })

   //skills section
   let skillNav = document.querySelectorAll("#WhoAmI ul li a");
   let skills = document.querySelectorAll("#WhoAmI div");

   skillNav.forEach((link, index) => {
      if (link.className == "pressed") {
         skills[index].style.display = "grid";

      }
      // console.log(link.className)
      link.addEventListener("click", () => {


         skillNav.forEach(link => {
            link.classList.remove("pressed");
         })
         skills.forEach((skill, idx) => {
            skill.style.display = "none";
            if (index == idx) {
               skill.style.display = "grid";
            }

         })
         link.classList.add("pressed")
      })
   })

});