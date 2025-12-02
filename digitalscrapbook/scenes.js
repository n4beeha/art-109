
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================



////////////////////////////// 1 /////////////////
function splash()  {
    var textX;
    var textY;
    var loy= 0;  // exists as data saved when in the splash scene
    let btnevent1 =false;
    let btnevent2 =false;
    let btnevent3 =false;

    // scene1.setup
    this.setup = function() {
      console.log("We are at setup for splash");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      outputVolume(.15);  // turn down the volume.
    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering splash");
        background("grey");
        textAlign(CENTER);
        textSize(30);
        noStroke();

        // reset or disable the other scenes and their stuff
        // turn off the other scene stuff
        notlivingaudio.stop();
        // make sure ghost is gone from this scene
        pie.visible = false;
      

    }


    this.draw = function()
    {
      background("lightblue");
      image(splashpage, 0,0,1300,700);

      // this is the draw function for all p5.play commands
     
        // push();
        
        // translate(width/2,loy-100);
        // fill(10,200,160);
        // text("Splash Down!",0,-120);
        // ellipse(0,0,80,140);


        // if (loy > height-140) {
        //   loy = 0;
        // }
        //  loy++;

        // pop();
    
   
                             // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
      btnevent1 = checkButtonPress(helpbutton,13,13,47,47,color(220,100,100),color(100),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playshortsound();
        this.sceneManager.showScene( help );
      }
                            // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
      btnevent2 = checkButtonPress(leaf1,750,100,84,84,color(120,180,100),color(100),color(250));
      if (btnevent2) {   // main or next scene
        btnevent2 = false;
         playshortsound();
         this.sceneManager.showScene( main );
      }

      push();
      textAlign(CORNER);
      noStroke();
      fill(162, 134, 104);
      textSize(30);
      text("Click the leaf to open.",17, 392);
      textSize(90);
      text("WELCOME.",18,353);
      fill(74, 21, 36);
      textSize(30);
      text("Click the leaf to open.",15, 390);
      textSize(90);
      text("WELCOME.",15,350);
      
      pop();
      btnevent3 = checkButtonPress(creditbutton,13,70,47,47,color(120,180,100),color(100),color(250));
      if (btnevent3) {   // main or next scene
        btnevent3 = false;
         playshortsound();
         this.sceneManager.showScene( credits );
      }

    }

    this.keyPressed = function() {
        fill(0,255,0);
        text(keyCode, textX, textY += 10);

        if ( textY > height )  {
            textX += 20;
            textY = 0;
        }
    }

    this.mousePressed = function() {

     
    }
}

///////////////////////  2  ////////////////////////

function main()  {

   this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;

   this.loy = 120;
    // var loy = 120;

  //  let btnevent1 = false;
  //  let btnevent2 = false;
  //  let btnevent3 = false;
  //  let btnevent4 = false;
  //  let btnevent5 = false;
  //  let btnevent6 = false;

  this.setup = function() {
      console.log("We are at setup for main");
      // make sure ghost is gone from this scene
  }

  this.enter = function()
  {
    console.log("We are at entering main");
    // pie.position.x = 50;
    // pie.position.y = 80;
    // pie.position.x =  240;
    // pie.position.y =  270;
    // pie.visible = true;
    // pie.changeAnimation("normal");

    makerfaireaudio.stop();
    halloweenaudio.stop();
    bfashowaudio.stop();
    notlivingaudio.stop();
    if ( !ambience.isPlaying() ) {
      ambience.play();
   }

  }

    this.draw = function() {
      background("lightblue");
      image(mainpage, 0,0,1300,700);
      // this is the draw function for all p5.play commands
   
      // ghost events defined

    
//     pie.changeAnimation("normal");

//      if ( pie.mouse.hovering() ) {
//         console.log("over");
//         pie.changeAnimation("stand");
//         pie.position.x += random(-9,9);
//         pie.position.y += random(-9,9);
//         //matchstrike.play();  // lots of fast sound playing
//      }
      
//      if (pie.mouse.pressing()) {
//       if ( !snd2.isPlaying() ) {
//          snd2.play();
//      } else {
//          snd2.pause();

//      }

// }  
     


    // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress(helpbutton,13,13,47,47,color(220,100,100),color(100),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( help );
    }

    btnevent2 = checkButtonPress(halloweenbutton,100,341,190,260,color(220,100,100),color(100),color(250));  
    if (btnevent2) { // help
      btnevent2 = false;
      // text("hello", 35,35)
      this.sceneManager.showScene( halloween );
    }

    btnevent3 = checkButtonPress(bfashowbutton,484,420,349, 211, color(220,100,100),color(100),color(250));  
    if (btnevent3) { // help
      btnevent3 = false;
      this.sceneManager.showScene( bfashow );
    }

    // btnevent4 = checkButtonPress(notlivingbutton,918,270,145, 116.76, color(220,100,100),color(100),color(250));  
    // if (btnevent4) { // help
    //   btnevent4 = false;
    //   this.sceneManager.showScene( notliving );
    // }

    // btnevent5 = checkButtonPress(icecreambutton,470,205,160, 167.20, color(220,100,100),color(100),color(250));  
    // if (btnevent5) { // help
    //   btnevent5 = false;
    //   this.sceneManager.showScene( icecream );
    // }

    btnevent6 = checkButtonPress(makerfairebutton,514,290,297.6, 120, color(220,100,100),color(100),color(250));  
    if (btnevent6) { // help
      btnevent6 = false;
      this.sceneManager.showScene( makerfaire );
    }

  



//494,410,349, 211

image(leaf1,100,240);
image(leaf3,355,530);
image(leaf2,640,210);
image(leaf4,755,390);
    }  //end

    this.mousePressed = function()
    {

    }


}



