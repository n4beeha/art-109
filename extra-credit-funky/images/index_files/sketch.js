
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


let image1_up, image2_over;
let notlivingaudio,snd2, bfashowaudio, halloweenaudio, makerfaireaudio, ambience, matchstrike;
let leaf1, leaf2, leaf3, leaf4;
let helpbutton, creditbutton, startbutton;
let makerfairebutton, notlivingbutton, bfashowbutton, halloweenbutton, icecreambutton, mainbutton;
let mainpage, helppage, creditpage, splashpage, bfashowpage, notlivingpage, makerfairepage;
let font1;


// var duration;
// var  slideWidth = 500;

// global manager object
var mgr;

// define your p5.play sprites that you want to use in more that 1 scene.
var pie;

function preload() {
    // sound should be loaded so its available for all places.
   notlivingaudio = loadSound("assets/not_living.mp3");
   snd2 = loadSound("assets/page_turn.mp3");
   bfashowaudio = loadSound("assets/bfashowaudio.mp3");
   halloweenaudio = loadSound("assets/halloweenaudio.mp3");
   makerfaireaudio = loadSound("assets/makerfaireaudio.mp3");
   ambience = loadSound("assets/ambience.mp3");
   //matchstrike = loadSound("assets/match.mp3");
   

   leaf1 = loadImage("assets/leaf_1.png");
   leaf2 = loadImage("assets/leaf_2.png");
   leaf3 = loadImage("assets/leaf_3.png");
   leaf4 = loadImage("assets/leaf_4.png");

   helpbutton = loadImage("assets/help.png");
   startbutton = loadImage("assets/start_here.png");
   creditbutton = loadImage("assets/creditbutton.png")
   makerfairebutton = loadImage("assets/makerfaire.png");
   notlivingbutton = loadImage("assets/not_living.png");
   bfashowbutton = loadImage("assets/bfashow.png");
   halloweenbutton = loadImage("assets/halloween.png");
   icecreambutton = loadImage("assets/ice_cream.png");
   mainbutton = loadImage("assets/main.png")

   splashpage = loadImage("assets/splash_page.png")
   helppage = loadImage("assets/help_page.png");
   mainpage = loadImage("assets/main_page.png");
   creditpage = loadImage("assets/credit_page.png");
   bfashowpage = loadImage("assets/bfashow_page.PNG");
   halloweenpage = loadImage("assets/halloween_page.png"); 
   icecreampage = loadImage("assets/icecream_page.png"); 
   notlivingpage = loadImage("assets/notliving_page.png");
   makerfairepage = loadImage("assets/makerfaire_page.png");
   font1 = loadFont("assets/phoebe-whitmore.ttf");

}

function setup() {
    createCanvas(1300, 700);
    //console.log(hell);
    mgr = new SceneManager();

    pie = createSprite(0, 0);
    pie.addAnimation("normal", "assets/pie0001.png",  "assets/pie0005.png");  // first image, and last image
    pie.addAnimation("stand", "assets/pencil0001.png",  "assets/pencil0006.png"); // first image, and last image
     // make the sprite invisible until you need it.
    pie.visible = false;
textFont(font1);
textSize(30);
stroke(0);
imageMode(CORNER);
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (splash);
    mgr.addScene (main);
    mgr.addScene (bfashow);
    mgr.addScene (halloween);
    mgr.addScene (icecream);
    mgr.addScene (notliving);
    mgr.addScene (makerfaire);
    mgr.addScene (credits);
    mgr.addScene (help);
    mgr.showNextScene();

}

function draw()
{

    // passthe current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( splash );
            break;
        case '2':
            mgr.showScene( main );
            break;
        case '3':
            mgr.showScene( bfashow );
            break;
        case '4':
            mgr.showScene( halloween );
            break;
        case '5':
            mgr.showScene( icecream );
            break;
        case '6':
            mgr.showScene( notliving );
            break;
        case '7':
            mgr.showScene( makerfaire );
            break;
        case '8':
            mgr.showScene( credits );
            break;
        case '912':
            mgr.showScene( help );
            break;    
        case 'h':
            mgr.showScene( help );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
