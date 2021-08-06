const slider = document.querySelector('.slider');
const slider_left = document.querySelector('.slider__left');
const slider_right = document.querySelector('.slider__right');
const button_down = document.querySelector('.slider__button_down');
const button_up = document.querySelector('.slider__button_up');
const slider_length = slider_left.querySelectorAll('div').length;
const slider_length1 = slider_right.querySelectorAll('div').length;


let activeSlideIndex = 0


slider_left.style.top = `-${(slider_length - 1) * 100}vh`;

button_up.addEventListener('click', () => changeSlide('up'))
button_down.addEventListener('click', () => changeSlide('down'))
slider.addEventListener('wheel', zoom);


function zoom (event){  
    if ((event.deltaY / -100) > 0 ){
        changeSlide('up')
    }else{
        changeSlide('down')
    }
}

const changeSlide = (direction) => {
    const sliderHeight = slider.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slider_length - 1) {
            activeSlideIndex = 0
        }
    }else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slider_length - 1
        }
    }

    slider_left.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
    slider_right.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
}



// console.log(zoom);
