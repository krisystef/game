var requestAnimationFrame = window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) { setTimeout (callback, 1000 / 30); };

var canvas = document.getElementById("canvas-id");
canvas.width = 800;
canvas.height = 600;
var context = canvas.getContext("2d");
///NE BARAITE REDOVETE NAGORE!

var myX=10, myY=300, IzleznaLiEdinPut=false;  //Suzdadohme promenliva! Tipa i e kakufto i dadete :)
var image=new Image();
image.src="krisy.png";


window.addEventListener("keyup", function (args) {      //vika se pri puskane na kopche natiskano do sega
}, false);

window.addEventListener("mousemove", function (args) {

}, false);


function update() {     //specialna funkcia vikashta se periodichno. V neq shte pishem vsqkuf kod za dvijenie
    /////////////////////////////////////////
    if(IzleznaLiEdinPut==false){
        myX++;
    }
    if(myX==850){
        IzleznaLiEdinPut=true;
    }
    if(IzleznaLiEdinPut==true){
        myX--;
        IzleznaLiEdinPut=true;
    }
    
 ////////////////////////////////////////////////   
    if(myX==10){
        IzleznaLiEdinPut=false;
    }
 ////////////////////////////////////////////////////////
    setTimeout(update, 1); //kolko chesto da se dviji
}

function draw() {       //specialna funkcia v koqto shte pishem koda za risuvane. Shte bude vikana, kogato ni se risuva
    context.clearRect(0, 0, canvas.width, canvas.height);       //NEBAR!
    context.globalAlpha = 1;                                    //NEBARAI Tezi redove- s tqh zapochva draw-a!

    context.drawImage(image,0 , 0, canvas.width, canvas.height);	//risuvane na zapulnen kvadrat s izbrania cvqt


    context.fillStyle = "#FF0000";//izbor na cvqt
    context.fillRect(myX, myY, 30, 30); //risuvane na zapulnen kvadrat s izbrania cvqt
    //purvite 2 argumenta sa koordinati za goren lqv ugul, a sled tva- razmerite po x i y!
    
    requestAnimationFrame(draw);        //NEBARAI TOZI RED- Trqbva da e posleden ;)
}
update();       //purvo vikane. ne go zatrivai!
draw(); //purvo vikane. ne go zatrivai!