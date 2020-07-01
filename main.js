// var projectData = require("./data");

// //particle effects
// let particles = [];
// let canvas;

// //setup function works same as start function in unity c# language
// function setup() {
//   canvas = createCanvas(window.innerWidth, window.innerHeight - 98);

//   // k.style("box", "block");
//   // k.parent("startPage");

//   //number of particles
//   const particleLength = Math.floor(window.innerWidth / 14.5);

//   // console.log(particleLength);

//   for (let i = 0; i < particleLength; i++) {
//     particles.push(new Particle());
//   }
// }

// //draw function works same as update function in unity c# language
// function draw() {
//   // delete the previous one to make sure it wont leave any previous trail
//   background(37, 38, 39);
//   particles.forEach((p, index) => {
//     p.update();
//     p.draw();
//     p.connect(particles.slice(index));
//   });
// }

// class Particle {
//   constructor() {
//     this.pos = createVector(
//       random(window.innerWidth),
//       random(window.innerHeight - 98)
//     );
//     this.speed = createVector(random(-2, 2), random(-2, 2));
//     this.size = 10;
//   }

//   //creating another circle near the previous one
//   update() {
//     this.pos.add(this.speed);

//     this.wall();
//   }

//   draw() {
//     noStroke();
//     fill("rgba(255,186,72,0.5)");
//     circle(this.pos.x, this.pos.y, this.size);
//   }

//   //detect wall :
//   wall() {
//     if (this.pos.x < 10 || this.pos.x > window.innerWidth - 10) {
//       this.speed.x = this.speed.x * -1;
//     }
//     if (this.pos.y < 20 || this.pos.y > window.innerHeight - 120) {
//       this.speed.y = this.speed.y * -1;
//     }
//   }

//   //connect the particle

//   connect(particles) {
//     particles.forEach((p) => {
//       const d = dist(this.pos.x, this.pos.y, p.pos.x, p.pos.y);

//       if (d < 120) {
//         stroke("rgba(255,186,72,0.2)");
//         line(this.pos.x, this.pos.y, p.pos.x, p.pos.y);
//       }
//       // else if (d > 100 && d < 120) {
//       //    stroke('rgba(255,255,255,0.2)');
//       //    line(this.pos.x, this.pos.y, p.pos.x, p.pos.y);
//       // }
//     });
//   }
// }

document.addEventListener("DOMContentLoaded", function (event) {
  //startPage section

  let startButton = document.querySelector("#startBtn");
  let startPage = document.querySelector("#boxshadow");
  let aboutPage = document.querySelector("#about");
  let whoAmIPage = document.querySelector("#WhoAmI");
  let timeLinePage = document.querySelector("#timeLine");
  let projectPage = document.querySelector("#projects");
  let nav = document.querySelector("header");
  // nav.style.background = "none";
  // aboutPage.style.display = "none";
  // whoAmIPage.style.display = "none";
  // timeLinePage.style.display = "none";
  // projectPage.style.display = "none";

  // startButton.addEventListener("click", () => {
  // let canvasPage = document.querySelector("#defaultCanvas0");
  // particles = [];
  // background(37, 38, 39);
  // canvasPage.remove();

  // startPage.style.display = "none";
  // aboutPage.style.display = "flex";
  // whoAmIPage.style.display = "block";
  // timeLinePage.style.display = "block";
  // projectPage.style.display = "block";

  //skills section
  let skillNav = document.querySelectorAll("#WhoAmI ul li a");
  let skills = document.querySelectorAll("#WhoAmI div");

  skillNav.forEach((link, index) => {
    if (link.className == "pressed") {
      skills[index].style.display = "grid";
    }
    // console.log(link.className)
    link.addEventListener("click", () => {
      skillNav.forEach((link) => {
        link.classList.remove("pressed");
      });
      skills.forEach((skill, idx) => {
        skill.style.display = "none";
        if (index == idx) {
          skill.style.display = "grid";
        }
      });
      link.classList.add("pressed");
    });
  });

  //timeline scrolling animation
  let timelines = document.querySelectorAll("#timeLine li");
  let timeline = document.querySelectorAll("#timeLine");

  const checkViewPort = (el) => {
    const rect = el.getBoundingClientRect();

    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      //   console.log(true);
    } else {
      //   console.log(false);
    }
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const run = () => {
    timelines.forEach((timeline) => {
      // console.log(timeline);
      if (checkViewPort(timeline)) {
        timeline.classList.add("show");
        // console.log("show")
      }
    });
  };

  window.addEventListener("load", run);
  window.addEventListener("resize", run);
  window.addEventListener("scroll", run);
  // });

  //projects modal sections

  let projects = document.querySelectorAll("#projects img");
  let modal = document.createElement("div");
  document.body.appendChild(modal);
  modal.id = "modal";
  //   console.log(projectData);
  projects.forEach((img, index) => {
    img.addEventListener("click", (e) => {
      modal.classList.add("modal-active");
      let modalImage = document.createElement("img");
      let modalDiv = document.createElement("div");
      let modalHeading = document.createElement("h3");
      let modalDescription = document.createElement("p");
      let modalSkills = document.createElement("p");
      let modalLink = document.createElement("a");
      let gitContainer = document.createElement("a");
      let github = document.createElement("span");

      gitContainer.appendChild(github);
      //projectData is a object from data.js file
      let data = projectData[index];
      modalLink.id = "link";
      gitContainer.id = "github";
      console.log(data);
      modalLink.innerText = "View Website";
      modalHeading.innerText = data.name;
      modalDescription.innerText = data.description;
      data.skills.forEach((skill) => {
        modalSkills.innerText += skill + " ";
      });
      modalLink.innerText = "Go to Website";

      modalLink.href = data.link;
      modalLink.target = "_blank";

      gitContainer.href = data.gitHub;
      gitContainer.target = "_blank";

      github.className = "fab fa-github-square fa-4x";

      // github.classList.add("fab fa-github-square fa-5x");
      modalDiv.innerHTML =
        modalHeading.outerHTML +
        modalDescription.outerHTML +
        modalSkills.outerHTML +
        modalLink.outerHTML +
        gitContainer.outerHTML;

      modalImage.src = img.src;
      console.log(img.src);
      if (modal.firstChild) {
        modal.innerHTML = "";
      }

      modal.appendChild(modalImage);
      modal.appendChild(modalDiv);

      // github.click = alert("helo");
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) {
      modal.classList.remove("modal-active");
    }
  });
});
