const yesButton = document.querySelector(".buttons-yes");
const noButton = document.querySelector(".buttons-no");
const image = document.querySelector(".index-img");
const paragraph = document.querySelector(".par");

let noClickCount = 0;

const images = [
  "index-pic.jpg",
  "pic-1.jpg",
  "pic-2.jpg",
  "pic-3.jpg",
  "pic-4.jpg",
  "pic-5.jpg",
];

noButton.addEventListener("click", () => {
  console.log("clicked no button");
  noClickCount++;

  noButton.style.opacity = 1 - noClickCount * 0.2;
  noButton.style.transform = `scale(${1 - noClickCount * 0.1})`;

  switch (noClickCount) {
    case 1:
      paragraph.textContent = "Are you sure? isang click na yan";
      image.src = images[1];
      break;
    case 2:
      paragraph.textContent = "Please think about it, dalawang click na";
      image.src = images[2];
      break;
    case 3:
      paragraph.textContent = "LOVE NAMAN :<<, tatlong click na";
      image.src = images[3];
      break;
    case 4:
      paragraph.textContent =
        "LAST CHANGE NA TALAGA TO, sasabog talaga yan, wag na mag NO";
      image.src = images[4];
      break;
    case 5:
      paragraph.textContent =
        "BOOOM, BOOGSH WALA NA NO BUTTON, wala kang choice, YES nalang yan.";
      image.src = images[5];
      noButton.style.displae = "none";
      break;
  }
});

yesButton.addEventListener("click", () => {
  paragraph.textContent =
    "YES, SHE SAID YES, I LOVE YOU SO MUCH! chat mo na ko";
  image.src = "yes.jpg";

  noButton.style.display = "none";
  yesButton.style.display = "none";
});
