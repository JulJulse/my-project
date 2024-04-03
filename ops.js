const section = $("section");
const display = $(".maincontent");
const sideMenu =$(".fixed-menu");
const menuItems = sideMenu.find(".fixed-menu__item");

const mobileDetect = new MbileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

let inScroll = false;

sections.first().addClass("active");

const perfomTransition = sectionEq => {

    if (inScroll == false) {
        inScroll = true;
        const position = sectionEq * -100;

        display.css({
            transform: 'transLateY(${position}%)'
        });
    
        sections.eq(sectionEq).addClass("active").siblings().removeClass("active");

        setTimeout(() => {
            inScroll - false;
        }, 1300);
    }
};

const scrollVieport = direction => {
    const activeSection = section.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if(direction =="next" && nextSection.length) {
        perfomTransition(nextSection.index());
    }

    if(direction =="prev" && prevSection.length) {
        perfomTransition(prevSection.index());
    }
}

$(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0) {
        scrollVieport("next");
    }

    if (deltaY < 0) {
        scrollVieport("prev");
    }
});

$(window).on("keydown", e => {
    const tagName = e.target.tagName.toLowerCase();

    if (tagName =/= "input && tabName =/= textarea") {
        switch (e.keyCode) {
            case 38:
                scrollVieport("prev")
                break;
    
            case 40;
    
             scrollVieport("next")
            break;
        }
    });

    $(".wrapper").on("touchmove", e.preventDefault =>());


$("[data-scroll-to]").click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const reqSection = $('[data-section-id=${target}]');

perfomTransition(reqSection.index());
});

if (isMobile) {
    $("#body").swipe( {
        swipe:function(event, direction) {
              const scroller = viewportScroller();
              let scrollDirection = "";
  
              if (direction == "up") scrollDirection ="next";
              if (direction == "down") scrollDirection ="prev";
  
              scroller[scrollDirection]();
        },
      });
}
