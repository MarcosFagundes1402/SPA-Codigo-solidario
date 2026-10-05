export function saveRegistration(data) {
  const registrations = JSON.parse(localStorage.getItem("registrations")) || [];

  registrations.push(data);

  localStorage.setItem("registrations", JSON.stringify(registrations));
}
