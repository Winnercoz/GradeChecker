

function myFunction() {
  document.getElementById('recheck').style.display = 'block';

    const gradeF = '40';
    const gradeE = '45';
    const gradeD = '50';
    const gradeCD = '55';
    const gradeC = '60';
    const gradeBC = '65';
    const gradeB = '70';
    const gradeAB = '75';
    const gradeA = '80';
    const excess = '100';
    

    var time = document.getElementById('score').value;
    var Grade;

    if (time >= gradeA) {
        Grade = "Your Grade is A";
      } else if (time >= gradeAB) {
        Grade = "Your Grade is AB";
      }
       else if (time >= gradeB) {
        Grade = "Your Grade is B";
      }
      else if (time >= gradeBC) {
        Grade = "Your Grade is BC";
      }
       else if (time >= gradeC) {
        Grade = "Your Grade is C";
      }
      else if (time >= gradeCD) {
        Grade = "Your Grade is CD";
      }
      else if (time >= gradeD) {
        Grade = "Your Grade is D ";
      }
      else if (time >= gradeE) {
        Grade = "Your Grade is E";
      }
      else if (time == gradeF) {
        Grade = "Your Grade is F";
      }
      else if (time > excess) {
        Grade = "Please Insert A valid Score";
      }
      else {
        Grade = "Please Insert A valid Score";
      }

  document.getElementById("demo").innerHTML = Grade;
}

 function Timer(){
        if (confirm('Please If You Wish To Check Again Click Okay')) {
          window.location.reload()
        } else {
         return
        }
    }
