Sandbox('gameConfig', [], function(){
    // Padrao singleton
    return {
        canvas: {
            element: document.getElementById('game')
        },
        color: {
            background: '#ffffff',
            boardBorder: '#2c3e50',
            score: '#000000',
            life: '#000000'
        },
        score: {
            fontAndSize: '12px Georgia',
            x: 10,
            y: 20
        },
        life: {
            fontAndSize: '12px Georgia',
            x: 10,
            y: 40
        },
        fruitSpeed: 15,
        boxSpeed: 5,
        keyCode: {
            LEFT:'37',
            RIGHT:'39'
        }
    }
})