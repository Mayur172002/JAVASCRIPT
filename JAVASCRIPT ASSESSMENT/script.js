

const bookingSelector = document.querySelector("#choicebooking");
bookingSelector.addEventListener("change", bookingChoiceHandler);

function createSlotElement() {
  const element = document.createElement("div");
  element.classList.add("slot-1");
  element.innerHTML = `<label for="slot-selector">Select Slot :</label>
    <select name="Slot" id="slot-selector">
      <option value="Breakfast">Breakfast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
    </select>`;
  return element;
}

function createTimeElement() {
  const element = document.createElement("div");
  element.classList.add("time-1");
  element.innerHTML = `<label for="time-selector">Select Time :</label>
    <select name="time-select" id="time-selector" value="">
      <option value="12:00AM">12:00AM to 01:00PM</option>
      <option value="01:00PM">01:00PM to 02:00PM</option>
      <option value="02:00PM">02:00PM to 03:00PM</option>
      <option value="03:00PM">03:00PM to 04:00PM</option>
      <option value="04:00PM">04:00PM to 05:00PM</option>
      <option value="05:00PM">05:00PM to 06:00PM</option>
      <option value="06:00PM">06:00PM to 07:00PM</option>
      <option value="07:00PM">07:00PM to 08:00PM</option>
      <option value="08:00PM">08:00PM to 09:00PM</option>
      <option value="09:00PM">09:00PM to 10:00PM</option>
    </select>`;
  return element;
}

function bookingChoiceHandler(e) {
  if (e.target.value == "Full day booking") {
    document.querySelector(".slot-1")?.remove();
    document.querySelector(".time-1")?.remove();
  }
  if (e.target.value == "Half day booking") {
    form.insertBefore(createSlotElement(), bookBtn);
    document.querySelector(".time-1")?.remove();
  }
  if (e.target.value == "Hourly booking") {
    form.insertBefore(createTimeElement(), bookBtn);
    document.querySelector(".slot-1")?.remove();
  }
}


const bookBtn = document.querySelector(".book-btn");
const form = document.querySelector("#booking-form");


function booking(start){
 if(start.username.value == ""){
  document.getElementById("err").innerHTML = "please enter your usernanme!!"
  document.getElementById("err").style.color="red"
  start.username.focus();
  return false
 }
 if(start.number.value == ""){
  document.getElementById("err").innerHTML = "please enter your number!!";
  document.getElementById("err").style.color="red"
  start.username.focus();
  return false
 }
 if(start.email.value == ""){
  document.getElementById("err").innerHTML = "please enter your email!!";
  document.getElementById("err").style.color="red"
  start.email.focus();
  return false
 }
 if(start.choicebooking.value == ""){
  document.getElementById("err").innerHTML = "please enter your choice-booking!!";
  document.getElementById("err").style.color="red"
  start.choicebooking.focus();
  return false
 }


 if(start.person.value == ""){
  document.getElementById("err").innerHTML = "please enter your person!!";
  document.getElementById("err").style.color="red"
  start.person.focus();
  return false
 }
 if(start.dateselector.value == ""){
  document.getElementById("err").innerHTML = "please enter your date-selector!!";
  document.getElementById("err").style.color="red"
  start.dateselector.focus();
  return false
 }

  document.getElementById("err").innerHTML = "booking success!!";
  document.getElementById("err").style.color="green";
return true

}







 







