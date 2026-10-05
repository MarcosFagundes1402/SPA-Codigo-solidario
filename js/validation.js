export function validateForm(form) {
  if (!form.checkValidity()) {
    form.reportValidity();
    return false;
  }

  return true;
}
