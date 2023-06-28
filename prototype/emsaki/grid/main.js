const header = document.querySelector(".header");
const main = document.querySelector(".main");
const projectDisplayImage = document.querySelector(".project-display__image");
const headerLeft = document.querySelector(".header__left");
const headerRight = document.querySelector(".header__right");

const projects = [
  {
    title: "blind contour of the fertile river",
    image: "images/blind_contour_of_the_fertile_river.png",
    tags: ["permeable boundaries", "32.51"],
  },
  {
    title: "studio configurations",
    image: "images/studio_configurations.png",
    tags: ["permeable boundaries"],
  },
  {
    title: "wall drawing ii",
    image: "images/wall_drawing_ii.png",
    tags: ["permeable boundaries"],
  },
  {
    title: "divided sea",
    image: "images/divided_sea.jpg",
    tags: ["permeable boundaries"],
  },
  {
    title: "turning oneself over from experience to emptiness",
    image: "images/turning_oneself_over_from_experience_to_emptiness.jpg",
    tags: ["permeable boundaries"],
  },
  {
    title: "porous vessels",
    image: "images/porous_vessels.jpg",
    tags: ["permeable boundaries"],
  },
  {
    title: "32.51",
    image: "images/32.51.png",
    tags: ["becoming other rather than more true [to self]", "32.51"],
  },
  {
    title: "moon city",
    image: "images/moon_city.png",
    tags: ["becoming other rather than more true [to self]"],
  },
  {
    title: "some things last a long time",
    image: "images/some_things_last_a_long_time.png",
    tags: ["of petroleum, water, and shadows"],
  },
  {
    title: "holy land of the infertile crescent",
    image: "images/holy_land_of_the_infertile_crescent.png",
    tags: ["of petroleum, water, and shadows"],
  },
  {
    title: "triple-p rock bit",
    image: "images/triple_p_rock_bit.jpg",
    tags: ["of petroleum, water, and shadows"],
  },
  {
    title: "string figures",
    image: "images/string_figures.png",
    tags: ["of petroleum, water, and shadows", "32.51"],
  },
  {
    title: "ghost gear",
    image: "images/ghost_gear.png",
    tags: ["of petroleum, water, and shadows"],
  },
  {
    title: "postcards from the atlantic",
    image: "images/postcards_from_the_atlantic.jpg",
    tags: ["of petroleum, water, and shadows"],
  },
  {
    title: "porous vessels",
    image: "images/porous_vessels.jpg",
    tags: ["of petroleum, water, and shadows"],
  },
  {
    title: "ASTW91b",
    image: "images/ASTW91b.jpg",
    tags: ["of petroleum, water, and shadows"],
  },
]

const a = projects.sort(() => Math.random() - 0.5);

let headerLeftHTML = headerLeft.innerHTML;
let headerRightHTML = headerRight.innerHTML;

a.forEach((project) => {
  const projectSpan = document.createElement("span");

  projectSpan.innerText = project.title;
  projectSpan.classList.add(
    "project-span",
    "js-project-span"
  );
  projectSpan.setAttribute("data-image-src", project.image);
  projectSpan.setAttribute("data-tags", project.tags);

  const projectTags = project.tags;

  projectSpan.addEventListener("mouseenter", (e) => {
    const s = e.target.dataset.imageSrc;
    projectDisplayImage.src = s;

    headerLeft.innerHTML = "";
    headerRight.innerHTML = "";

    projectTags.forEach((tag) => {
      const threadSpan = document.createElement("span");
      const tagSpan = document.createElement("span");

      threadSpan.innerText = "thread:";
      threadSpan.classList.add(
        "thread-span",
        "js-thread-span"
      );

      tagSpan.innerText = tag;
      tagSpan.classList.add(
        "tag-span",
        "js-tag-span"
      );

      headerLeft.insertAdjacentElement("afterbegin", threadSpan);
      headerRight.insertAdjacentElement("afterbegin", tagSpan);

      const projectSpans = document.querySelectorAll(".js-project-span");

      projectSpans.forEach((ps) => {
        if (!Array(ps.dataset.tags).includes(tag)) {
          ps.classList.add("project-span--inactive");
        }
      });
    });
  });

  projectSpan.addEventListener("mouseleave", (e) => {
    projectDisplayImage.src = "";
    headerLeft.innerHTML = headerLeftHTML;
    headerRight.innerHTML = headerRightHTML;

    const projectSpans = document.querySelectorAll(".js-project-span");
    projectSpans.forEach((ps) => {
      ps.classList.remove("project-span--inactive");
    });
  });

  main.insertAdjacentElement("afterbegin", projectSpan);
});
