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


/* Adds the Bee Class */

class Bee {
    constructor(beeNumber) {
        //this HTML element corresponding to the IMG of the bee
        this.htmlElement = createBeeImg(beeNumber);

        //stores its HTML ID
        this.id = this.htmlElement.id;

        //the left position (x)
        this.x = this.htmlElement.offsetLeft;

        //the top position (y)
        this.y = this.htmlElement.offsetTop;

        //Function to move the bees
        this.move = function(dx, dy) {
            //move the bees by dx, dy
            this.x += dx;
            this.y += dy;

            this.display();
        };

        this.display = function() {
            // Adjust the position of the bee and display it

            this.fitBounds(); //Adds to keep the bee within the bounds

            this.htmlElement.style.left = this.x + "px";
            this.htmlElement.style.top = this.y + "px";
            this.htmlElement.style.display = "block";
        };

        this.fitBounds = function() {

            //Checks to make sure if the bees stay in the board space
            let parent = this.htmlElement.parentElement;
            let iw = this.htmlElement.offsetWidth;
            let ih = this.htmlElement.offsetHeight;
            let l = parent.offsetLeft;
            let t = parent.offsetTop;
            let w = parent.offsetWidth;
            let h = parent.offsetHeight;

            // Conditional Statement to prevent the bee from going below the minimum value of 'x'
            if(this.x < 0) //Condition to check if the 'x' value goes below 0
                this.x = 0; // Changes the value of 'x' back to 0
            
            // Conditional Statement to prevent the bear from going below the maximum value
            if(this.x > w - iw) // Condition to check if the value of x
                this.x = w - iw;

            // Conditional Statement to prevent the bee from going below the minimum value of 'y'
            if(this.y < 0)
                this.y = 0
            
            // Conditional Statement to prevent the bee from going below the minimum value of 'y'
            if(this.y > h - ih)
                this.y = h - ih
        };
    }
}