////////////////////////////// 3 /////////////////

function bfashow()  {


  this.y = 0;
   // var y = 0;
   this.lox = 50;
   // var lox = 50;

  this.loy = 120;
   // var loy = 120;

  let btnevent1 = false;
  let btnevent2 = false;

 this.setup = function() {
     console.log("We are at setup for bfashow");
     // make sure ghost is gone from this scene
 }

 this.enter = function()
 {
   console.log("We are at entering bfashow");
   pie.position.x = 1200;
   pie.position.y = 370;
   pie.position.x =  1200;
   pie.position.y =  370;
   pie.visible = true;
   pie.changeAnimation("normal");

   halloweenaudio.stop();
   makerfaireaudio.stop();
   notlivingaudio.stop();
   ambience.stop();

   if ( !bfashowaudio.isPlaying() ) {
    bfashowaudio.play();
 }
  

 }

   this.draw = function() {
     background("lightblue");
     image(bfashowpage, 0,0,1300,700);
     // this is the draw function for all p5.play commands
  
     // ghost events defined

   
   pie.changeAnimation("normal");

    if ( pie.mouse.hovering() ) {
       console.log("over");
       pie.changeAnimation("stand");
       pie.position.x += random(-9,9);
       pie.position.y += random(-9,9);
       //snd2.play();  // lots of fast sound playing
    }
     
    if (pie.mouse.pressing()) {
      if ( !snd2.isPlaying() ) {
         snd2.play();
     } else {
         snd2.pause();

     }

  this.sceneManager.showScene( main );

}  


   // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
   btnevent1 = checkButtonPress(helpbutton,13,13,47,47,color(220,100,100),color(100),color(250));  
   if (btnevent1) { // help
     btnevent1 = false;
     this.sceneManager.showScene( help );
   }
// btnevent1 = checkButtonPress(button,13,13,47,47,color(220,100,100),color(100),color(250));  
//    if (btnevent1) { // help
//      btnevent1 = false;
//      this.sceneManager.showScene( help );
//    }
  //  btnevent2 = checkButtonPress(halloween,1085,341,141,159.74,color(220,100,100),color(100),color(250));  
  //  if (btnevent2) { // help
  //    btnevent2 = false;
  //    text("hello", 35,35)
  //    //this.sceneManager.showScene( help );
  //  }

   }  //end

   this.mousePressed = function()
   {

   }


}

