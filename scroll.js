
$(document).ready(function() {
  let currentIndex = 0;
  const options = $(".option");
  const interval = 2000; // Interval in milliseconds

  function showNextOption() {
    options.removeClass("active");
    $(options[currentIndex]).addClass("active");
    currentIndex = (currentIndex + 1) % options.length;
  }

  setInterval(showNextOption, interval);

  // Optionally, you can also keep the click event handler
  options.click(function() {
    options.removeClass("active");
    $(this).addClass("active");
    currentIndex = options.index(this);
  });
});


//smoothscrolling//
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}