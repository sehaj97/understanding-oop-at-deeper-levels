javascript: (() => {
  var inputFields = document.getElementsByTagName("input");
  for (var i = 0; i < inputFields.length; i++) {
    if (
      inputFields[i].type == "text" &&
      inputFields[i].value.match(/<script>/i)
    ) {
      alert(
        "XSS vulnerability detected in input field: " + inputFields[i].name
      );
    } else {
      alert("NO XSS " + inputFields[i].name);
    }
  }
})();
