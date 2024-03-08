function Menu(){
    const darkModebtn = document.querySelectorAll('.menu-btn')
        .forEach(menu_btn=>{
            menu_btn.addEventListener('click', ()=>{
                let sideBar = document.querySelector('.mobile-sidebar-menu').classList.toggle('show-menu')
            })
        })
}


// const scrolling_on_animate = ()=>{
//     let document_sections = document.querySelectorAll('.document_section');
    
//     const observer = new IntersectionObserver(entries=>{
//        entries.forEach(entry=>{
//         entry = (entry.isIntersecting)?entry.target.classList.add('show')
//         :entry.target.classList.remove('show');
//        })
//     })

//     observer.observe(document_sections)
// }
// scrolling_on_animate()

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        // If the target element is in view
        if (entry.isIntersecting) {
            // Add a class to the element to trigger the CSS animation
            entry.target.classList.add('in-view', 'animate__jello');
        } else {
            // Remove the 'in-view' class to reset the animation when out of view
            entry.target.classList.remove('in-view', 'animate__jello');
        }
    });
}

function handleIntersection2(entries, observer) {
    entries.forEach(entry => {
        // If the target element is in view
        if (entry.isIntersecting) {
            // Check if the 'animate__backInRight' class is already applied
            if (!entry.target.classList.contains('animate__backInRight')) {
                // Add a class to the element to trigger the CSS animation
                entry.target.classList.add('in-view', 'animate__backInRight');
            }
        } else {
            // Remove the 'in-view' class to reset the animation when out of view
			entry.target.classList.remove('in-view', 'animate__backInRight');
        }
    });
}

function handleIntersection3(entries, observer) {
    entries.forEach(entry => {
        // If the target element is in view
        if (entry.isIntersecting) {
            // Check if the 'animate__backInRight' class is already applied
            if (!entry.target.classList.contains('animate__backInLeft')) {
                // Add a class to the element to trigger the CSS animation
                entry.target.classList.add('in-view', 'animate__backInLeft');
            }
        } else {
            // Remove the 'in-view' class to reset the animation when out of view
			entry.target.classList.remove('in-view', 'animate__backInLeft');
        }
    });
}

// Create Intersection Observer instances
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
const observers = new IntersectionObserver(handleIntersection2, { threshold: 0.5 });
const observerss = new IntersectionObserver(handleIntersection3, { threshold: 0.5 });

// Target elements to be observed
const targetElement = document.querySelector('.about-us-big-text');
const targetElement2 = document.querySelector('.tumelo');
const targetElement3 = document.querySelector('.mashego');

// Start observing the target elements
observer.observe(targetElement);
observers.observe(targetElement2);
observerss.observe(targetElement3);




let quick_information_btn = document.querySelectorAll('.quick-information-btns')
quick_information_btn.forEach(info_btn=>{
    info_btn.addEventListener('click', ()=>{
        let quickInfo = document.querySelector('.quick-information');
        quickInfo.classList.toggle('show-info')
    })
})