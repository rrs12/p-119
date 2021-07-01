function preload(){

}

function setup(){
canvas= createCanvas(300,300)
video= createCapture(VIDEO)
video.hide()
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/oZuDjwOlo/model.json",modelLoaded)

}

function draw(){
image(video,0,0,300,300)
classifier.classify(video, gotResult)

}
function gotResult(error,results){
if (error){
    console.error(error)
}else{
    document.getElementById("result_object").innerHTML=results[0].label
    document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3)*100+"%"
}
}

function modelLoaded(){
    console.log("Model Loaded!")
}