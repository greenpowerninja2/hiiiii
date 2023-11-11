function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4qv_c_M3I/'
    , modelReady');
}

function modelReady(){
    classifier.classify(gotResults); 
}