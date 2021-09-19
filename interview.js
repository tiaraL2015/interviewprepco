function startInterview(){
document.getElementById("interviewbg").src="84608878165daf8fb910ab5ca5418c4a copy.jpeg";
document.getElementById("startbutn").style.display="none";
document.getElementById("buttondiv").style.display="block";
document.getElementById("backbutn").style.display="none";
document.getElementById("starttext").style.display="none";
document.getElementById("company").style.display="none";
document.getElementById("company2").style.display="none";
document.getElementById("position").style.display="none";
document.getElementById("position2").style.display="none";
document.getElementById("continuebutn").style.display="none";
document.getElementById("starttext2").style.display="none";


}
function aboutInterview(){
document.getElementById("interviewbg").src="aboutinterview.png";
document.getElementById("buttondiv").style.display="none";
document.getElementById("backbutn").style.display="block";
document.getElementById("starttext").style.display="none";
document.getElementById("company").style.display="none";
document.getElementById("company2").style.display="none";
document.getElementById("position").style.display="none";
document.getElementById("position2").style.display="none";
document.getElementById("continuebutn").style.display="none";
document.getElementById("starttext2").style.display="none";


}
function startbtnInterview(){
document.getElementById("interviewbg").src="84608878165daf8fb910ab5ca5418c4a copy.jpeg";
document.getElementById("buttondiv").style.display="none";
document.getElementById("backbutn").style.display="block";
document.getElementById("backbutn").style.right="-60px";
document.getElementById("continuebutn").style.display="block";
document.getElementById("continuebutn").style.right="60px";
document.getElementById("continuebutn").style.top="-130px";
document.getElementById("starttext").style.display="block";
document.getElementById("company").style.display="block";
document.getElementById("company2").style.display="block";
document.getElementById("position").style.display="block";
document.getElementById("position2").style.display="block";
document.getElementById("starttext2").style.display="none";

}
function continueInterview(){
  var titlename= document.getElementById("position");
  var companyname= document.getElementById("company");
document.getElementById("interviewbg").src="84608878165daf8fb910ab5ca5418c4a copy.jpeg";
document.getElementById("buttondiv").style.display="none";
document.getElementById("backbutn").style.display="none";
document.getElementById("returnbutn").style.right="-60px";
document.getElementById("continuebutn").style.display="none";
document.getElementById("begin").style.right="60px";
document.getElementById("begin").style.top="-130px";
document.getElementById("begin").style.display="block";
document.getElementById("returnbutn").style.display="block";
document.getElementById("starttext").style.display="block";
document.getElementById("starttext2").style.display="none";
document.getElementById("starttext").innerHTML="You have decided to interview for the "+titlename.value+" position for "+companyname.value+" <br> The interview will be 10 minutes and will begin with a greeting from the hiring manager. After each question you will have 1 to 2 minutes to respond. Remember it is okay to mess up, you are only practicing for the real interview. Be sure to take your time and improve your interview skills. <br> Have a great interview!";
document.getElementById("company").style.display="none";
document.getElementById("company2").style.display="none";
document.getElementById("position").style.display="none";
document.getElementById("position2").style.display="none";
document.getElementById("starttext2").style.display="none";

}
function ReturntoLast(){
  var titlename= document.getElementById("position");
  var companyname= document.getElementById("company");
document.getElementById("interviewbg").src="84608878165daf8fb910ab5ca5418c4a copy.jpeg";
document.getElementById("buttondiv").style.display="none";
document.getElementById("backbutn").style.display="block";
document.getElementById("backbutn").style.right="-60px";
document.getElementById("continuebutn").style.display="block";
document.getElementById("continuebutn").style.right="60px";
document.getElementById("continuebutn").style.top="-130px";
document.getElementById("begin").style.display="none";
document.getElementById("returnbutn").style.display="none";
document.getElementById("starttext").style.display="block";
document.getElementById("starttext").innerHTML="Enter your desired company and position before starting the interview.";
document.getElementById("company").style.display="block";
document.getElementById("company2").style.display="block";
document.getElementById("position").style.display="block";
document.getElementById("position2").style.display="block";
document.getElementById("starttext2").style.display="none";

}
function InterviewMe(){
document.getElementById("buttondiv").style.display="none";
document.getElementById("backbutn").style.display="none";
document.getElementById("continuebutn").style.display="none";
document.getElementById("begin").style.display="none";
document.getElementById("returnbutn").style.display="none";
document.getElementById("starttext").style.display="none";
document.getElementById("company").style.display="none";
document.getElementById("company2").style.display="none";
document.getElementById("position").style.display="none";
document.getElementById("position2").style.display="none";
document.getElementById("videodiv").style.display="block";
document.getElementById("leftdiv").style.display="block";
document.getElementById("interviewbg").style.display="block";
document.getElementById("starttext2").style.display="none";

}
function InterviewReview(){
document.getElementById("buttondiv").style.display="none";
document.getElementById("backbutn").style.display="block";
document.getElementById("continuebutn").style.display="none";
document.getElementById("begin").style.display="none";
document.getElementById("returnbutn").style.display="none";
document.getElementById("starttext2").style.display="block";
document.getElementById("starttext").style.display="none";
document.getElementById("starttext2").style.top="-630px";
document.getElementById("starttext2").innerHTML="Coming Soon: Reviewing past practice interviews!<br><br><u>Review Questions:</u> <br> <br><br><ol style='margin-left: 300px; text-align:left;'><li>Tell me about yourself.</li><li> Tell me about a time when you had to overcome a difficult challenge at work.</li><li>Tell me about a time when you felt satisfied about your performance at work.</li><li>Tell me about your strengths and weaknesses.</li><li>Tell me about a time when you felt uncomfortable or threatened at work.</li><li>Tell me why we should hire you.</li></ol>";
document.getElementById("starttext2").style.color="#339933";
document.getElementById("company").style.display="none";
document.getElementById("company2").style.display="none";
document.getElementById("position").style.display="none";
document.getElementById("position2").style.display="none";
document.getElementById("videodiv").style.display="none";
document.getElementById("leftdiv").style.display="none";
document.getElementById("interviewbg").style.display="block";

}
function addInterview(){
var userVideo = document.getElementById('recording').href.value;
database.ref('users/'+newUserKey+'/video').set(userVideo);
window.alert("Video has been saved.");
}