function halloween()  {

   this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;
 
   this.loy = 120;
    // var loy = 120;
 
   let btnevent1 = false;
   let btnevent2 = false;
 
  this.setup = function() {
      console.log("We are at setup for halloween");
      // make sure ghost is gone from this scene
  }
 
  this.enter = function()
  {
    console.log("We are at entering halloween");
    pie.position.x = 1200;
    pie.position.y = 300;
    pie.position.x =  1200;
    pie.position.y =  300;
    pie.visible = true;
    pie.changeAnimation("normal");
 
 
    bfashowaudio.stop();
    makerfaireaudio.stop();
    notlivingaudio.stop();
    ambience.stop();
    if ( !halloweenaudio.isPlaying() ) {
      halloweenaudio.play();
    }
 
  }
 
    this.draw = function() {
      background("lightblue");
      image(halloweenpage, 0,0,1300,700);
      // this is the draw function for all p5.play commands
   
      // ghost events defined
 
    
    pie.changeAnimation("normal");
 
     if ( pie.mouse.hovering() ) {
        console.log("over");
        pie.changeAnimation("stand");
        pie.position.x += random(-9,9);
        pie.position.y += random(-9,9);
        //snd2.play();  // lots of fast sound playing
     }
      
     if (pie.mouse.pressing()) {
      if ( !snd2.isPlaying() ) {
         snd2.play();
     } else {
         snd2.pause();

     }

  this.sceneManager.showScene( main );

}  
 
 
    // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress(helpbutton,13,13,47,47,color(220,100,100),color(100),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( help );
    }
 
   //  btnevent2 = checkButtonPress(halloween,1085,341,141,159.74,color(220,100,100),color(100),color(250));  
   //  if (btnevent2) { // help
   //    btnevent2 = false;
   //    text("hello", 35,35)
   //    //this.sceneManager.showScene( help );
   //  }
 
    }  //end
 
    this.mousePressed = function()
    {
 
    }
 
 
 }


 function icecream()  {
  halloweenaudio.stop();
  makerfaireaudio.stop();
  notlivingaudio.stop();
  bfashowaudio.stop();
  
   this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;
 
   this.loy = 120;
    // var loy = 120;
 
   let btnevent1 = false;
   let btnevent2 = false;
 
  this.setup = function() {
      console.log("We are at setup for icecream");
      // make sure ghost is gone from this scene
  }
 
  this.enter = function()
  {
    console.log("We are at entering icecream");
    pie.position.x = 50;
    pie.position.y = 80;
    pie.position.x =  240;
    pie.position.y =  270;
    pie.visible = true;
    pie.changeAnimation("normal");
 
    halloweenaudio.stop();
    makerfaireaudio.stop();
    notlivingaudio.stop();
    bfashowaudio.stop();

 if ( !ambience.isPlaying() ) {
      ambience.play();
   }
 
  }
 
    this.draw = function() {
      background("lightblue");
      image(icecreampage, 0,0,1300,700);
      // this is the draw function for all p5.play commands
   
      // ghost events defined
 
    
    pie.changeAnimation("normal");
 
     if ( pie.mouse.hovering() ) {
        console.log("over");
        pie.changeAnimation("stand");
        pie.position.x += random(-9,9);
        pie.position.y += random(-9,9);
        //matchstrike.play();  // lots of fast sound playing
     }
      
     if (pie.mouse.pressing()) {
      if ( !snd2.isPlaying() ) {
         snd2.play();
     } else {
         snd2.pause();

     }

  this.sceneManager.showScene( main );

}  
 
 
    // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress(helpbutton,13,13,47,47,color(220,100,100),color(100),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( help );
    }
 
   //  btnevent2 = checkButtonPress(halloween,1085,341,141,159.74,color(220,100,100),color(100),color(250));  
   //  if (btnevent2) { // help
   //    btnevent2 = false;
   //    text("hello", 35,35)
   //    //this.sceneManager.showScene( help );
   //  }
 
    }  //end
 
    this.mousePressed = function()
    {
 
    }
 
 
 }

 function notliving()  {
  
   this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;
 
   this.loy = 120;
    // var loy = 120;
 
   let btnevent1 = false;
   let btnevent2 = false;
 
  this.setup = function() {
      console.log("We are at setup for notliving");
      // make sure ghost is gone from this scene
  }
 
  this.enter = function()
  {
    console.log("We are at entering notliving");
    pie.position.x = 50;
    pie.position.y = 80;
    pie.position.x =  515;
    pie.position.y =  500;
    pie.visible = true;
    pie.changeAnimation("normal");
 
    ambience.stop();
    halloweenaudio.stop();
    makerfaireaudio.stop();
    bfashowaudio.stop();
    
    if ( !notlivingaudio.isPlaying() ) {
     notlivingaudio.play();
   }
   
 
  }
 
    this.draw = function() {
      background("lightblue");
      image(notlivingpage, 0,0,1300,700);
      // this is the draw function for all p5.play commands
   
      // ghost events defined
 
    
    pie.changeAnimation("normal");
 
     if ( pie.mouse.hovering() ) {
        console.log("over");
        pie.changeAnimation("stand");
        pie.position.x += random(-9,9);
        pie.position.y += random(-9,9);
        snd2.play();  // lots of fast sound playing
     }
      
     if (pie.mouse.pressing()) {
      if ( !snd2.isPlaying() ) {
         snd2.play();
     } else {
         snd2.pause();

     }

  this.sceneManager.showScene( main );

}  
 
 
    // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress(helpbutton,13,13,47,47,color(220,100,100),color(100),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( help );
    }
 
   //  btnevent2 = checkButtonPress(halloween,1085,341,141,159.74,color(220,100,100),color(100),color(250));  
   //  if (btnevent2) { // help
   //    btnevent2 = false;
   //    text("hello", 35,35)
   //    //this.sceneManager.showScene( help );
   //  }
 
    }  //end
 
    this.mousePressed = function()
    {
 
    }
 
 
 }

 function makerfaire()  {
  
   this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;
 
   this.loy = 120;
    // var loy = 120;
 
   let btnevent1 = false;
   let btnevent2 = false;
 
  this.setup = function() {
      console.log("We are at setup for notliving");
      // make sure ghost is gone from this scene
  }
 
  this.enter = function()
  {
    console.log("We are at entering notliving");
    pie.position.x = 1220;
    pie.position.y = 150;
    pie.position.x =  1220;
    pie.position.y =  150;
    pie.visible = true;
    pie.changeAnimation("normal");
 
    bfashowaudio.stop();
    halloweenaudio.stop();
    notlivingaudio.stop();
    ambience.stop();

    if ( !makerfaireaudio.isPlaying() ) {
     makerfaireaudio.play();
   }
   
 
  }
 
    this.draw = function() {
      background("lightblue");
      image(makerfairepage, 0,0,1300,700);
      // this is the draw function for all p5.play commands
   
      // ghost events defined
 
    
    pie.changeAnimation("normal");
 
     if ( pie.mouse.hovering() ) {
        console.log("over");
        pie.changeAnimation("stand");
        pie.position.x += random(-9,9);
        pie.position.y += random(-9,9);
       // snd2.play();  // lots of fast sound playing
     }
      
     if (pie.mouse.pressing()) {
      if ( !snd2.isPlaying() ) {
         snd2.play();
     } else {
         snd2.pause();

     }

  this.sceneManager.showScene( main );

}   
 
 
    // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress(helpbutton,13,13,47,47,color(220,100,100),color(100),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( help );
    }
 
   //  btnevent2 = checkButtonPress(halloween,1085,341,141,159.74,color(220,100,100),color(100),color(250));  
   //  if (btnevent2) { // help
   //    btnevent2 = false;
   //    text("hello", 35,35)
   //    //this.sceneManager.showScene( help );
   //  }
 
    }  //end
 
    this.mousePressed = function()
    {
 
    }
 
 
 }


