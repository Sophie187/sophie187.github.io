let currentphoto = 0
let imagesData = [{
        photo: 'images/jellyfish.jpg',
        title: 'Jellyfish',
        description: 'What happened here, why is this a very nice image'
    },
    {
        photo: 'images/jellyfish2.jpg',
        title: 'Jellyfish2',
        description: 'What happened here, why is this a very nice image'
    },
    {
        photo: 'images/jellyfish3.jpg',
        title: 'Jellyfish3',
        description: 'What happened here, why is this a very nice image'
    },
    {
        photo: 'images/jellyfish4.jpg',
        title: 'Jellyfish4',
        description: 'What happened here, why is this a very nice image'
    },
    {
        photo: 'images/jellyfish5.jpg',
        title: 'Jellyfish5',
        description: 'What happened here, why is this a very nice image'
    },
    {
        photo: 'images/jellyfish6.jpg',
        title: 'Jellyfish6',
        description: 'What happened here, why is this a very nice image'
    }
];



$('#jellyfish').attr('src', imagesData[currentphoto].photo);

let loadPhoto = (photoNumber) => {
    $('#jellyfish').attr('src', imagesData[photoNumber].photo);
    $('#jellyfish').css('background-image', 'url(' + imagesData[photoNumber].photo + ')');
    // ...
}

loadPhoto(currentphoto);
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

let thumbnails = ['Jellyfish', 'Jellyfish2', 'Jellyfish3']

imagesData.forEach((item, index) => {
    $('.thumbnailslist').append(`<li target="_blank" href="images/jellyfish.jpg">
            <img class="thumbnailsimg"  data-index="${index}" src="${item.photo}" alt="jellyfish"></li>`);
})
$('.thumbnailsimg').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    console.log(indexClicked)
    loadPhoto(indexClicked)

})