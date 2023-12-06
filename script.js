function updateCard() {
  const name = document.getElementById("nameInput").value;
  const jobTitle = document.getElementById("jobInput").value;
  const email = document.getElementById("emailInput").value;
  const phone = document.getElementById("phoneInput").value;
  const website = document.getElementById("websiteInput").value;

  document.getElementById("name").innerText = name;
  document.getElementById("jobTitle").innerText = jobTitle;
  document.getElementById("email").innerText = `Email: ${email}`;
  document.getElementById("phone").innerText = `Teléfono: ${phone}`;
  document.getElementById("website").innerText = `Web: ${website}`;
}

function saveAsPDF() {
  const card = document.getElementById("businessCard");
  const pdf = new jsPDF();
  pdf.html(card, {
    callback: function (pdf) {
      pdf.save("tarjeta_presentacion.pdf");
    },
  });
}
