console.log('event');
//my gorcery lists
const lists = [
    {name: 'Garlic', type: 'Condiment' },
    // {name: 'Salmon', type: 'Lean'},
    // {name: 'Green Beans', type: 'Green'}
]

//create element
//create a header
// 


// //create element
// document.getElementById('demo').innerHTML = <button type= "button">Click Me!</button>
const $nameInput = $('[name="name"]')
const $typeInput = $("[name='type']")
const $button = $('button')
//console.log($nameInput, $amountInput, $button);

//create a function
const renderLists = () => {
    // const $h1 = $('<h1>');
    // $('main').append('$h1').text('My Gorcery Lists').css(
    // 'text-align', 'center')
    //  .css('color' , 'black')
    $('main').empty()
    for (list of lists) {
        //creating element
        
        const $div = $('<div>')
        const $h2 = $('<h2>').text(list.name)
        const $h3 = $('<h3>').text(list.type)

        //assemble elements
        $('main').append($div)
        $div.append($h2).append($h3)

    }
}   
$button.on('click', (event)=> {
    //add list to the array
    lists.push({name: $nameInput.val(), type: $typeInput.val()})

    //blank the form
    $nameInput.text('')
    $typeInput.text('')
    renderLists()
})
renderLists()





