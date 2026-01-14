(function() {
    $(".skills-prog li")
      .find(".skills-bar")
      .each(function(i) {
        $(this)
          .find(".bar")
          .delay(i * 150)
          .animate(
            {
              width:
                $(this)
                  .parents()
                  .attr("data-percent") + "%"
            },
            1000,
            "linear",
            function() {
              return $(this).css({
                "transition-duration": ".5s"
              });
            }
          );
      });
  
    $(".skills-soft li")
      .find("svg")
      .each(function(i) {
        var c, cbar, circle, percent, r;
        circle = $(this).children(".cbar");
        r = circle.attr("r");
        c = Math.PI * (r * 2);
        percent = $(this)
          .parent()
          .data("percent");
        cbar = (100 - percent) / 100 * c;
        circle.css({
          "stroke-dashoffset": c,
          "stroke-dasharray": c
        });
        circle.delay(i * 150).animate(
          {
            strokeDashoffset: cbar
          },
          1000,
          "linear",
          function() {
            return circle.css({
              "transition-duration": ".3s"
            });
          }
        );
        $(this)
          .siblings("small")
          .prop("Counter", 0)
          .delay(i * 150)
          .animate(
            {
              Counter: percent
            },
            {
              duration: 1000,
              step: function(now) {
                return $(this).text(Math.ceil(now) + "%");
              }
            }
          );
      });
  }.call(this));

document.ondragstart = function(){return false;}
document.oncontextmenu = function(){return false;}
document.onselectstart = function(){return false;}

$(document).blur(function(){
  $("title").text("Hey, come back 😢");
});
$(document).focus(function(){
  $("title").text("Stanislav's CV");
});

document.addEventListener("keydown", function (e) {
    // Block F12
    if (e.key === "F12") { // F12 key
        e.preventDefault();
        return false;
    }

    // Block Ctrl + Shift + I (Developer Tools)
    if (e.ctrlKey && e.shiftKey && e.key === "I") { // Ctrl + Shift + I
        e.preventDefault();
        return false;
    }

    // Block Ctrl + Shift + C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.key === "C") { // Ctrl + Shift + C
        e.preventDefault();
        return false;
    }

    // Block Ctrl + U (View Page Source)
    if (e.ctrlKey && e.key === "u") { // Ctrl + U
        e.preventDefault();
        return false;
    }

    // Block Ctrl + Shift + J (Developer Tools Console tab)
    if (e.ctrlKey && e.shiftKey && e.key === "J") { // Ctrl + Shift + J
        e.preventDefault();
        return false;
    }

    // Block Ctrl + Shift + F (Search in DevTools)
    if (e.ctrlKey && e.shiftKey && e.key === "F") { // Ctrl + Shift + F
        e.preventDefault();
        return false;
    }

    // Block Ctrl + Alt + I (Developer Tools)
    if (e.ctrlKey && e.altKey && e.key === "I") { // Ctrl + Alt + I
        e.preventDefault();
        return false;
    }

    // Block right-click (optional)
    if (e.button === 2) { // Right-click
        e.preventDefault();
        return false;
    }
});