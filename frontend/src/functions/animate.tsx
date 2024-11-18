import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { TimelineMax } from "gsap/gsap-core";
import SplitType from "split-type";

gsap.registerPlugin(TimelineMax, ScrollTrigger);

/* mainHeader wordFlipper */
export const wordFlip = (elem:any) => {
    // Initialize SplitType on the headings
    const split = new SplitType(elem, {types:"words"})

    gsap.from(split.words, {
        y: '100%',
        opacity: 0,
        duration: 1,
        ease: 'back.inOut',
        stagger: 0.1,
    })

    gsap.to(split.words, {
        y: '0%',
        opacity: 1,
        duration: 1,
        ease: 'back.inOut',
        stagger: 0.1,
    })
}

/* draw LineOver */
export const lineOver = (elem:any) => {
    gsap.to(elem, {width: "80%", duration: 1, ease:"expo.out"});
}

/* draw LineOver */
export const lineLeave = (elem:any) => {
    gsap.to(elem, {width: "0%", duration: 0.5, ease:"expo.in"});
}

/* subHeader wordFlipper */
export const subHead = (elem:any) => {
    // Initialize SplitType on the headings
    const split = new SplitType(elem, {types:"lines"});

    gsap.from(split.lines, {
        y: '100%',
        opacity: 0,
        duration: 0.75,
        ease: 'circ.out',
        stagger: 0.2,
    })

    gsap.to(split.lines, {
        y: '0%',
        opacity: 1,
        duration: 0.75,
        ease: 'circ.out',
        stagger: 0.2,
    })
}

/* Fading MainHead Button */
export const fadeButton = (elem:any) => {
    gsap.fromTo(elem, {autoAlpha: 0, delay: 2 ,duration: 1}, {autoAlpha: 1, delay:2 ,duration:1});
}

/* subHeader wordFlipper */
export const servHead = (elem:any) => {
    // Initialize SplitType on the headings
    const split = new SplitType(elem, {types:"words"})

    gsap.from(split.words, {
        y: '100%',
        opacity: 0,
        duration: 1,
        ease: 'back.inOut',
        stagger: 0.1,
    })

    gsap.to(split.words, {
        y: '0%',
        opacity: 1,
        duration: 1,
        ease: 'back.inOut',
        stagger: 0.1,
    })
}

/* OnScroll Service Header To Show */
export const onShowInstruct = (elem:any, head:any) => {
    gsap.to(elem, {
        scrollTrigger: {
            trigger: elem,
            once: true,
            start: "top center",
            end: "20px 50%",
            onEnter: () => servHead(head)
        },
        opacity: 1,
        duration: 0.5
    })
}

/* onScroll Tags Staggering */
export const servicesStagger = (elem:any) => {
    const stagger = new TimelineMax({repeat: 0});
    stagger.staggerFromTo(elem, 1, {y: "100%", autoAlpha: 0, ease:"back.inOut"}, {y:"0%", autoAlpha: 1, ease:"back.inOut"}, 0.03);
}

/* OnScroll Tags To Show */
export const onShowServices = (elem:any, services:any) => {
    gsap.to(elem, {
        scrollTrigger: {
            trigger: elem,
            once: true,
            start: "top center",
            end: "20px 50%",
            onEnter: () => servicesStagger(services)
        },
        opacity: 1,
        duration: 0.5
    })
}

/* subHeader wordFlipper */
export const questHead = (elem:any) => {
    // Initialize SplitType on the headings
    const split = new SplitType(elem, {types:"words"})

    gsap.from(split.words, {
        y: '100%',
        opacity: 0,
        duration: 1,
        ease: 'back.inOut',
        stagger: 0.1,
    })

    gsap.to(split.words, {
        y: '0%',
        opacity: 1,
        duration: 1,
        ease: 'back.inOut',
        stagger: 0.1,
    })
}

/* onScroll Brands Staggering */
export const brandStagger = (elem:any) => {
    const stagger = new TimelineMax({repeat: 0});
    stagger.staggerFromTo(elem, 1, {y: "100%", autoAlpha: 0, ease:"back.inOut"}, {y:"0%", autoAlpha: 1, ease:"back.inOut"}, 0.03);
}

/* subHeader wordFlipper */
export const servFqs = (elem:any) => {
    // Initialize SplitType on the headings
    const split = new SplitType(elem, {types:"lines"});

    gsap.from(split.lines, {
        y: '100%',
        opacity: 0,
        duration: 0.75,
        ease: 'circ.out',
        stagger: 0.2,
    })

    gsap.to(split.lines, {
        y: '0%',
        opacity: 1,
        duration: 0.75,
        ease: 'circ.out',
        stagger: 0.2,
    })
}

/* OnScroll Brands To Show */
export const onShowFQS = (elem:any, fqsHead:any, brands:any, lines:any) => {
    gsap.to(elem, {
        scrollTrigger: {
            trigger: elem,
            once: true,
            start: "top center",
            end: "20px 50%",
            onEnter: () => {questHead(fqsHead); brandStagger(brands); servFqs(lines)}
        },
        opacity: 1,
        duration: 0.5
    })
}

/* subHeader wordFlipper */
export const driverService = (elem:any) => {
    // Initialize SplitType on the headings
    const split = new SplitType(elem, {types:"words"})

    gsap.from(split.words, {
        y: '100%',
        opacity: 0,
        duration: 1,
        ease: 'back.inOut',
        stagger: 0.1,
    })

    gsap.to(split.words, {
        y: '0%',
        opacity: 1,
        duration: 1,
        ease: 'back.inOut',
        stagger: 0.1,
    })
}

/* location description */
export const lockLines = (elem:any) => {
    // Initialize SplitType on the headings
    const split = new SplitType(elem, {types:"lines"});

    gsap.from(split.lines, {
        y: '100%',
        opacity: 0,
        duration: 0.75,
        ease: 'circ.out',
        stagger: 0.2,
    })

    gsap.to(split.lines, {
        y: '0%',
        opacity: 1,
        duration: 0.75,
        ease: 'circ.out',
        stagger: 0.2,
    })
}

/* OnScroll Brands To Show */
export const onShowLocation = (elem:any, fqsHead:any, lines:any) => {
    gsap.to(elem, {
        scrollTrigger: {
            trigger: elem,
            once: true,
            start: "top center",
            end: "20px 50%",
            onEnter: () => {driverService(fqsHead); lockLines(lines)}
        },
        opacity: 1,
        duration: 0.5
    })
}

export const subscribAnimate = (elem:any) => {
    gsap.from(elem, {
        y:'100%',
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
    });

    gsap.to(elem, {
        y:'0',
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
    });
}

/* OnScroll Brands To Show */
export const onSubscribe = (elem:any, showSub:any) => {
    gsap.to(elem, {
        scrollTrigger: {
            trigger: elem,
            once: true,
            start: "top center",
            end: "20px 50%",
            onEnter: () => subscribAnimate(showSub)
        },
        opacity: 1,
        duration: 0.5
    })
}