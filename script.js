Shery.mouseFollower({})

Shery.makeMagnet("#nav-left a", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
})

Shery.textAnimate(".container h1", {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
})

Shery.imageEffect("#back", {
    style: 5, config: { "a": { "value": 0, "range": [0, 30] }, "b": { "value": -1, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 2.105263052224458 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": false }, "onMouse": { "value": 2 }, "noise_speed": { "value": 0, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 5 } }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }, gooey: true
})

Shery.imageMasker(".twoimg img", {
    mouseFollower: true,
    text: "Check it Out",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.imageMasker(".threeimg img", {
    mouseFollower: true,
    text: "Check it Out",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

const svgs = document.querySelectorAll('.mysvg');

svgs.forEach(svg => {

    const path = svg.querySelector('.mypath');
    svg.addEventListener('click', function () {
        if (path.getAttribute('fill') === 'none') {
            path.setAttribute('fill', 'black');
        } else {
            path.setAttribute('fill', 'none');
        }
    });
});

var swiper = new Swiper('.mySwiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


gsap.registerPlugin(ScrollTrigger);

gsap.from(
    "#dresses", {
    duration: 1,
    x: -300,
    opacity: 0,
    scrollTrigger: {
        trigger: ".dresses",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        onEnter: () => console.log("Entered"),
        onLeave: () => console.log("Left")
    }
}
);

gsap.from(
    "#content-dresses", {
    duration: 1,
    x: 300,
    opacity: 0,
    scrollTrigger: {
        trigger: ".dresses",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
        onEnter: () => console.log("Entered"),
        onLeave: () => console.log("Left")
    }
}
);

gsap.from(
    "#teejeans", {
    duration: 1,
    x: 300,
    opacity: 0,
    scrollTrigger: {
        trigger: ".teejeans",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
        onEnter: () => console.log("Entered"),
        onLeave: () => console.log("Left")
    }
}
);

gsap.from(
    "#content-teejeans", {
    duration: 1,
    x: -300,
    opacity: 0,
    scrollTrigger: {
        trigger: ".teejeans",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
        onEnter: () => console.log("Entered"),
        onLeave: () => console.log("Left")
    }
}
);

gsap.from(
    "#skirts", {
    duration: 1,
    x: -300,
    opacity: 0,
    scrollTrigger: {
        trigger: ".skirts",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
        onEnter: () => console.log("Entered"),
        onLeave: () => console.log("Left")
    }
}
);

gsap.from(
    "#content-skirts", {
    duration: 1,
    x: 300,
    opacity: 0,
    scrollTrigger: {
        trigger: ".skirts",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
        onEnter: () => console.log("Entered"),
        onLeave: () => console.log("Left")
    }
}
);

gsap.from(
    "#tops", {
    duration: 1,
    x: 300,
    opacity: 0,
    scrollTrigger: {
        trigger: ".tops",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
        onEnter: () => console.log("Entered"),
        onLeave: () => console.log("Left")
    }
}
);

gsap.from(
    "#content-tops", {
    duration: 1,
    x: -300,
    opacity: 0,
    scrollTrigger: {
        trigger: ".tops",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
        onEnter: () => console.log("Entered"),
        onLeave: () => console.log("Left")
    }
}
);


function validation() {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value.trim();
    var text = document.getElementById("text");
    var pattern = /^[^]+@[^]+\.[A-Z]{2,3}$/;
    const validityText = document.getElementById('validationText')
    if (email.match(pattern)) {
        validityText.textContent = "Your Email Address is Valid.";
        validityText.classList.remove("invalid");
        validityText.classList.add("valid");
    }
    else {
        validityText.textContent = "Please Enter a Valid Email Address.";
        validityText.classList.remove("valid");
        validityText.classList.add("invalid");
    }
}
const inputEmail = document.getElementById('email')
inputEmail.addEventListener('change', validation)