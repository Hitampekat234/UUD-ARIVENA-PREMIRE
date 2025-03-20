function updateDateTime() {

    let now = new Date();

    let tanggal = now.toLocaleDateString('id-ID');

    let waktu = now.toLocaleTimeString('id-ID');

    document.getElementById("waktuTanggal").value = `${tanggal} ${waktu}`;

}



function submitForm() {

    let namaPelaku = document.getElementById("namaPelaku").value;

    let nik = document.getElementById("nik").value;

    let waktuTanggal = document.getElementById("waktuTanggal").value;

    let lokasi = document.getElementById("lokasi").value;

    let namaPetugas = document.getElementById("namaPetugas").value;

    let pangkat = document.getElementById("pangkat").value;

    let devisi = document.getElementById("devisi").value;

    let narasi = document.getElementById("narasi").value;

    let pasalTerpilih = [];



    let ceklis = document.querySelectorAll(".CEKLIS:checked");

    ceklis.forEach((item) => {

        let row = item.closest("tr");

        let pasal = row.cells[0].innerText;

        pasalTerpilih.push(pasal);

    });



    let hasil = `

        <h3>Hasil Laporan:</h3>

        <p><strong>Nama Pelaku:</strong> ${namaPelaku}</p>

        <p><strong>NIK:</strong> ${nik}</p>

        <p><strong>Waktu & Tanggal:</strong> ${waktuTanggal}</p>

        <p><strong>Pasal yang Dilanggar:</strong> ${pasalTerpilih.join(", ")}</p>

        <p><strong>Lokasi Penangkapan:</strong> ${lokasi}</p>

        <p><strong>Nama Petugas:</strong> ${namaPetugas}</p>

        <p><strong>Pangkat:</strong> ${pangkat}</p>

        <p><strong>Devisi:</strong> ${devisi}</p>

        <p><strong>Narasi:</strong> ${narasi}</p>

    `;



    document.getElementById("history").innerHTML = hasil;



    // Reset input dan checkbox setelah submit

    document.getElementById("namaPelaku").value = "";

    document.getElementById("nik").value = "";

    document.getElementById("lokasi").value = "";

    document.getElementById("namaPetugas").value = "";

    document.getElementById("pangkat").value = "";

    document.getElementById("devisi").value = "";

    document.getElementById("narasi").value = "";

    ceklis.forEach((item) => item.checked = false);

}



// Update waktu secara otomatis saat halaman dimuat

window.onload = updateDateTime;

