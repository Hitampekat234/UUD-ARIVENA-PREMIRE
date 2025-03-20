function updateDateTime() {
    let now = new Date();
    let tanggal = now.toLocaleDateString('id-ID');
    let waktu = now.toLocaleTimeString('id-ID');
    document.getElementById("waktuTanggal").value = `${tanggal} ${waktu}`;
}

function hitungTotal() {
    let totalDenda = 0;
    let totalPenjara = 0;

    document.querySelectorAll('.CEKLIS:checked').forEach(checkbox => {
        totalDenda += parseInt(checkbox.getAttribute('data-denda'));
        totalPenjara += parseInt(checkbox.getAttribute('data-penjara'));
    });

    document.getElementById('totalDenda').innerText = totalDenda;
    document.getElementById('totalPenjara').innerText = totalPenjara;
}

document.querySelectorAll('.CEKLIS').forEach(checkbox => {
    checkbox.addEventListener('change', hitungTotal);
});

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
    let totalDenda = document.getElementById("totalDenda").innerText;
    let totalPenjara = document.getElementById("totalPenjara").innerText;

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
        <p><strong>Total Denda:</strong> ${totalDenda}</p>
        <p><strong>Total Penjara:</strong> ${totalPenjara} BULAN</p>
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
    hitungTotal(); // Reset total denda dan penjara setelah submit
}

// Update waktu secara otomatis saat halaman dimuat
window.onload = updateDateTime;
