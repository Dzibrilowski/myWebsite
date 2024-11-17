gsap.registerPlugin(ScrollTrigger) 
gsap.from(".card" , {
    scrollTrigger : {
    trigger: ".card",
    start: "5% 90%",
    },
    opacity: "0",
    y:200,
    duration: 1,
    stagger : 0.2
    
})

gsap.utils.toArray(".textBlock").forEach(textBlock => {
    gsap.from(textBlock , {
    scrollTrigger : {
        trigger: textBlock,
        start: "20% 90%",
    },
    opacity: 0,
    x: 100,
    duration: 1
    })
})
gsap.from("#textBounce  p , #textBounce h1",{
    scrollTrigger:
    {
        trigger: "#textBounce",
        start: "20% 90%",
    },
    opacity: 0,
    x: 200,
    duration: 1,
    ease : "",
    stagger: 0.2
})

gsap.utils.toArray("#offer>div:nth-child(3n+2) , #offer>div:nth-child(3n) ").forEach( offerDiv => {

    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: offerDiv,
            start: "20% 80%"
        } 
    })


    tl.from(offerDiv.querySelector("h3"), {
        opacity:0,
        duration: 0.75,
        y: 20
      }, );
      
    tl.from(offerDiv.querySelector("p"), {
        opacity: 0,
        duration: 0.75,
        y: 50
    }, ">-50%")

    
})

gsap.utils.toArray("#offer>div:nth-child(3n+1)").forEach( offerDiv => {

    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: offerDiv,
            start: "start 95%"
        } 
    })

    tl.from( offerDiv, {
        width: 0,
        height: 0,
        x: offerDiv.offsetWidth/2,
        y: offerDiv.offsetHeight/2,
        marginBottom: offerDiv.offsetHeight,
        duration: 0.75,
        ease: "circ"
    })
    tl.from(offerDiv.querySelectorAll("h3 , p"), {
       opacity: 0, 
       y:25,
       duration: 0.75
    }, ">-25%")
})

gsap.from("form div", {
    duration: 1,
    opacity: 0,
    y:50,
    stagger: 0.3
})
gsap.from("#contactInfo h1 , #contactInfo p , #contactInfo img", {
    duration: 1,
    opacity: 0,
    y:50,
    stagger: 0.3
})


gsap.utils.toArray(".oMnie").forEach( oMnie => {
    gsap.from(oMnie.querySelectorAll(".leftCon h2, .leftCon p , .leftCon a") , {
        scrollTrigger : {
        trigger: oMnie,
        start: "20% 90%",
        },
        opacity: 0,
        x:100,
        duration: 1,
        stagger: 0.3
    })
    gsap.from(oMnie.querySelectorAll(".rightCon img , .rightCon a") , {
        scrollTrigger : {
        trigger: oMnie,
        start: "20% 90%",
    
        },
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.5
    }) 
})