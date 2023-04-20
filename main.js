//https://teachablemachine.withgoogle.com/models/AqTorlUFt/


function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/AqTorlUFt/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);

        document.getElementById("resultadonome").innerHTML = 'Posso ouvir - ' + results[0].label;
        document.getElementById("resultadoprecisao").innerHTML = 'Precisão - ' + (results[0].confidence * 100).toFixed(2) + "% ";

        palmas = document.getElementById('palma')
        chocalho = document.getElementById('chocalho')
        arranhao = document.getElementById('arranhao')
        papel = document.getElementById('papel')

        if (results[0].label == 'Palma') {
        palmas.style.filter = "grayscale(0)";
        chocalho.style.filter = "grayscale(1)"; 
        arranhao.style.filter = "grayscale(1)";   
        papel.style.filter = "grayscale(1)";    
        } else if (results[0].label == "Chocalho") {
            palmas.style.filter = "grayscale(1)";
        chocalho.style.filter = "grayscale(0)"; 
        arranhao.style.filter = "grayscale(1)";   
        papel.style.filter = "grayscale(1)"; 
        } else if (results[0].label == "Arranho") {
            palmas.style.filter = "grayscale(1)";
        chocalho.style.filter = "grayscale(1)"; 
        arranhao.style.filter = "grayscale(0)";   
        papel.style.filter = "grayscale(1)"; 
        } else if (results[0].label == "Papel") {
            palmas.style.filter = "grayscale(1)";
        chocalho.style.filter = "grayscale(1)"; 
        arranhao.style.filter = "grayscale(1)";   
        papel.style.filter = "grayscale(0)"; 
        }
    }
}
