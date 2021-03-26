let currentphoto = 0
let imagesData = [{
        photo: 'images/jellyfish.jpg',
        title: 'Aurelia aurita',
        description: 'Fascinating, elegant, and mysterious to watch in the water, take a jellyfish out of the water, and it becomes a much less fascinating blob. This is because jellyfish are about 95 percent water.'
    },
    {
        photo: 'images/jellyfish2.jpg',
        title: 'Chiropsalmus Quadrigatus',
        description: 'There are almost 200 known species of jellyfish drifting through our planet’s seas. While many of them are actually quite harmless, there are several species that have highly venomous stinging cells that can cause serious consequences for humans—such as extreme pain or even death.'
    },
    {
        photo: 'images/jellyfish3.jpg',
        title: 'Irukandji',
        description: 'Jellyfish have the ability to sting with their tentacles. While the severity of stings varies, in humans, most jellyfish stings result only in minor discomfort.'
    },
    {
        photo: 'images/jellyfish4.jpg',
        title: 'Morbakka Fenneri',
        description: 'Only about five percent of the body of a jellyfish is solid matter; the rest is water.'
    },
    {
        photo: 'images/jellyfish5.jpg',
        title: 'Alatina Alata',
        description: 'What happened here, why is this a very nice image'
    },
    {
        photo: 'images/jellyfish6.jpg',
        title: 'Lion jellyfish',
        description: 'What happened here, why is this a very nice image'
    }
];



let loadPhoto = (photoNumber) => {
    $('#jellyfish').attr('src', imagesData[photoNumber].photo);
    $('#jellyfish').css('background-image', 'url(' + imagesData[photoNumber].photo + ')');
    $('.description').text(imagesData[photoNumber].description)



    $('li').removeClass("active")
    $('li').eq(photoNumber).addClass("active")



};
// ...

$('.arrow-right').click(() => {
    if (currentphoto < 6) {
        currentphoto++;
    }
    loadPhoto(currentphoto);
})

$('.arrow').click(() => {
    if (currentphoto > 0) {
        currentphoto--;
    }
    loadPhoto(currentphoto);
})


imagesData.forEach((item, index) => {
    $('.thumbnailslist').append(`<li target="_blank" href="images/jellyfish.jpg">
    <div class="tooltip">${item.title}</div>
     <div class="thumbnails"</div>
            <img class="thumbnailsimg"  data-index="${index}" src="${item.photo}" alt="jellyfish"></li>`

    );


})
$('.thumbnailsimg').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    console.log(indexClicked)
    loadPhoto(indexClicked)

})

loadPhoto(currentphoto);