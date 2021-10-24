function Bear() {
    this.dBear = 100; //The steps (in pixels) made by the bear from the user keyboard input (arrow keys)
    this.htmlElement = document.getElementById("bear");
    this.id = this.htmlElement.id;
    this.x = this.htmlElement.offsetLeft;
    this.y = this.htmlElement.offsetTop;

    /* Function to move the bear by dx and dy steps
    *  in the horizontal and vertical directions */
    this.move = function(xDir, yDir){
        this.x += this.dBear * xDir;
        this.y += this.dBear * yDir;
        this.display(); //Calls the display() function
    };

    // Function to display the bear at the new position 
    this.display = function() {
        this.htmlElement.style.left = this.x + "px";
        this.htmlElement.style.top = this.y + "px";
        this.htmlElement.style.display = "block";
    }
}

function start() {
    //Creates bear
    bear = new Bear();
    
    //Add an event listener to the keypress event
    document.getEventListener("keydown", moveBear, false);
}

// Function to limit the bear within the constraints of the board
this.fitBounds = function() {
    let parent = this.htmlElement.parentElement;
    let iw = this.htmlElement.offsetWidth;
    let ih = this.htmlElement.offsetHeight;
    let l = parent.offsetLeft;
    let t = parent.offsetTop;
    let w = parent.offsetWidth;
    let h = parent.offsetHeight;

    if(this.x < 0) this.x = 0;
    if(this.x > w - iw) this.x = w-iw;
    if(this.y < 0) this.y = 0;
    if(this.y > h - ih) this.y = h - ih;
};

this.move = function(xDir, yDir){
    this.fitBounds(); // Instruction to keep the bear within the board
    this.x += this.dBear * xDir;
    this.y += this.dBear * yDir;
    this.display();
};