function credits() {


  let btnevent1 = false;
  this.setup = function()  {
      console.log("We are at setup for credits");
      // access a different scene using the SceneManager

  }

  this.enter = function()
  {
   console.log("We are at entering for credits");
   pie.visible = true;
   pie.position.x = 1200;
     pie.position.y = 370;

   halloweenaudio.stop();
   makerfaireaudio.stop();
   notlivingaudio.stop();
   bfashowaudio.stop();
   if ( !ambience.isPlaying() ) {
     ambience.play();
  }

  }

  this.draw = function() {
    background("lightblue");
    image(creditpage, 0,0,1300,700);
    // this is the draw function for all p5.play commands
    
    

    if ( pie.mouse.hovering() ) {
      console.log("over");
      pie.changeAnimation("stand");
      // pie.position.x += random(-4,4);
      // pie.position.y += random(-2,2);
    
   }  else {

    pie.changeAnimation("normal");


   }
    

   if (pie.mouse.pressing()) {
    if ( !snd2.isPlaying() ) {
       snd2.play();
   } else {
       snd2.pause();

   }

this.sceneManager.showScene( main );

}  


   btnevent1 = checkButtonPress(helpbutton,13,13,47,47,color(220,100,100),color(100),color(250));  
   if (btnevent1) { // help
     btnevent1 = false;
     this.sceneManager.showScene( help );
   }
      //  // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
      //  btnevent2 = checkButtonPress(startbutton,500,62,14,575,color(120,180,100),color(100),color(250));
      //  if (btnevent2) {   // main or next scene
      //    btnevent2 = false;
      //      playshortsound();
      //      this.sceneManager.showScene( main );
      //  }
    //    fill("black");
    // textAlign(LEFT);
    // textSize(25);
    
    push();
    textAlign(LEFT);
    textSize(25);
    noStroke();
    fill(74, 21, 36);
    text( "Illustrations, Animations, and Code\nby Nabeeha Ahsan\n\nPaper and tape textures, other \nfound assets from Pinterest\n\nSound Effects from ZapSplat\n\nNexus Poster by Rhyme Balatbat\n\nSomebody Else by the 1975\n\nGolden by HUNTRIX\n\nSidelines by Phoebe Bridgers\n", 500,100);
  pop();
  }
 

}


