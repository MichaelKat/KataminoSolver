const height = 5;
let square_size = 50;

const shapes = [
  {color: "green",
    shapes:
    [
      [[1, 1, 1], [0, 1, 0], [0, 1, 0]],
      [[0, 0, 1], [1, 1, 1], [0, 0, 1]],
      [[0, 1, 0], [0, 1, 0], [1, 1, 1]],
      [[1, 0, 0], [1, 1, 1], [1, 0, 0]]
    ]
  },
  {color: "brown",
    shapes:
    [
      [[1, 0], [1, 1], [1, 0], [1, 0]],
      [[1, 0], [1, 0], [1, 1], [1, 0]],
      [[0, 1], [1, 1], [0, 1], [0, 1]],
      [[0, 1], [0, 1], [1, 1], [0, 1]],
      [[0, 0, 1, 0], [1, 1, 1, 1]],
      [[0, 1, 0, 0], [1, 1, 1, 1]],
      [[1, 1, 1, 1], [0, 1, 0, 0]],
      [[1, 1, 1, 1], [0, 0, 1, 0]]
    ]
  },
  {color: "red",
    shapes:
    [
      [[1, 1], [1, 0], [1, 0], [1, 0]],
      [[1, 0], [1, 0], [1, 0], [1, 1]],
      [[1, 1], [0, 1], [0, 1], [0, 1]],
      [[0, 1], [0, 1], [0, 1], [1, 1]],
      [[0, 0, 0, 1], [1, 1, 1, 1]],
      [[1, 0, 0, 0], [1, 1, 1, 1]],
      [[1, 1, 1, 1], [1, 0, 0, 0]],
      [[1, 1, 1, 1], [0, 0, 0, 1]]
    ]
  },
  {color: "pink",
    shapes:
    [
      [[1, 1, 1], [1, 1, 0]],
      [[1, 1, 0], [1, 1, 1]],
      [[0, 1, 1], [1, 1, 1]],
      [[1, 1, 1], [0, 1, 1]],
      [[1, 1], [1, 1], [1, 0]],
      [[1, 1], [1, 1], [0, 1]],
      [[0, 1], [1, 1], [1, 1]],
      [[1, 0], [1, 1], [1, 1]]
    ]
  },
  {color: "lightgreen",
    shapes:
    [
      [[0, 1, 1], [1, 1, 0], [1, 0, 0]],
      [[1, 1, 0], [0, 1, 1], [0, 0, 1]],
      [[0, 0, 1], [0, 1, 1], [1, 1, 0]],
      [[1, 0, 0], [1, 1, 0], [0, 1, 1]]
    ]
  },
  {color: "lightblue",
    shapes:
    [
      [[1, 0, 0], [1, 1, 1], [0, 0, 1]],
      [[0, 0, 1], [1, 1, 1], [1, 0, 0]],
      [[0, 1, 1], [0, 1, 0], [1, 1, 0]],
      [[1, 1, 0], [0, 1, 0], [0, 1, 1]]
    ]
  },
  {color: "purple",
    shapes:
    [
      [[1, 0], [1, 1], [0, 1], [0, 1]],
      [[1, 0], [1, 0], [1, 1], [0, 1]],
      [[0, 1], [0, 1], [1, 1], [1, 0]],
      [[0, 1], [1, 1], [1, 0], [1, 0]],
      [[0, 0, 1, 1], [1, 1, 1, 0]],
      [[1, 1, 1, 0], [0, 0, 1, 1]],
      [[1, 1, 0, 0], [0, 1, 1, 1]],
      [[0, 1, 1, 1], [1, 1, 0, 0]]
    ]
  },
  {color: "yellow",
    shapes:
    [
      [[1, 0, 1], [1, 1, 1]],
      [[1, 1, 1], [1, 0, 1]],
      [[1, 1], [1, 0], [1, 1]],
      [[1, 1], [0, 1], [1, 1]]
    ]
  },
  {color: "orange",
    shapes:
    [
      [[0, 1, 0], [1, 1, 1], [0, 1, 0]]
    ]
  },
  {color: "grey",
    shapes:
    [
      [[0, 1, 1], [1, 1, 0], [0, 1, 0]],
      [[1, 1, 0], [0, 1, 1], [0, 1, 0]],
      [[0, 1, 0], [1, 1, 1], [0, 0, 1]],
      [[0, 1, 0], [1, 1, 1], [1, 0, 0]],
      [[0, 1, 0], [0, 1, 1], [1, 1, 0]],
      [[0, 1, 0], [1, 1, 0], [0, 1, 1]],
      [[1, 0, 0], [1, 1, 1], [0, 1, 0]],
      [[0, 0, 1], [1, 1, 1], [0, 1, 0]]
    ]
  },
  {color: "blue",
    shapes:
    [
      [[1, 0, 0], [1, 0, 0], [1, 1, 1]],
      [[1, 1, 1], [1, 0, 0], [1, 0, 0]],
      [[1, 1, 1], [0, 0, 1], [0, 0, 1]],
      [[0, 0, 1], [0, 0, 1], [1, 1, 1]]
    ]
  },
  {color: "darkcyan",
    shapes:
    [
      [[1, 1, 1, 1, 1]],
      [[1], [1], [1], [1], [1]]
    ]
  }
];



