let requestForm = document.forms["contactForm"];
let name = document.getElementsByClassName('name');
let email = document.getElementsByClassName('email');
let contactNum = document.getElementsByClassName('contactNum');
let reason = document.getElementsByClassName('reason');
let textarea = document.getElementsByClassName('textarea');
let yes = document.getElementsByClassName('yes');
let no = document.getElementsByClassName('no');
let mon = document.getElementsByClassName('mon');
let tues = document.getElementsByClassName('tues');
let wed = document.getElementsByClassName('wed');
let thus = document.getElementsByClassName('thus');
let fri = document.getElementsByClassName('fri');

let getForm = document.getElementsByClassName('submitButton')


function validate() {

  requestForm.className = "needs-validation";

  if (!requestForm.checkValidity()) {
        requestForm.className = "was-validated";
        return false;
  }

    return false;
}


function resetView() {
    getForm.className = "needs-validation";
    name.focus();
    email.focus();
    contactNum.focus();
    reason.focus();
    textarea.focus();
    yes.focus();
    no.focus();
    mon.focus();
    tues.focus();
    wed.focus();
    thurs.focus();
    fri.focus();

}
