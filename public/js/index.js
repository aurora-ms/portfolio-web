import anime from './anime.es.js';
import Swiper from './swiper-bundle.esm.browser.min.js'

var swiperGeneral = new Swiper('#principalPage', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    speed: 1500,
    preventInteractionOnTransition: true,
    hashNavigation: true,
    replaceState: true,
    watchState: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletElement: 'a',
        renderBullet: function (index, className) {
            var sections = document.querySelectorAll('#principalPage section');
            var finalHash = sections[index].getAttribute('data-hash')

            return '<a href ="' + finalHash + '" class="' + className + '"></a>';
        },

    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

});



// document.body.addEventListener('mousemove', (e) => {
//     const img1 = document.querySelectorAll('#backgroundImages > div')[0];
//     const img2 = document.querySelectorAll('#backgroundImages > div')[1];

//     var cordX = e.clientX;
//     var cordY = e.clientY;

//     var finalPosi1 = {
//         posiY: -cordY * 1 / 60,
//         posiX: -cordX * 1 / 60
//     }

//     var finalPosi2 = {
//         posiY: -cordY * -1 / 60,
//         posiX: -cordX * 1 / 60
//     }

//     img1.style.top = finalPosi1.posiY + 'px';
//     img1.style.right = finalPosi1.posiX + 'px';

//     img2.style.top = finalPosi2.posiY + 'px';
//     img2.style.left = finalPosi2.posiX + 'px';


// }, {passive: true})


window.addEventListener("load", async () => {
    const curtain = document.getElementById("curtain").style.transform = 'translateY(-1000px)'


    var finalObject = await animations()

    finalObject.textContent.play();
    finalObject.img1.play();

    switch (location.hash) {
        case '#works':
            finalObject.img2.play();
            finalObject.buttons.play();
            document.querySelector('#scrollIcon').style = 'transform: translateY(200px)'
            document.querySelector('#opacity').style = 'opacity: 1'
            break;
        case '#about':
            finalObject.img3.play();
            finalObject.buttons.play();
            document.querySelector('#scrollIcon').style = 'transform: translateY(200px)'
            document.querySelector('#opacity').style = 'opacity: 1'
            break;
        case '#contact':
            finalObject.img4.play();
            finalObject.buttons.play();
            document.querySelector('#scrollIcon').style = 'transform: translateY(200px)'
            document.querySelector('#opacity').style = 'opacity: 1'
            break;
        default:
            break;
    }


    // Clases que necesitamos asignar para despues los trabajos

    document.querySelectorAll('.imageSection')[0].style.opacity = '0'
    document.querySelectorAll('.imageSection')[0].style.transform = 'translateX(-920px)';

    document.querySelectorAll('.textSectionWorks')[0].style.opacity = '0'
   document.querySelectorAll('.textSectionWorks')[0].style.transform = 'translateX(900px)';
}, {passive: true});


swiperGeneral
    .on('slideChangeTransitionStart', async function () {
        var finalObject = await animations()
        finalObject.textContent.play();

        switch (swiperGeneral.activeIndex) {
            case 0:
                finalObject.img1.play();
                document.querySelector('#opacity').style = 'opacity: 0'
                document.querySelector('#scrollIcon').style = 'transform: translateY(0px)'
                break;
            case 1:
                finalObject.img2.play();
                finalObject.buttons.play();
                document.querySelector('#scrollIcon').style = 'transform: translateY(200px)'
                document.querySelector('#opacity').style = 'opacity: 1'
                break
            case 2:
                finalObject.img3.play();
                finalObject.buttons.play();
                break
            case 3:
                finalObject.img4.play();
                break
            default:
                break;
        }



    });







var swiperWork = new Swiper('#workPage', {
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});








