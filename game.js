var password = "";
var letters;
var hidenPassword="";
var hit = false;
var pictureNr = 0;

function getPassword(){

  password = document.getElementById("start").value;
  if(password != ""){
    password = password.toUpperCase();
    document.getElementById("passwordForm").innerHTML = "<div></div>";

    hidePassword();
  }

}

function hidePassword(){

  for(i=0; i<password.length; i++){
    if(!(password.charAt(i)==" "))
      hidenPassword = hidenPassword + "-";
    else
      hidenPassword = hidenPassword + " ";
  }
  document.getElementById("password").innerHTML = hidenPassword;

  showKeyboard();

}

function showKeyboard() {

  letters = String.fromCharCode(65, 260, 66, 67, 262, 68, 69, 280, 70, 71, 72, 73, 74, 75, 76, 321, 77, 78, 323, 79, 211, 80, 81, 82, 83, 346, 84, 85, 86, 87, 88, 89, 90, 377, 379);

  var keyboard = document.getElementById("keyboard");

  for (i = 0; i < letters.length; i++){
  keyboard.innerHTML+='<div class="letter" id="l'+i+'" onclick="check('+i+')">'+ (letters.charAt(i)) +'</div>';
  }

}

String.prototype.changeChar = function(place, char){

  if(place > this.length-1) return this.toString();
  else return this.substr(0, place)+char+this.substr(place+1);

}

function check(nr){

  for(i=0; i<password.length; i++){
    if(password.charAt(i)==letters.charAt(nr)){
      hidenPassword=hidenPassword.changeChar(i, letters.charAt(nr));
      hit = true;
    }
  }
  response(nr);

}

function response(nr){

  var color = document.getElementById("l"+nr);
  var picture = document.getElementById("img");

  if(hit==true){
    document.getElementById("password").innerHTML = hidenPassword;
    color.classList.add("colorGreen");
    hit = false;
    if(hidenPassword==password){
      var showWin = '<div class="showResult"><span style="font-weight: bold; color: #066502;">Gratulacje!</span> Hasło odgadnięte.<br> <a href="index.php">Zagraj jeszcze raz.</a></div>';
      document.getElementById("keyboard").innerHTML = showWin;
    }
  }else{
    pictureNr++;
    color.classList.add("colorRed");
    picture.innerHTML = '<img src="img/s'+pictureNr+'.png" alt="Picture">';
    color.setAttribute("onclick",";");
    if(pictureNr==9){
      var showFail = '<div class="showResult"><span style="font-weight: bold; color: #6d0404;">Przegrałeś!</span> Nie udało Ci się odgadnąć hasła. <a href="index.php">Zagraj jeszcze raz.</a></div>';
      document.getElementById("keyboard").innerHTML = showFail;
    }
  }

}
