// const {
//   titleBacurau_start,
//   subTitleBacurau_start,
//   titleBacurau_content,
//   topicsBacurau_content,
//   titleTypography_start,
//   titleTypography_content
// } = {
//   titleBacurau_start: document.querySelector('.main-section__title--biggest'),
//   subTitleBacurau_start: document.querySelector('.main-section__subTitle'),
//   titleBacurau_content: document.querySelector('.main-section__title--bacurauTransition'),
//   topicsBacurau_content: document.querySelectorAll('.main-section-topics__topic'),
//   titleTypography_start: document.querySelector('.main-section__titleTypography'),
//   titleTypography_content: document.querySelector('.main-section--content__titleTypography'),
// }

// let time = 1000;


// window.onload = function() {
//   showAndHidden(titleBacurau_start, '0', '1');
//   showAndHidden(subTitleBacurau_start, '0', '1');

//   window.addEventListener('scroll', function(e) {
//     let scrollY = window.scrollY;
    
//     if (scrollY < 200) {
//       showAndHidden(titleBacurau_start, '0', '1');
//       showAndHidden( subTitleBacurau_start, '0', '1');
//     } else if (scrollY > 300) {
//       // showAndHidden(titleBacurau_start, '-30vw', '0');
//       // showAndHidden(subTitleBacurau_start, '-30vw', '0');
//       showAndHidden(titleBacurau_content, '0', '1');
      
//       for (let el of topicsBacurau_content) {
//         setTimeout(() => {
//           showAndHidden(el, '0', '1');
//         }, time);
//         time += 1000;
//       }
//       time = 1000;

//     }
//     if (scrollY > 1000) {
//       showAndHidden(titleTypography_start, '0', '1');
//     } else {
//       showAndHidden(titleTypography_start, '0', '1');

//     }


//   });

//   window.addEventListener('click', function(e) {
//     console.log(window.scrollY);
//   });
// }
// function showAndHidden(element, translate, opacity) {
//   element.style.transform = `translateX(${translate})`;
//   element.style.opacity = `${opacity}`;
// }