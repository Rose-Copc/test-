function setup() {
    video = creatCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(550,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Intitialized');
}

function draw() {
    background('#800000');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}