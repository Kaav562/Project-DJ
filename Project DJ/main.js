song1 = "";
song2 = "";
leftWristX = "0";
leftWristY = "0";
rigthWristX = "0";
rightWristY = "0";

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup()
{
    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initiated!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {console.log(results)};
    leftWristX = results[0].pose.leftwrist.x;
    leftWristY = results[0].pose.leftwrist.y;
    rightWristX = results[0].pose.rightwrist.x;
    rightWristY = results[0].pose.rightwrist.y;
}
function draw()
{
    image(video, 0, 0, 500, 400);
}
function play()
{
    song.play();
}
