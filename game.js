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