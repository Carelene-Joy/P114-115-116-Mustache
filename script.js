 mx = 0
 my = 0

function preload () {
moustache = loadImage("m.png")

}
function setup () {
canvas = createCanvas(300,300)
canvas.position(540,200)
video = createCapture(VIDEO)
video.size(300,300)
video.hide()
posenet= ml5.poseNet(video, modelloaded)
posenet.on("pose", gotposes) // start identifying the pose
}

function draw () {
image(video,0,0,300,300)
image(moustache,mx,my,60,35)

}

function modelloaded() {
    console.log("Pose Net is Initialized")
}

function takesnapshot () {
    save("moustachefilter.png")
}

function gotposes (result) {
if (result.length>0) {
    console.log(result)
    mx = result[0].pose.nose.x-30
    my = result[0].pose.nose.y

}
}