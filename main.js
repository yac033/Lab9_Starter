window.addEventListener('DOMContentLoaded', init);
function init() {
    const buttons = document.getElementById("error-btns").children
    buttons[0].addEventListener('click', () => {
        console.log("Console Log Demo")
    })
    buttons[1].addEventListener('click', () => {
        console.error("Console Error Demo")
    })
    buttons[2].addEventListener('click', () => {
        console.count("Count Button: ")
    })
    buttons[3].addEventListener('click', () => {
        console.warn("Console Warn Button")
    })
    buttons[4].addEventListener('click', () => {
        const num1 = 2
        const num2 = 1
        console.assert(num1 == num2, `number: ${num1} does not equal to ${num2}`)

    })
    buttons[5].addEventListener('click', () => {
        console.clear("Console was cleared")
    })
    buttons[6].addEventListener('click', () => {
        console.dir(buttons[6])
    })
    buttons[7].addEventListener('click', () => {
        console.dirxml(buttons[7])
    })
    buttons[8].addEventListener('click', () => {
        console.group("console.group")
    })
    buttons[9].addEventListener('click', () => {
        console.groupEnd()
    })
    buttons[10].addEventListener('click', () => {
        const num = [110,130,112]
        console.table([{name:"Software Enginner",num:110},{name:"Programming Language",num:130},{name:"Advanced Software Enginner",num:112}])
    })
    buttons[11].addEventListener('click', () => {
        console.time("Timer Button: ")
    })
    buttons[12].addEventListener('click', () => {
        console.timeEnd("Timer Button: ")
    })
    buttons[13].addEventListener('click', () => {
        console.trace(buttons[13]);
    })
    buttons[14].addEventListener('click', () => {
        try{
            const sha = buttons[14].getAttribute('showdow')
            sha.codePointAt()
        }catch(err){
            console.log("big problem broke out")
            console.error(err)
        }
    })
  }

