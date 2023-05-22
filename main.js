
img = "";
objects = [];
modelStatus = "";

function preload()
{
    img = loadImage('MC.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("S").innerHTML = "Status: Detectando objetos";
}

function modelLoaded()
{
    console.log("Modelo Carregado!");
    modelStatus = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw()
{
    image(img, 0, 0, 640, 420);
}