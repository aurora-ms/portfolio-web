import anime from './anime.es.js';
import Swiper from './swiper-bundle.esm.browser.min.js'


// import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'



var imagesAnimations = {
    img1: () => {
        anime.timeline({
            duration: 1050,
            delay: 600,
            easing: 'easeOutExpo',
        })
            .add({
                targets: '#sectOneImages img:first-child',
                translateX: ['52vw', 0],
                scale: [0.5, 1]
            })
            .add({
                targets: '#sectOneImages img:last-child',
                translateX: ['38vw', 0],
                scale: [0.5, 1]
            }, 200)

    },
    img2: () => {
        anime.timeline({
            duration: 2000,
            delay: 600,
            easing: 'easeOutExpo',
        })
            .add({
                targets: '#imgTwoPrincipal',
                translateY: ['-95vh', 0],
            })
            .add({
                targets: '#imgTwoParts img:nth-child(1)',
                translateY: ['-80vh', 0],
            }, 20)
            .add({
                targets: '#imgTwoParts img:nth-child(2)',
                translateY: ['-80vh', 0],
            }, 80)
            .add({
                targets: '#imgTwoParts img:nth-child(3)',
                translateY: ['-80vh', 0],
            }, 140)
            .add({
                targets: '#imgTwoParts img:nth-child(4)',
                translateY: ['-80vh', 0],
            }, 180)
            .add({
                targets: '#imgTwoParts img:nth-child(5)',
                translateY: ['-80vh', 0],
            }, 50)
    },
    img3: () => {
        anime.timeline({
            delay: 600,
            easing: 'linear'
        })
            .add({
                targets: '#sectThreeImage',
                duration: 2000,
                opacity: [0, 1]
            })
    },
    img4: () => {
        anime.timeline({
            delay: 600,
            duration: 800,
            easing: 'linear'
        })
            .add({
                targets: '.contactLinks',
                opacity: [0, 1]
            }, '+450')
            .add({
                targets: '#sectFourImage  img:first-child',
                opacity: [0, 1]
            }, '+500')
            .add({
                targets: '#sectFourImage  img:last-child',
                opacity: [0, 1]
            }, '+400')
    },
}


var textContent = {
    normal: () => {
        var n = swiperGeneral.activeIndex
        anime.timeline({
            duration: 750,
            delay: 300,
            easing: 'easeOutExpo',
        })
            .add({
                targets: document.querySelectorAll('.textContent h2')[n],
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
                targets: document.querySelectorAll(' .textContent h1')[n],
                translateX: [-1050, 0]

            }, 300)
            .add({
                targets: document.querySelectorAll(' .textContent h3')[n - 1],
                translateX: [-1050, 0]

            }, 400)
            .add({
                targets: document.querySelectorAll(' .buttonContent')[n - 1],
                translateX: [-1050, 0]

            }, 500)

    },
    out: () => {
        anime.timeline({
            duration: 1300,
            delay: 100,
            easing: 'easeOutExpo',
        })
            .add({
                targets: document.querySelectorAll('.textContent')[1],
                translateX: -800,
                scale: 0.7

            })

            .add({
                targets: document.querySelector('#sectTwoImages'),
                translateX: 800,
                scale: 0.7
            }, 0)
    },
    in: () => {
        anime.timeline({
            duration: 1800,
            delay: 200,
            easing: 'easeOutExpo',
        })
            .add({
                targets: document.querySelectorAll('.textContent')[1],
                translateX: 40,
                scale: 1

            })

            .add({
                targets: document.querySelector('#sectTwoImages'),
                translateX: 20,
                scale: 1
            }, 0)
    }
}

var newWorks = {
    in: () => {
        var n = swiperWork.activeIndex
        anime.timeline({
            duration: 1300,
            delay: 200,
            easing: 'easeOutExpo',
        })
            .add({
                targets: document.querySelectorAll('.textSectionWorks')[n],
                translateX: ['50vw', 0],
                opacity: 1

            }, 100)
            .add({
                targets: document.querySelectorAll('.imageSection')[n],
                translateX: ['-50vw', 0],
                opacity: 1
            }, 150)
            .add({
                targets: document.querySelector('#closeWorks'),
                translateY: ['-38vh', 0],
            }, 100)
    },
    out: () => {
        var n = swiperWork.activeIndex
        anime.timeline({
            duration: 1300,
            delay: 20,
            easing: 'easeOutExpo',
        })
            .add({
                targets: document.querySelectorAll('.textSectionWorks')[n],
                translateX: [0, '50vw'],
                opacity: 0

            }, 100)
            .add({
                targets: document.querySelectorAll('.imageSection')[n],
                translateX: [0, '-50vw'],
                opacity: 0
            }, 150)
            .add({
                targets: document.querySelector('#closeWorks'),
                translateY: [0, '-38vh'],
            }, 100)
    }
}

async function animationSliders() {
    await visibility()

    textContent.normal()
    switch (swiperGeneral.activeIndex) {
        case 0:
            imagesAnimations.img1()
            document.getElementById('bulletsBottom').style = 'opacity: 0'
            document.querySelector('#scrollIcon').style = 'transform: translateY(0px)'
            break;
        case 1:
            imagesAnimations.img2()
            bullets()
            break
        case 2:
            imagesAnimations.img3()
            bullets()
            break
        case 3:
            imagesAnimations.img4()
            bullets()
            break
        default:
            break;
    }
}

function visibility() {
    document.getElementById("curtain").style.top = '-118vh';
    return
}


window.addEventListener("load", animationSliders);



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


var swiperWork = new Swiper('#workPage', {
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

swiperGeneral.on('slideChangeTransitionStart', animationSliders);


document.body.addEventListener('mousemove', (e) => {
    const img1 = document.querySelectorAll('#backgroundImages > div')[0];
    const img2 = document.querySelectorAll('#backgroundImages > div')[1];

    var cordX = e.clientX;
    var cordY = e.clientY;

    var finalPosi1 = {
        posiY: -cordY * 1 / 60,
        posiX: -cordX * 1 / 60
    }

    var finalPosi2 = {
        posiY: -cordY * -1 / 60,
        posiX: -cordX * 1 / 60
    }

    img1.style.top = finalPosi1.posiY + 'px';
    img1.style.right = finalPosi1.posiX + 'px';

    img2.style.top = finalPosi2.posiY + 'px';
    img2.style.left = finalPosi2.posiX + 'px';


}, { passive: true })






document.getElementById('moreWorks').addEventListener('click', () => {

    textContent.out()
    newWorks.in()

    document.getElementById('workPage').classList.remove('display')
    document.getElementById('bulletsBottom').style = 'opacity: 0'
    setTimeout(() => {
        document.getElementById('principalPage').classList.add('display');

    }, 400);

})


document.getElementById('closeWorks').addEventListener('click', () => {

    textContent.in()
    newWorks.out()

    document.getElementById('principalPage').classList.remove('display');
    document.getElementById('bulletsBottom').style = 'opacity: 1'
    setTimeout(() => {

        document.getElementById('workPage').classList.add('display')

    }, 400);
})

function bullets() {
    document.querySelector('#scrollIcon').style = 'transform: translateY(200px)'
    document.getElementById('bulletsBottom').style = 'opacity: 1'
}

document.getElementById('moreAbout').addEventListener('click', () => {

    document.getElementById('curtain').style.top='0'
    setTimeout(() => {
        window.location.pathname = './about'
    }, 1000);



})










