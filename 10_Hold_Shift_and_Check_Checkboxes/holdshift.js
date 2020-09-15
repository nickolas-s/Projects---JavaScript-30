const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastCheck;

function handleCheck(e) {
  let inBetween = false;

  if (e.shiftKey && e.target.checked) {
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === e.target || checkbox === lastCheck) {
        inBetween = !inBetween;
        console.log('starting check');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastCheck = e.target;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
