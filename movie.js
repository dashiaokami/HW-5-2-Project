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