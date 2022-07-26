const animCommentItem = document.querySelectorAll(".swiper-reviews");

function btnComments() {
  if (animCommentItem.length > 0) {
    for (let index = 0; index < animCommentItem.length; index++) {
      const animItem = animCommentItem[index];
      if (document.querySelector(".swiper-reviews._activeActive") == null) {
        animItem.classList.add("_activeActive");
      } else {
        animItem.classList.remove("_activeActive");
      }
    }
  }
}
