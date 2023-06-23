function go() {
    const name = document.getElementById("inputone").value.trim();
    const Number = document.getElementById("inputtwo").value.trim();
    const EMail = document.getElementById("inputthree").value.trim();
    const Subject = document.getElementById("inputfour").value.trim();
    if (!name || !EMail || !Number | !Subject) {
      alert("Please fill in all fields.");
      return;
    }
    if (isNaN(Number)) {
      alert("Phone number must be numeric!");
      return;
    }
    if (isNaN(EMail)) {
        alert("school ID must be numeric!");
        return;
    }
    if (!/^[a-zA-Z]+$/.test(name) ) {
      alert(" name must contain only letters!");
      return;
    }
    if (message.split(" ").length >100) {
      alert("Message must be a maximum of 100 words!");
      return;
    }
    alert("succeed!");
  }
    