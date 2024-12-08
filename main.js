
var SiteNameInput = document.getElementById('SiteName');
var SiteURLInput = document.getElementById('SiteURL');
var submitButton = document.getElementById('submitButton');
var bookmarks = [];

function bookmark() {
  var errorMessages = [];
  
  // إزالة الدائرة الحمراء أولاً
  removeError(SiteNameInput);
  removeError(SiteURLInput);
  
  // التحقق من صحة البيانات
  if (SiteNameInput.value.trim().length < 3) {
    errorMessages.push("Site name must contain at least 3 characters.");
    showError(SiteNameInput); // إظهار الدائرة الحمراء في حالة الخطأ
  }

  if (SiteURLInput.value.trim() === "" || !(SiteURLInput.value.startsWith("http://") || SiteURLInput.value.startsWith("https://"))) {
    errorMessages.push("Site URL must be a valid one.");
    showError(SiteURLInput); // إظهار الدائرة الحمراء في حالة الخطأ
  }
  
  // إذا كان هناك رسائل خطأ، إظهارها
  if (errorMessages.length > 0) {
    showErrorModal(errorMessages);
  } else {
    // إضافة الموقع إذا كانت البيانات صحيحة
    var mark = {
      Name: SiteNameInput.value.trim(),
      URL: SiteURLInput.value.trim()
    };
    bookmarks.push(mark);
    console.log(bookmarks);
    
    // مسح الحقول بعد إضافة العلامة
    SiteNameInput.value = "";
    SiteURLInput.value = "";
  }
}

// دالة لإظهار الدائرة الحمراء داخل الحقل
function showError(inputElement) {
  var container = inputElement.parentElement;
  inputElement.classList.add("error");
  var errorIcon = document.createElement("div");
  errorIcon.classList.add("error-icon");
  
}

// دالة لإزالة الدائرة الحمراء عند التحقق من المدخلات
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
  errorList.innerHTML = ""; // Clear previous error messages
  
  // Add the new error messages to the modal
  errorMessages.forEach(function(message) {
    var li = document.createElement("li");
    li.textContent = message;
    errorList.appendChild(li);
  });
  
  // Show the modal
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
