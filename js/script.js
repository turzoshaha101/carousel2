$('#one').owlCarousel({
    loop:true,
    rtl:false,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    margin:10,
    nav:true,
    items:3,
    autoWidth:true,
    
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1024:{
            items:6,
            nav:true,
            loop:true,
        },
        1440:{
            items:3,
            nav:true,
            loop:true,
        },
    }
})



$('#two').owlCarousel({
    loop:true,
    rtl:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    margin:10,
    nav:true,
    items:3,
    autoWidth:true,
    
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1024:{
            items:6,
            nav:true,
            loop:true,
        },
        1440:{
            items:3,
            nav:true,
            loop:true,
        },
    }
})