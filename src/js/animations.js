export function animUserNext(elem) {
  elem.animate([{ marginLeft: "100px", opacity: "0" }, { marginLeft: "0", opacity: "1" }], {
    easing: "ease-in",
    duration: 390,
  });
}

export function animUserPrev(elem) {
  elem.animate([{ marginLeft: "-100px", opacity: "0" }, { marginLeft: "0", opacity: "1" }], {
    easing: "ease-in",
    duration: 390,
  });
}