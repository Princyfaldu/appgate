// document.addEventListener('DOMContentLoaded', () => {
//     const accordionButtons = document.querySelectorAll('.accordion-button');
//     const accordionItems = document.querySelectorAll('.accordion-collapse');

//     // Open the first item by default
//     accordionItems[0].classList.add('show');
//     accordionButtons[0].classList.add('active');

//     accordionButtons.forEach((button, index) => {
//         button.addEventListener('click', () => {
//             const collapseContent = accordionItems[index];

//             // Close all other items
//             accordionItems.forEach((item, i) => {
//                 if (item !== collapseContent) {
//                     item.classList.remove('show');
//                     accordionButtons[i].classList.remove('active');
//                 }
//             });

//             // Toggle the selected item
//             collapseContent.classList.toggle('show');
//             button.classList.toggle('active');
//         });
//     });
// });
// $(document).ready(function(){
//     $('.gallery').slick({
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         dots:false,
//         infinite: true,
//         autoplay:true,
//         speed: 1000,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     dots:true,
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     dots:true
//                 }
//             }
//         ]
//     });
// });
$(document).ready(function(){
    var totalSlides = $('.gallery .single-materials').length;

    $('.gallery').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay:true,
        speed: 1000,
        dots: totalSlides > 4,  
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });
});

$(document).ready(function () {
    // Open the first accordion item by default
    $(".accordion .accordion-item:first-child .accordion-collapse").slideDown();
    $(".accordion .accordion-item:first-child .accordion-button").addClass("active");

    // Add click event to accordion buttons
    $(".accordion-button").click(function () {
        // Check if the clicked accordion item is already active
        if ($(this).hasClass("active")) {
            // Close it if it's already active
            $(this).removeClass("active");
            $(this).next(".accordion-collapse").slideUp();
        } else {
            // Remove active class and slide up other open items
            $(".accordion-button").removeClass("active");
            $(".accordion-collapse").slideUp();

            // Add active class to the clicked button and slide down its content
            $(this).addClass("active");
            $(this).next(".accordion-collapse").slideDown();
        }
    });
});



















function openFancyBox(src) {
    document.getElementById("fancyboxImage").src = src;
    document.getElementById("fancybox").classList.add("active");
}

function closeFancyBox() {
    document.getElementById("fancybox").classList.remove("active");
}