////////////////////////////// 4 /////////////////

function help() {
 
let btnevent1=false;

    this.setup = function()  {
        console.log("We are at setup for help");
        // access a different scene using the SceneManager

    }

    this.enter = function()
    {
     console.log("We are at entering for help");
     pie.visible = true;
     pie.position.x = 1200;
     pie.position.y = 370;

     halloweenaudio.stop();
     makerfaireaudio.stop();
     notlivingaudio.stop();
     bfashowaudio.stop();
     if ( !ambience.isPlaying() ) {
       ambience.play();
    }
    }

    this.draw = function() {
      background("lightblue");
      image(helppage, 0,0,1300,700);
      // this is the draw function for all p5.play commands
      fill("black");
      push();
      textAlign(LEFT);
      textSize(27);
      noStroke();
      fill(74, 21, 36);
      text( "To navigate the scrapbook,\nclick a photo or song lyric\nand recieve a reminder or\nmemory.\n\nClick on the pie at any time\nto return to the main page." , 475,320);
pop();
      

      if ( pie.mouse.hovering() ) {
        console.log("over");
        pie.changeAnimation("stand");
        // pie.position.x += random(-4,4);
        // pie.position.y += random(-2,2);
      
     }  else {
      pie.changeAnimation("normal");
     }
      
     if (pie.mouse.pressing()) {
           if ( !snd2.isPlaying() ) {
              snd2.play();
          } else {
              snd2.pause();

          }

       this.sceneManager.showScene( main );

     }  
 
    }

}


function checkButtonPress(i,bx,by,boxW,boxH,upcolor,ovcolor,dncolor) {

  let btnc = "";
  let btnstate =false;

  // Test if the cursor is over the box
  if ( mouseX > bx &&
       mouseX < bx + boxW &&
       mouseY > by  &&
       mouseY < by + boxH ) {
       overBox = true;

    if (!mouseIsPressed) {
      stroke(255);
      //tint(255, 129, 56);
      btnc = ovcolor;
      btnstate = false;

    } else {
      console.log(i + " pressed");
      stroke(255);
      btnc = dncolor;
      btnstate = true;
    }

  } else {
    stroke(255);
    //tint(255);
    btnc = upcolor;
    overBox = false;
  }

  push();
  translate(bx,by);
  fill(btnc);
  image(i,0,0,boxW, boxH);
  // rect(0, 0, boxW, boxH,10); // draw the box

  fill(20);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  //text (str,boxW/2,28);

    pop();

    return btnstate;

}


function playshortsound() {
  if ( !snd2.isPlaying() ) {
    snd2.play();
  } else {
     snd2.stop();
 }


}