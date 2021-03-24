$('#button2').on('click', () => {
    console.log('Igen, most rámkattintottál')
    $('#button1').text('valamicske')

})

$('#button1').on('click', () => {
    console.log('Igen, most rámkattintottál')
    $('button').css('background-color', 'grey')

})

$('#button3').on('click', () => {
    console.log('Igen, most rámkattintottál')
    let color = 
    $('#button3').css('background-color', color)
    console.log(color)
    $( 'button' ).prop( 'disabled', true );

})