let selected_shapes = new Array(shapes.length).fill(false);

const control_shapes = document.getElementById("shapes");

// Create shape selection elements
for(let i = 0; i < shapes.length; i++) {
  let shape_select = document.createElement('div');
  shape_select.setAttribute("class", "shape_select");

  let shape_container = document.createElement('div');
  shape_container.setAttribute("class", "shape_container");

  // Populate button with actual shape
  for(let j = 0; j < shapes[i].shapes[0].length; j++) {

    let row = document.createElement('div');

    for(let k = 0; k < shapes[i].shapes[0][0].length; k++) {
      let tile = document.createElement('div');

      if(shapes[i].shapes[0][j][k] == 1) {
        tile.setAttribute("style", "background-color: " + shapes[i].color + ";");
      }

      row.appendChild(tile);
    }

    shape_container.appendChild(row);
  }

  shape_select.appendChild(shape_container);

  // Add event listener to make shape selectable
  shape_select.addEventListener("click", function() {
    event.preventDefault();

    // Mark or unmark this shape as selected
    selected_shapes[i] = !selected_shapes[i];

    // If it is selected
    if(selected_shapes[i]) {
      shape_select.setAttribute("style", "box-shadow: 0px 0px 5px 5px #ff7aab;");
    }
    else {
      shape_select.setAttribute("style", "box-shadow: none");
    }
  })

  control_shapes.appendChild(shape_select);
}



// Initialize the Run button
let run_button = document.getElementById("run_button");
let button_text = document.createTextNode("Run");
run_button.appendChild(button_text);

run_button.addEventListener("mouseover", function() {
  event.preventDefault();
  if(run_button.innerHTML == "Run") {
    run_button.style.boxShadow = "0px 0px 2px 2px #ff7aab";
  }
});

run_button.addEventListener("mouseout", function() {
  event.preventDefault();
  run_button.style.boxShadow = "none";
});

run_button.addEventListener("click", function() {
  event.preventDefault();

  let selected_indices = [];

  // Find which shapes are selected
  for(let i = 0; i < selected_shapes.length; i++) {
    if(selected_shapes[i]) {
      selected_indices.push(i);
    }
  }

  if(selected_indices.length < 3) {
    alert("You must select at least 3 shapes!");
  }
  else {

    const solutions = document.getElementById("solutions");
    const solutions_info = document.getElementById("solutions_info");

    // Clear any potential previous solutions
    while (solutions.firstChild) {
      solutions.removeChild(solutions.firstChild);
    }
    while (solutions_info.firstChild) {
      solutions_info.removeChild(solutions_info.firstChild);
    }

    run_button.style.backgroundColor = "#c90e0e";
    run_button.innerHTML = "Running...";

    setTimeout(function() {
      // Start solving
      katamino_solve(document.getElementById("one_sol_box").checked, selected_indices);

      // Allow running the process again
      run_button.style.backgroundColor = ""; // Reset default colour
      run_button.innerHTML = "Run";
    }, 0);
  }
});







// Functions

