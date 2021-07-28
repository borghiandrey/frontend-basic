const carouselItem1 = document.querySelector('#carouselItem1');
const carouselItem2 = document.querySelector('#carouselItem2');
const carouselItem3 = document.querySelector('#carouselItem3');
const carouselItem4 = document.querySelector('#carouselItem4');

const indicator1 = document.querySelector('#indicator1');
const indicator2 = document.querySelector('#indicator2');
const indicator3 = document.querySelector('#indicator3');
const indicator4 = document.querySelector('#indicator4');

const btnLeft1 = document.querySelector('#btnLeft1');
const btnRight1 = document.querySelector('#btnRight1');

const btnLeft2 = document.querySelector('#btnLeft2');
const btnRight2 = document.querySelector('#btnRight2');

const btnLeft3 = document.querySelector('#btnLeft3');
const btnRight3 = document.querySelector('#btnRight3');

const btnLeft4 = document.querySelector('#btnLeft4');
const btnRight4 = document.querySelector('#btnRight4');

/* ======================== ITEM 1 ======================= */

btnLeft1.addEventListener('click', function(){
  console.log('left button clicked');

  carouselItem1.classList.remove('active');
  carouselItem4.classList.add('active');

  indicator1.classList.remove('iActive');
  indicator4.classList.add('iActive');
})

btnRight1.addEventListener('click', function(){
  console.log('right button clicked');
  
  carouselItem1.classList.remove('active');
  carouselItem2.classList.add('active');
  
  indicator1.classList.remove('iActive');
  indicator2.classList.add('iActive');
})

/* ======================== ITEM 2 ======================= */

btnLeft2.addEventListener('click', function(){
  console.log('left button clicked');

  carouselItem2.classList.remove('active');
  carouselItem1.classList.add('active');

  indicator2.classList.remove('iActive');
  indicator1.classList.add('iActive');
})

btnRight2.addEventListener('click', function(){
  console.log('right button clicked');
  
  carouselItem2.classList.remove('active');
  carouselItem3.classList.add('active');
  
  indicator2.classList.remove('iActive');
  indicator3.classList.add('iActive');
})

/* ======================== ITEM 3 ======================= */

btnLeft3.addEventListener('click', function(){
  console.log('left button clicked');

  carouselItem3.classList.remove('active');
  carouselItem2.classList.add('active');

  indicator3.classList.remove('iActive');
  indicator2.classList.add('iActive');
})

btnRight3.addEventListener('click', function(){
  console.log('right button clicked');
  
  carouselItem3.classList.remove('active');
  carouselItem4.classList.add('active');
  
  indicator3.classList.remove('iActive');
  indicator4.classList.add('iActive');
})

/* ======================== ITEM 4 ======================= */

btnLeft4.addEventListener('click', function(){
  console.log('left button clicked');

  carouselItem4.classList.remove('active');
  carouselItem3.classList.add('active');

  indicator4.classList.remove('iActive');
  indicator3.classList.add('iActive');
})

btnRight4.addEventListener('click', function(){
  console.log('right button clicked');
  
  carouselItem4.classList.remove('active');
  carouselItem1.classList.add('active');
  
  indicator4.classList.remove('iActive');
  indicator1.classList.add('iActive');
})