

var state = false;

document.getElementById('menuHeader').addEventListener('click', () => {

    if (state === false) {
        document.querySelector('#menuHeader').classList.add('close')
        state = !state
        document.querySelector('nav').style.top = '0'
    } else {
        document.querySelector('#menuHeader').classList.remove('close')
        state = !state
        document.querySelector('nav').style.top = '-120%'
    }
})



    if (window.location.pathname === '/about') {
        document.getElementById('scrollIcon').classList.add('display');
        window.location.hash = ''; 
        document.getElementsByTagName('body')[0].style.overflow ='hidden'
        setTimeout(() => {
            document.getElementById('curtain').style.top='-118vh'
            document.getElementsByTagName('body')[0].style.overflow ='visible'
        }, 1000);

        document.querySelector('.return>a').style.color ='white'
          
    } else if (window.location.pathname.includes('/trabajos')) {
        document.getElementById('curtain').style.top='0'
        document.getElementsByTagName('body')[0].style.overflow ='hidden'
        setTimeout(() => {
            document.getElementById('curtain').style.top='-118vh'
            document.getElementsByTagName('body')[0].style.overflow ='visible'
        }, 500);
        document.querySelectorAll('#header a')[0].style.color ='#07182b'
        document.querySelectorAll('#header a')[1].style.color ='#07182b'

        document.querySelectorAll('#header a')[2].style.color ='#07182b'

        document.getElementById('menuHeader').classList.add('worksMenu');
        document.querySelector('#principalMenu a').style.color ='white'
    } 

 

