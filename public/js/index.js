import anime from './anime.es.js';
import Swiper from './swiper-bundle.esm.browser.min.js'

var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    speed: 2000,
    preventInteractionOnTransition: true,
    hashNavigation: true,
    replaceState: true,
    watchState: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletElement: 'a',
        renderBullet: function (index, className) {
            var sections = document.querySelectorAll('#fullpage>section');
            var finalHash = sections[index].getAttribute('data-hash')

            return '<a href ="' + finalHash + '" class="' + className + '"></a>';
        },

    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

});



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

    document.querySelector('#one div:first-child').style.top = finalPosi2.posiY / 2 + 'px';
    document.querySelector('#one div:first-child').style.left = -finalPosi2.posiX / 2 + 'px';


    document.querySelector('#one div:last-child').style.top = -finalPosi2.posiY / 4 + 'px';
    document.querySelector('#one div:last-child').style.left = finalPosi2.posiX / 4 + 'px';
})


window.addEventListener("load", async () => {
    const curtain = document.getElementById("curtain").style.height = '0%'

    var finalObject = await animations()

    finalObject.mainContent.play();
    finalObject.img1.play();

    if (location.hash !== '') {
        window.location.href = './'
    }

});


swiper
    .on('slideChangeTransitionStart', async function () {
        var finalObject = await animations()
        finalObject.mainContent.play();

        switch (swiper.activeIndex) {
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

document.getElementById('moreWorks').addEventListener('click', async()=>{
    var finalObject = await animations();
    finalObject.workContentOut.play();
})



function animations() {
    var n = swiper.activeIndex
    const listAnimation = {
        mainContent: anime.timeline({
            autoplay: false,
            duration: 1400,
            delay: 600,
            easing: 'easeOutElastic(1, .8)'
        })
            .add({
                targets: document.querySelectorAll('.mainContent h2')[n],
                translateX: [-1050, 0],

            })
            .add({
                targets: document.querySelectorAll('.horLines div:first-child')[n],
                translateX: [-1050, 0],

            }, '-=1850')
            .add({
                targets: document.querySelectorAll('.horLines div:last-child')[n],
                translateX: [-1050, 0]

            }, '-=1850')
            .add({
                targets: document.querySelectorAll(' .mainContent h3')[n],
                translateX: [-1050, 0]

            }, '-=1750'),

        buttons: anime({
            targets: document.querySelectorAll(' .button button')[n - 1],
            autoplay: false,
            duration: 1400,
            delay: 600,
            easing: 'easeOutElastic(1, .8)',
            translateX: [-400, 0]
        }),

        img1: anime.timeline({
            autoplay: false,
            duration: 2000,
            delay: 600,

            easing: 'easeOutElastic(1, .8)'
        })
            .add({
                targets: document.querySelectorAll('#one div:first-child')[n],
                translateX: ['54%', 0],
                scale: [0.5, 1]
            })
            .add({
                targets: document.querySelectorAll('#one div:last-child')[n],
                translateX: ['54%', 0],
                scale: [0.5, 1]
            }, '-400'),
        img2: anime.timeline({
            autoplay: false,
            duration: 2000,
            delay: 1200,
            easing: 'easeOutElastic(1, .8)'
        })
            .add({
                targets: document.querySelectorAll('#principalImage')[n - 1],
                translateY: ['-76%', 0],
            })
            .add({
                targets: document.querySelectorAll('#singleParts div:nth-child(1)')[n - 1],
                translateY: ['-75%', 0],
            }, '+200')
            .add({
                targets: document.querySelectorAll('#singleParts div:nth-child(2)')[n - 1],
                translateY: ['-75%', 0],
            }, '+1000')
            .add({
                targets: document.querySelectorAll('#singleParts div:nth-child(3)')[n - 1],
                translateY: ['-75%', 0],
            }, '+600')
            .add({
                targets: document.querySelectorAll('#singleParts div:nth-child(4)')[n - 1],
                translateY: ['-75%', 0],
            }, '+400')
            .add({
                targets: document.querySelectorAll('#singleParts div:nth-child(5)')[n - 1],
                translateY: ['-75%', 0],
            }, '+590'),

        img3: anime.timeline({
            autoplay: false,
            delay: 1200,
            easing: 'linear'
        })
            .add({
                targets: document.querySelectorAll('#three div')[n - 2],
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
                targets: document.querySelectorAll('#fullpage .iconLinks ')[n - 3],
                opacity: [0, 1]
            }, '+450')
            .add({
                targets: document.querySelectorAll('#four div:first-child')[n - 3],
                opacity: [0, 1]
            }, '+500')
            .add({
                targets: document.querySelectorAll('#four div:last-child')[n - 3],
                opacity: [0, 1]
            }, '+400'),

        workContentOut: anime.timeline({
            autoplay: false,
            duration: 2800,
            easing: 'easeOutElastic(1, .8)'
        })
            .add({
                targets: document.querySelector('#sectTwo h2'),
                translateX: [ 0, -1050],

            })
            .add({
                targets: document.querySelector('#sectTwo .horLines div:first-child'),
                translateX: [ 0, -1050],

            }, '-=2800')
            .add({
                targets: document.querySelector('#sectTwo .horLines div:last-child'),
                translateX: [ 0, -1050],

            }, '-=2700')
            .add({
                targets: document.querySelector('#sectTwo>#two'),
                translateX: [ 0, 950],


            }, '-=2700')
            .add({
                targets: document.querySelector(' #sectTwo h3'),
                translateX: [ 0, -1050],

            }, '-=2600')
            .add({
                targets: document.querySelector(' #sectTwo button'),
                translateX: [ 0, -2050],

            }, '-=2800')
    }

    return listAnimation
}