function animations() {
    var n = swiperGeneral.activeIndex

    const listAnimation = {
        textContent: anime.timeline({
            autoplay: false,
            duration: 750,
            delay: 300,
            easing: 'easeOutExpo',
        })
            .add({
                targets: document.querySelectorAll('#textSection h2')[n],
                translateX: [-1050, 0],

            })
            .add({
                targets: document.querySelectorAll('.horLines div:first-child')[n],
                translateX: [-1050, 0],

            }, 100)
            .add({
                targets: document.querySelectorAll('.horLines div:last-child')[n],
                translateX: [-1050, 0]

            }, 200)
            .add({
                targets: document.querySelectorAll(' #textSection h1')[n],
                translateX: [-1050, 0]

            }, 300)
            .add({
                targets: document.querySelectorAll(' #textSection h3')[n - 1],
                translateX: [-1050, 0]

            }, 400)
        ,

        buttons: anime({
            targets: document.querySelectorAll(' .button button')[n - 1],
            autoplay: false,
            duration: 800,
            delay: 900,
            easing: 'easeOutExpo',
            translateX: [-220, 0]
        }),

        img1: anime.timeline({
            autoplay: false,
            duration: 1050,
            delay: 100,
            easing: 'easeOutExpo',
        })
            .add({
                targets: document.querySelectorAll('#imgSectionOne div:first-child')[n],
                translateX: ['790px', 0],
                scale: [0.5, 1]
            })
            .add({
                targets: document.querySelectorAll('#imgSectionOne div:last-child')[n],
                translateX: ['465px', 0],
                scale: [0.5, 1]
            }, 200),


        img2: anime.timeline({
            autoplay: false,
            duration: 2000,
            delay: 1200,
            easing: 'easeOutExpo',
        })
            .add({
                targets: document.querySelectorAll('#principalImage')[n - 1],
                translateY: [-900, 0],
            })
            .add({
                targets: document.querySelectorAll('#singleParts div:nth-child(1)')[n - 1],
                translateY: [-700, 0],
            }, 20)
            .add({
                targets: document.querySelectorAll('#singleParts div:nth-child(2)')[n - 1],
                translateY: [-700, 0],
            }, 80)
            .add({
                targets: document.querySelectorAll('#singleParts div:nth-child(3)')[n - 1],
                translateY: [-700, 0],
            }, 140)
            .add({
                targets: document.querySelectorAll('#singleParts div:nth-child(4)')[n - 1],
                translateY: [-700, 0],
            }, 180)
            .add({
                targets: document.querySelectorAll('#singleParts div:nth-child(5)')[n - 1],
                translateY: [-700, 0],
            }, 50),

        img3: anime.timeline({
            autoplay: false,
            delay: 1200,
            easing: 'linear'
        })
            .add({
                targets: document.querySelectorAll('#imgSectionThree div')[n - 2],
                duration: 2000,
                opacity: [0, 1]
            }),
        img4: anime.timeline({
            autoplay: false,
            delay: 600,
            duration: 800,
            easing: 'linear'
        })
            .add({
                targets: document.querySelectorAll('#principalPage .contactLinks ')[n - 3],
                opacity: [0, 1]
            }, '+450')
            .add({
                targets: document.querySelectorAll('#imgSectionFour div:first-child')[n - 3],
                opacity: [0, 1]
            }, '+500')
            .add({
                targets: document.querySelectorAll('#imgSectionFour div:last-child')[n - 3],
                opacity: [0, 1]
            }, '+400')



    }

    return listAnimation
}



function animationsWorks() {
    var n = swiperWork.activeIndex
    const listAnimationWorks = {
        newWorks: anime.timeline({
            autoplay: false,
            duration: 1300,
            delay: 200,
            easing: 'easeOutExpo',
        })
            .add({
                targets: document.querySelectorAll('.textSectionWorks')[n],
                translateX: 0,
                opacity:  1

            }, 100)
            .add({
                targets: document.querySelectorAll('.imageSection')[n],
                translateX:  0,
                opacity: 1
            }, 150)
            .add({
                targets: document.querySelector('#closeWorks'),
                translateY: 0,
            }, 100),

        newWorksOut: anime.timeline({
            autoplay: false,
            duration: 1300,
            delay: 20,
            easing: 'easeOutExpo',
        })
            .add({
                targets: document.querySelectorAll('.textSectionWorks')[n],
                translateX: 120,
                opacity: 0

            }, 100)
            .add({
                targets: document.querySelectorAll('.imageSection')[n],
                translateX: -120,
                opacity: 0
            }, 150)
            .add({
                targets: document.querySelector('#closeWorks'),
                translateY: -250,
            }, 100),


        workContentOut: anime.timeline({
            autoplay: false,
            duration: 1300,
            delay: 100,
            easing: 'easeOutExpo',
        })
            .add({
                targets: document.querySelectorAll('#textSection')[1],
                translateX: -550,
                scale:  0.7

            })

            .add({
                targets: document.querySelector('#imgSectionTwo'),
                translateX: 700,
                scale:  0.7
            }, 0),


        workContentIn: anime.timeline({
            autoplay: false,
            duration: 1800,
            delay: 200,
            easing: 'easeOutExpo',
        })
            .add({
                targets: document.querySelectorAll('#textSection')[1],
                translateX: 40,
                scale: 1

            })

            .add({
                targets: document.querySelector('#imgSectionTwo'),
                translateX: 20,
                scale: 1
            }, 0)
    }
    return listAnimationWorks
}

document.getElementById('moreWorks').addEventListener('click', async () => {



    var finalObject = await animationsWorks();
    document.getElementById('workPage').classList.remove('display')
    finalObject.workContentOut.play();
    finalObject.newWorks.play();
    document.querySelector('#opacity').style = 'opacity: 0'
    setTimeout(() => {
        document.getElementById('principalPage').classList.add('display');

    }, 400);

}, {passive: true})

document.getElementById('closeWorks').addEventListener('click', async () => {


    var finalObject = await animationsWorks();
    document.getElementById('principalPage').classList.remove('display');
    finalObject.workContentIn.play();
    finalObject.newWorksOut.play();
    document.querySelector('#opacity').style = 'opacity: 1'
    setTimeout(() => {

        document.getElementById('workPage').classList.add('display')

    }, 400);
}, {passive: true})

var state = false;

document.getElementById('iconMenu').addEventListener('click', () => {
    if (state === false) {
        document.querySelector('#iconMenu').classList.add('close')
        state = !state
        document.querySelector('nav').style.transform = 'translate3d(0,0, 0)'
    } else {
        document.querySelector('#iconMenu').classList.remove('close')
        state = !state
        document.querySelector('nav').style.transform = 'translate3d(0,-100%, 0)'
    }
}, {passive: true})