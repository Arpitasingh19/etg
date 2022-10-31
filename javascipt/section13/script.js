const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.btn--close-modal');
const btnOpenModal=document.querySelectorAll('.btn--show-modal');
const tabs=document.querySelectorAll('.operations__tab');
const tabsContainer=document.querySelector('.operations__tab-container');
const tabsContent=document.querySelectorAll('.operations__content');
const nav=document.querySelector('.nav');
const OpenModal=function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

};
btnOpenModal.forEach(btn=>btn.addEventListener('click',OpenModal));

btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

document.addEventListener('keydown',function(e){
    if(e.key==='Escape' && !modal.classList.contains('hidden')){
        closeModal()
    }
});
//page navigation






//selecting element
//NOTE:
const header=document.querySelector('.header');
const allSection=document.querySelectorAll('.section');
console.log(allSection);
document.getElementById('section--1');
const allButtons=document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

const message=document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML='we use  cokied for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
header.append(message);
// header.before(message);
// header.after(message);
document
    .querySelector('.btn--close-cookie')
    .addEventListener('click',function(){
        message.parentElement.removeChild(message);
});
message.style.backgroundColor='black';
message.style.width='120%';
console.log(message.style.color);
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height=Number.parseFloat(getComputedStyle(message).height,10)+30+'px';
document.documentElement.style.setProperty('--color-primary','green');

//Attribute
const logo=document.querySelector('.nav__logo');

logo.alt='Beautiful minimalist logo';

console.log(logo.designer);
console.log(logo.getAttribute('designer'));

logo.setAttribute('company','Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link=document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data attribute
console.log(logo.dataset.versionNumber);

//classes




const btnScrollTo=document.querySelector('.btn--scroll-to');
const section1=document.querySelector('#section--1');

btnScrollTo.addEventListener('click',function(e){
    const s1coords=section1.getBoundingClientRect();
    console.log(s1coords);
    console.log(e.target.getBoundingClientRect());
    console.log('Current scroll (x/y)',window.pageXOffset,window.pageYOffset);
    console.log('height/width viewport',document.documentElement.clientHeight,document.documentElement.clientWidth);
    // window.scrollTo({
    //     left:s1coords.left+window.pageXOffset,
    //     top:s1coords.top+window.pageYOffset,
    //     behavior:'smooth',
    // });
    section1.scrollIntoView({behavior:'smooth'});
});
// document.querySelector('.nav__link').forEach(function(el){
//     el.addEventListener('click',function(e){
//         e.preventDefault();
//         console.log(id);
//         document.querySelector(id).scrollIntoView({behavior:'smooth'});
//     })

// })
document.querySelector('.nav__links').addEventListener('click',function(e){
    console.log(e.target);
    e.preventDefault();
    if(e.target.classList.contains('nav__link')){
        console.log('LINK');
        const id=e.target.getAttribute('href');
        console.log(id);
        document.querySelector(id).scrollIntoView({behavior:'smooth'})

    }
})










// const h2=document.querySelector('h1');
// const alertH1=function(e){
//     alert('addEventListener:great!you are reading the heading:D');
// };
// h2.addEventListener('mouseenter',alertH1);
// setTimeout(()=>h2.removeEventListener('mouseenter',alertH1),3000);

// h1.onmouseenter=function(e){
//     alert('onmouseenter:great! you are reading the heading:D');
// };
const randomInt=(min,max)=>
Math.floor(Math.random()*(max-min+1)+min);
const randomColor=()=>
`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
document.querySelector('.nav__link').addEventListener('click',function(e){
    this.style.backgroundColor=randomColor();
    console.log("LINK",e.target,e.currentTarget);
    console.log(e.currentTarget===this);
    e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click',function(e){
    this.style.backgroundColor=randomColor();
    console.log('CONTAINER',e.target,e.currentTarget)
});
document.querySelector('.nav').addEventListener('click',function(e){
    this.style.backgroundColor=randomColor();
    console.log('NAV',e.target,e.currentTarget)
});


const h1=document.querySelector('h1');
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color='white';
h1.lastElementChild.style.color='orangered';





tabsContainer.addEventListener('click',function(e){
    const clicked=e.target.closest('.operations__tab');
    console.log(clicked);
    if(!clicked) return;

    tabs.forEach(t=> t.classList.remove
        ('operations__tab--active'));
    tabsContent.forEach(c=>c.classList.remove('operations__content--active'));
    //Active tabs
    clicked.classList.add('operations__tab--active');

    console.log(clicked.dataset.tab);
    document.querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

nav.addEventListener('mouseover',function(e){
    if(e.target.classList.contains('nav__link')){
        const link=e.target;
        const siblings=link.closest('.nav').querySelector('.nav_link');
        const logo=link.closest('.nav').querySelector('img');
    }

})

nav.addEventListener('mouseout',function(e){
    
})


