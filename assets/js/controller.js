$(document).ready(function () {
  $("nav a").pageNav({ scroll_shift: $("nav").outerHeight() + 20 });
});

function openWhats() {
  window.open(
    "https://api.whatsapp.com/send?phone=+5515997673763&text=Olá,%20preciso%20da%20pumalog",
    "_blank"
  );
}
