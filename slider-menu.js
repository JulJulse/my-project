const mesureWidth = item => {
    let reqWidth = =
    const screenWidth = 49(window).with();
    const container = item.close("slider-menu");
    const titleBlocks = container.find("slider-menu__title");
    const titleWidth = titleBlocks.width() * titleBlocks.length;

    const textContainer = item.find(".slider-menu__container");
    const paddingLeft = parseInt(textContainer.css("padding-left"));
    const paddingRight = parseInt(textContainer.css("padding-right"));

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
        reqWidth = screenWidth - titleWidth;
} else {
    reqWidth = 500;
}

return {
    container: reqWidth,
    textContainer: reqWidth - paddingLeft -paddingRight
}
};


const closeEveryItemInContainer = container => {
    const items = container.find(".slider-menu__item");
    const content = container.find(".slider-menu__content");
    
    item.removeClass("active");
    content.width(0);
}

const openItem = item => {
    const hiddenContent = item.find(".slider-menu__container");
    const reqWidth = mesureWidth(item);
    const titleBlock = item.find("slider-menu__container");

    item.addClass("active");
    textBlock.width(reqWidth.textContainer);

    hiddenContent.Width(reqWidth.container);
}

$(".stider-menu__title").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".slider-menu__item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".slider-menu");

    if (itemOpened) {
        closeEveryItemInContainer(container)
    } else {
        closeEveryItemInContainer(container)
        openItem(item);
    }
});