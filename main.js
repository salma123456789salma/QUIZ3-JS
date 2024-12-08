
var SiteNameInput = document.getElementById('SiteName');
var SiteURLInput = document.getElementById('SiteURL');
var submitButton = document.getElementById('submitButton');
var bookmarks = [];

function bookmark() {
  var errorMessages = [];
  
 
  removeError(SiteNameInput);
  removeError(SiteURLInput);
  
  
  if (SiteNameInput.value.trim().length < 3) {
    errorMessages.push("Site name must contain at least 3 characters.");
    showError(SiteNameInput); 
  }

  if (SiteURLInput.value.trim() === "" || !(SiteURLInput.value.startsWith("http://") || SiteURLInput.value.startsWith("https://"))) {
    errorMessages.push("Site URL must be a valid one.");
    showError(SiteURLInput); 
  }
  
  
  if (errorMessages.length > 0) {
    showErrorModal(errorMessages);
  } else {
    
    var mark = {
      Name: SiteNameInput.value.trim(),
      URL: SiteURLInput.value.trim()
    };
    bookmarks.push(mark);
    console.log(bookmarks);
    
    
    SiteNameInput.value = "";
    SiteURLInput.value = "";
  }
}


function showError(inputElement) {
  var container = inputElement.parentElement;
  inputElement.classList.add("error");
  var errorIcon = document.createElement("div");
  errorIcon.classList.add("error-icon");
  
}


function removeError(inputElement) {
  var container = inputElement.parentElement;
  inputElement.classList.remove("error");
  var errorIcon = container.querySelector(".error-icon");
  if (errorIcon) {
    container.removeChild(errorIcon);
  }
}

function showErrorModal(errorMessages) {
  var modal = document.getElementById("errorModal");
  var errorList = document.getElementById("errorList");
  errorList.innerHTML = ""; 
  errorMessages.forEach(function(message) {
    var li = document.createElement("li");
    li.textContent = message;
    errorList.appendChild(li);
  });
  
  
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("errorModal");
  modal.style.display = "none";
}

function moveToNext(event, nextFieldId) {
  if (event.key === 'Enter') {
    var nextField = document.getElementById(nextFieldId);
    if (nextField) {
      nextField.focus();
    }
  }
}
