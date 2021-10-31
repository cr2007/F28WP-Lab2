function Bear() {
    this.dBear = 100; //The steps (in pixels) made by the bear from the user keyboard input (arrow keys)
    this.htmlElement = document.getElementById("bear");
    this.id = this.htmlElement.id;
    this.x = this.htmlElement.offsetLeft;
    this.y = this.htmlElement.offsetTop;

    /* Function to move the bear by dx and dy steps
    *  in the horizontal and vertical directions */
    this.move = function(xDir, yDir) {
        this.fitBounds();
        this.x += this.dBear * xDir;
        this.y += this.dBear * yDir;
        this.display(); //Calls the display() function
    };

    // Function to display the bear at the new position 
    this.display = function() {
        this.fitBounds();
        this.htmlElement.style.left = this.x + "px";
        this.htmlElement.style.top = this.y + "px";
        this.htmlElement.style.display = "block";
    };

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
        if(this.x > w - iw) this.x = w - iw;

        if(this.y < 0) this.y = 0;
        if(this.y > h - ih) this.y = h - ih;
    };
}

function start() {
    //Creates bear
    bear = new Bear();
    
    //Add an event listener to the keypress event
    document.addEventListener("keydown", moveBear, false);

    //Creates a new array for bees
    bees = new Array();

    //Creates the bees
    makeBees();

    lastStingTime = new Date();
}

/* Handles keyboard events
*  to move the bear */

function moveBear(e) {
     //Codes of the four keys
     const KEYUP = 38;
     const KEYDOWN = 40;
     const KEYLEFT = 37;
     const KEYRIGHT = 39;

     // Right Key
     if(e.keyCode == KEYRIGHT) {
         bear.move(1,0)
     }

     //Left Key
     if(e.keyCode == KEYLEFT) {
         bear.move(-1,0)
     }

     //Up Key
     if(e.keyCode == KEYUP) {
         bear.move(0, -1)
     }

     //Down Key
     if(e.keyCode == KEYDOWN) {
         bear.move(0,1)
     }
}

this.move = function(xDir, yDir) {
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
                this.y = 0;
            // Conditional Statement to prevent the bee from going below the minimum value of 'y'
            if(this.y > h - ih)
                this.y = h - ih;
        };
    }
}

function createBeeImg(wNum) {
    //get dimension and position of board div
    let boardDiv = document.getElementById("board");
    let boardDivW = boardDiv.offsetWidth;
    let boardDivH = boardDiv.offsetHeight;
    let boardDivX = boardDiv.offsetLeft;
    let boardDivY = boardDiv.offsetTop;

    //create the IMG element
    let img = document.createElement("img");
    img.setAttribute("src", "images/bee.gif"); //Sets the source of the <img> tag
    img.setAttribute("width", "100"); //Sets the width of the <img> tag
    img.setAttribute("alt", "A bee!"); //Adds the alt text for the <img> tag
    img.setAttribute("id", "bee" + wNum);
    img.setAttribute("class", "bee"); //set class of html tag <img>

    //Adds the <img> element to the DOM as a child of the 'board' <div>
    img.style.position = "absolute";
    boardDiv.appendChild(img);

    //Sets the initial position
    let x = getRandomInt(boardDivW);
    let y = getRandomInt(boardDivH);
    img.style.left = (boardDivX + x) + "px";
    img.style.top = (y) + "px";

    //Returns back the img object
    return img;
}

/* Function to generate and return a random integer between 0 and max */
function getRandomInt(max) {
    // Returns a random value between 0 (inclusive) and the 'max' variable (inclusive)
    return Math.floor(Math.random() * (max - 0 + 1) + min);
}

function makeBees() {
    //Get the number of bees specified by the user
    let nbBees = document.getElementById("nbBees").value;
    nbBees = Number(nbBees); // Converting the content of the input to a numeric value

    if(isNaN(nbBees)) {
        window.alert("Invalid number of bees");
        return;
    }

    // Create the Bees
    let i = 1;
    while (i <= nbBees) {
        var num = i;
        var bee = new Bee(num); //Creates the object and its IMG element

        bee.display(); //Displays the bees
        bees.push(bee); //Add the Bee object to the Bees Array
        i++;
    }
}

function moveBees() {
    //Get speed input field value
    let speed = document.getElementById("speedBees").value;

    //Move each bee to a random location
    for(let i = 0; i < bees.length; i++) {
        let dx = getRandomInt(2 * speed) - speed;
        let dy = getRandomInt(2 * speed) - speed;

        bees[i].move(dx, dy);
        isHit(bees[i], bear); // We add this to count strings
    }
}


//Updates the loop for the game
function updateBees() {
    //Move the bees randomly
    moveBees();

    //Uses a fixed update period
    let period = 10;

    //Updates the timer for the next move
    updateTimer = setTimeout('updateBees()', period);
}

/* Methods to count the stings */

function isHit(defender, offender) {
    // Checks if the two images overlap
    if(overlap(defender, offender)) {
        let score = hits.innerHTML;
        score = Number(score) + 1; // Increments the score
        hits.innerHTML = score; // Displays the new score

        //Calculates the longest duration
        let newStingTime = new Date();
        let thisDuration = newStingTime - lastStingTime;
        lastStingTime = newStingTime;
        let longestDuration = Number(duration.innerHTML);
        if(longestDuration === 0) {
            longestDuration = thisDuration;
        } else {
            if(longestDuration < thisDuration) longestDuration = thisDuration;
        }
        document.getElementById("duration").innerHTML = longestDuration;
    }
}

function overlap(element1, element2) {
    // Consider the two rectangles wrapping the two elements

    // Rectangle of the first element
    left1 = element1.htmlElement.offsetLeft;
    top1 = element1.htmlElement.offsetTop;
    right1 = element1.htmlElement.offsetLeft + element1.htmlElement.offsetWidth;
    bottom1 = element1.htmlElement.offsetTop + element1.htmlElement.offsetHeight;

    // Rectangle of the second element
    left2 = element2.htmlElement.offsetLeft; // e2x
    top2 = element2.htmlElement.offsetTop; //e2y
    right2 = element2.htmlElement.offsetLeft + element2.htmlElement.offsetWidth;
    bottom2 = element2.htmlElement.offsetTop + element2.htmlElement.offsetHeight;

    // Calculating the intersection of the two rectangles
    x_intersect = Math.max(0, Math.min(right1, right2) - Math.max(left1, left2));
    y_intersect = Math.max(0, Math.min(bottom1, bottom2) - Math.max(top1, top2));
    intersectArea = x_intersect * y_intersect;

    // If intersection is nil (i.e. no hit)
    if(intersectArea == 0 || isNaN(intersectArea)) {
        return false;
    }
    return true;
}