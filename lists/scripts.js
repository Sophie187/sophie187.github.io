let names = ['Tomi', 'Barni', 'Miska', 'Zsofi'];
names.forEach(function (name) {
    let li = $("<li></li>").text(name);

    if (name === 'Zsofi') {
        li.css('font-weight', 'bold')
    }
    $('ul').append(li)

});

let additionalBlock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
};

$('body').append(
    '<h1>Beillesztve JavaScripttel</h1>',
    '<p>Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!</p>'
)