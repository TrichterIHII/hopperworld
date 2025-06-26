document.addEventListener("DOMContentLoaded", function(){
  const button_galarie = document.getElementById("galarie");
  const button_updates = document.getElementById("updates");

  button_galerie.addEventListener("click", () => goTo("galarie"));
  button_updates.addEventListener("click", () => goTo("updates"));

  function goTo(place) {
    if (place === "galarie") {
    document.getElementById("container_galarie").scrollIntoView({ behavior: "smooth" });
    }
    if (place === "updates") {
    document.getElementById("container_updates").scrollIntoView({ behavior: "smooth" });
    }
  }
});