function katamino_solve(one_solution, selected_indices) {

  const start_time = Date.now();

  let matrix = [];

  let num_iterations = 0;
  let num_solutions = 0;
  let finished = false;
  let collision = false;
  let collided_shape = 0;

  const solutions = document.getElementById("solutions");
  const solutions_info = document.getElementById("solutions_info");

  let next = [];

  // Keep track of current position on the board and shape orientation
  for(let i = 0; i < selected_indices.length; i++) {
    next.push({x: 0, y:0, variant: 0});
  }

  initialize_matrix(matrix, selected_indices.length);

  while(!finished) {

    num_iterations++;
    collision = false;

    // Cycle through all shapes
    for(let shape = 0; shape < selected_indices.length && !collision; shape++) {

      let curr_shape = shapes[selected_indices[shape]].shapes[next[shape].variant];

      let curr_x = next[shape].x;
      let curr_y = next[shape].y;

      for(let i = 0; i < curr_shape.length && !collision; i++) {
        for(let j = 0; j < curr_shape[0].length && !collision; j++) {

          // If this tile is out of bounds or collides with an already existing tile...
          if((curr_x + j >= selected_indices.length && curr_y + i >= height) || (matrix[curr_y + i][curr_x + j] != "null" && curr_shape[i][j] == 1)) {
            collided_shape = shape;
            collision = true;
          }
          else {
            if(curr_shape[i][j] == 1) {
              matrix[curr_y + i][curr_x + j] = shapes[selected_indices[shape]].color;
            }
          }
        }
      }
    }

    // Update values for next iteration
    if(collision) {
      finished = update_shape(next, selected_indices, collided_shape);
    }

    // If no collisions were detected, double check if the current configuration is a valid solution
    else {
      if(verify_validity(matrix)) {
        // If successfull, visualize the solution
        solutions.appendChild(create_board(matrix));

        num_solutions++;

        if(one_solution) {
          finished = true;
        }
        // Move on to next possible permutation by updating the "inner-most" shape
        else {
          finished = update_shape(next, selected_indices, selected_indices.length-1);
        }
      }
      // Move on to next possible permutation by updating the "inner-most" shape
      else {
        finished = update_shape(next, selected_indices, selected_indices.length-1);
      }
    }

    // Restart
    initialize_matrix(matrix, selected_indices.length);
  }

  const finish_time = Date.now();

  let elapsed_seconds = (finish_time - start_time)/1000;

  // If more than a minute past, adjust format to display minutes and seconds
  if(elapsed_seconds >= 60) {

    let grammar_police = "";

    // If at least two minutes have past, we need to display minutes as plural
    if(elapsed_seconds >= 120) {
      grammar_police = "s";
    }

    elapsed_seconds = Math.floor(elapsed_seconds/60) + " minute" + grammar_police + " and " + Number.parseFloat(elapsed_seconds%60).toFixed(3);
  }

  // Post information about the process
  let text;

  if(num_solutions <= 0) {
    text = document.createTextNode(
      "Sorry! This combination of shapes cannot fit in a " +
      selected_indices.length + "x5 area."
    );
  }
  else if(num_solutions == 1) {
    text = document.createTextNode("Awesome - we got a solution for you!");
  }
  else {
    text = document.createTextNode("Success - we got " + num_solutions + " solutions for you!");
  }

  solutions_info.appendChild(text);

  solutions_info.appendChild(document.createElement('br'));

  text = document.createTextNode("Computation time: " + num_iterations.toLocaleString() +
  " iterations in " + elapsed_seconds + " seconds.");

  solutions_info.appendChild(text);
}





// Updates values to create the next combination of shape positions
// Returns true if there are no more combinations possible, false otherwise.
function update_shape(next, selected_indices, collided_shape) {

  next[collided_shape].x++;

  // If the current shape's x coordinate + the shape's width go out of bounds, reset x and update y
  if(next[collided_shape].x + shapes[selected_indices[collided_shape]].shapes[next[collided_shape].variant][0].length > selected_indices.length) {
    next[collided_shape].x = 0;
    next[collided_shape].y++;
  }

  // If the current shape's y coordinate + the shape's height go out of bounds, reset y and try different shape orientation
  if(next[collided_shape].y + shapes[selected_indices[collided_shape]].shapes[next[collided_shape].variant].length > height) {
    next[collided_shape].y = 0;
    next[collided_shape].variant++;
  }

  // If we've gone through all shape orientations, there are no more fruitful changes that can be done to this shape.
  // Reset this shape's orientation and move on to next shape.
  if(next[collided_shape].variant >= shapes[selected_indices[collided_shape]].shapes.length) {
    next[collided_shape].variant = 0;

    // If this is the first/"top" shape, we've gone through all possible permutations and we are done.
    if(collided_shape <= 0) {
      return true;
    }
    else {
      let next_shape = collided_shape -= 1;
      return update_shape(next, selected_indices, next_shape);
    }
  }

  return false;
}

// Initializes
function initialize_matrix(matrix, width) {
  // Clear array
  matrix.length = 0;

  // Refill it with default values
  for(let i = 0; i < height; i++) {
    let newArr = new Array(width).fill("null");
    matrix.push(newArr);
  }
}

// Returns true if current matrix is a valid solution, false otherwise
function verify_validity(matrix) {
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
      // If a tile is empty, this is not a solution
      if(matrix[i][j] == "null") {
        return false;
      }
    }
  }
  return true;
}

// Creates a div element containing a visualization of a solution
function create_board(matrix) {

  let board = document.createElement('div');

  board.setAttribute("class", "solution_board");

  for(let i = 0; i < matrix.length; i++) {

    let row = document.createElement('div');

    row.setAttribute("style", "height: " + square_size + "px;");

    for(let j = 0; j < matrix[0].length; j++) {
      let tile = document.createElement('div');
      tile.setAttribute("style", "display: inline-block; background-color: " + matrix[i][j] + "; " +
        "width: " + square_size + "px; height: " + square_size + "px;");
      row.appendChild(tile);
    }

    board.appendChild(row);
  }

  return board;
}
