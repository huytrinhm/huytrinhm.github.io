let isShowMore = false;
const showMore = document.querySelector(".more-button");
const otherProjects = document.querySelectorAll(".projects-grid > li");

showMore.addEventListener("click", () => {
  isShowMore = !isShowMore;
  showMore.innerHTML = isShowMore ? "Show Less" : "Show More";

  otherProjects.forEach((project, i) => {
    if (isShowMore) project.classList.remove("project-hidden");
    else if (i >= 6) project.classList.add("project-hidden");
    else project.classList.remove("project-hidden");
  });
});
