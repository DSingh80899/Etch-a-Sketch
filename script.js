//selecting the body element
const body = document.querySelector('body')

//creating a container element and appending it to the body
const container = document.createElement('div')
container.classList.add('container')
body.appendChild(container)


function resetFunction(...args){
    let size=0
    if(args.length==0)
        while(size <2 || size>100){
        size = prompt("how big you want the new square to be [2-100]?")
        }
    else
        size = args[0]

    container.innerHTML = ''
    let squareSize = 960/size
    for(let i=0;i < size*size;i++){
        let square = document.createElement('div')
        square.classList.add('square')
        square.style.cssText= 'width:'+squareSize+'px;height:'+squareSize+'px'
        container.appendChild(square)
    }

    //creating the effect that makes squares change color
    const squares = document.querySelectorAll('.square')
    squares.forEach(square => {
        square.addEventListener('pointerover',() => square.classList.add('hovered'))
    })
}

//intial grid
resetFunction(64)


//creating the reset button
const resetButton= document.createElement('button')
resetButton.classList.add('reset')
resetButton.innerText= 'Start Again!'
body.insertBefore(resetButton,body.firstChild)

//adding event listner to the button
resetButton.addEventListener('click', ()=> resetFunction())
