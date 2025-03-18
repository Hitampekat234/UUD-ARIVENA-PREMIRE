function submitForm() {
    let nama = document.getElementById("nama").value;
    let devisi = document.getElementById("devisi").value;
    let dendaTotal = 0;
    let penjaraTotal = 0;
    let ceklis = document.querySelectorAll(".CEKLIS:checked");
    let pasalTerpilih = [];

    ceklis.forEach((item) => {
        let row = item.closest("tr");
        let pasal = row.cells[0].innerText;
        let deskripsi = row.cells[2].innerText;
        let denda = parseInt(row.cells[3].innerText);
        let penjara = parseInt(row.cells[4].innerText);

        dendaTotal += denda;
        penjaraTotal += penjara;
        pasalTerpilih.push(`${pasal} - ${deskripsi}`);
    });

    let hasil = `
        <h3>Hasil Input:</h3>
        <p><strong>Nama Anggota:</strong> ${nama}</p>
        <p><strong>Devisi:</strong> ${devisi}</p>
        <p><strong>Pasal yang Dicentang:</strong></p>
        <ul>${pasalTerpilih.map(pasal => `<li>${pasal}</li>`).join("")}</ul>
        <p><strong>Total Denda:</strong> ${dendaTotal}</p>
        <p><strong>Total Penjara:</strong> ${penjaraTotal} bulan</p>
    `;

    document.getElementById("history").innerHTML = hasil;

    // Reset input dan checkbox setelah submit
    document.getElementById("nama").value = "";
    document.getElementById("devisi").value = "";
    ceklis.forEach((item) => item.checked = false);
}
