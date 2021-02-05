<<<<<<< HEAD
// constructor function Movie
function Movie(title, rating){
  // property title
  this.title = title;
  // property rating
  this.rating = rating;
  // validate method to validate title and rating
  this.validate = function(){
          // converting rating to number
          var num_rat = parseInt(this.rating);
          // if title is valid and num_rat between 1 and 5 return true
          if(title && (num_rat>=1 && num_rat<=5)){
                  return true;
          }
          else{ // otherwise false
                  return false;
          }
  }
  // toString method
  this.toString = function(){
          return "Movie: "+this.title+", Rating: "+this.rating;
  }
}
=======
function Movie(title, rating) {
    this.movieTitle = title;
    this.movieRating = rating;
  
  
  function myFunction() {
    let str = movieTitle + " " + movieRating;
    let res = str.toString();
    return res;
  }
  
    function validateForm() {
    let x = document.forms["myForm"]["title"].value;
    let y = document.forms["myForm"]["rating"].value;
  
  
    if (x == "") {
      return false;
    }
    else if (y < 6 && y > 0){
      return true;
    }
    else{
      return false;
    }
  }
  }
>>>>>>> 1a3cf707332a5bd5fefc325ed4fc09c68ec4f9da
