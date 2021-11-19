
document.body.addEventListener('keypress', function (event) {
    const key = event.key;
    const code = event.keyCode;
    if(key != 'Enter') {
        document.calc.txt.value += key
    }
    if(key == 'Enter') {

        document.calc.txt.value = eval(calc.txt.value)

    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.key1').addEventListener('click', function() {
        
        document.calc.txt.value += '1'

    })
    document.querySelector('.key2').addEventListener('click', function() {
        
        document.calc.txt.value += '2'

    })
    document.querySelector('.key3').addEventListener('click', function() {
        
        document.calc.txt.value += '3'

    })
    document.querySelector('.key4').addEventListener('click', function() {
        
        document.calc.txt.value += '4'

    })
    document.querySelector('.key5').addEventListener('click', function() {
        
        document.calc.txt.value += '5'

    })
    document.querySelector('.key6').addEventListener('click', function() {
        
        document.calc.txt.value += '6'

    })
    document.querySelector('.key7').addEventListener('click', function() {
        
        document.calc.txt.value += '7'

    })
    document.querySelector('.key8').addEventListener('click', function() {
        
        document.calc.txt.value += '8'

    })
    document.querySelector('.key9').addEventListener('click', function() {
        
        document.calc.txt.value += '9'

    })
    document.querySelector('.key0').addEventListener('click', function() {
        
        document.calc.txt.value += '0'

    })
    document.querySelector('.key00').addEventListener('click', function() {
        
        document.calc.txt.value += '00'

    })
    document.querySelector('.plus').addEventListener('click', function() {
        
        document.calc.txt.value += '+'

    })
    document.querySelector('.keyDiv').addEventListener('click', function() {
        
        document.calc.txt.value += '/'

    })
    document.querySelector('.keySub').addEventListener('click', function() {
        
        document.calc.txt.value += '-'

    })
    document.querySelector('.keyMult').addEventListener('click', function() {
        
        document.calc.txt.value += '*'

    })
    document.querySelector('.keyDot').addEventListener('click', function() {
        
        document.calc.txt.value += '.'

    })
    document.querySelector('.clear').addEventListener('click', function() {
        
        document.calc.txt.value = ''

    })
    document.querySelector('.equal').addEventListener('click', function() {
        
        document.calc.txt.value = eval(calc.txt.value)

    })
})

