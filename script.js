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
        totalDenda += parseInt(checkbox.getAttribute('data-denda')) || 0;
        totalPenjara += parseInt(checkbox.getAttribute('data-penjara')) || 0;
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
    let totalDenda = document.getElementById("totalDenda").innerText;
    let totalPenjara = document.getElementById("totalPenjara").innerText;

    let hasil = `
        <h3>Hasil Form</h3>
        <p><b>Nama Pelaku:</b> ${namaPelaku}</p>
        <p><b>NIK:</b> ${nik}</p>
        <p><b>Waktu & Tanggal:</b> ${waktuTanggal}</p>
        <p><b>Lokasi:</b> ${lokasi}</p>
        <p><b>Nama Petugas:</b> ${namaPetugas}</p>
        <p><b>Pangkat:</b> ${pangkat}</p>
        <p><b>Divisi:</b> ${devisi}</p>
        <p><b>Narasi:</b> ${narasi}</p>
        <p><b>Total Denda:</b> ${totalDenda}</p>
        <p><b>Total Penjara:</b> ${totalPenjara} hari</p>
    `;

    document.getElementById("history").innerHTML = hasil;
}
