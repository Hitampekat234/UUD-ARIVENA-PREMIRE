document.addEventListener("DOMContentLoaded", function () {
    var historyNames = [];

    function submitForm() {
        var nama = document.getElementById("namaPelaku").value;
        var dendaTotal = 0;
        var penjaraTotal = 0;
        var history = document.getElementById("history");

        // Inisialisasi string untuk riwayat
        var historyEntry = `Nama: ${nama}, Pasal: `;

        // Menghitung jumlah denda dan penjara yang dicentang
        var checkboxes = document.querySelectorAll(".CEKLIS:checked");
        checkboxes.forEach(function (checkbox) {
            var row = checkbox.parentNode.parentNode;
            var uuText = row.cells[0].innerText;
            var nilaiDenda = parseInt(row.cells[3].innerText) || 0;
            var nilaiPenjara = parseInt(row.cells[4].innerText) || 0;
            dendaTotal += nilaiDenda;
            penjaraTotal += nilaiPenjara;

            // Menambahkan UU ke string riwayat
            historyEntry += uuText + ", ";
        });

        // Menghapus koma terakhir jika ada pasal yang dipilih
        if (checkboxes.length > 0) {
            historyEntry = historyEntry.slice(0, -2);
        } else {
            historyEntry += "Tidak ada pasal yang dipilih";
        }

        // Tambahkan denda dan penjara ke riwayat
        historyEntry += ` | Denda: ${dendaTotal} | Penjara: ${penjaraTotal} bulan`;

        // Menambahkan entri ke dalam riwayat di bawah yang sebelumnya
        var newEntry = document.createElement("div");
        newEntry.textContent = historyEntry;
        history.prepend(newEntry);

        // Menambahkan nama ke historyNames jika belum ada
        if (!historyNames.includes(nama)) {
            historyNames.push(nama);
        }

        // Menampilkan nama di history
        document.getElementById("history").innerText = "History Nama: " + historyNames.join(", ");

        // Mengosongkan input form
        document.getElementById("namaPelaku").value = "";
        document.getElementById("denda").value = dendaTotal;
        document.getElementById("penjara").value = penjaraTotal;

        // Mereset ceklis pasal
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }

    // Menampilkan input pengguna di hasil laporan secara otomatis
    const inputs = [
        { id: "namaPelaku", output: "outputNamaPelaku" },
        { id: "nikPelaku", output: "outputNIKPelaku" },
        { id: "lokasi", output: "outputLokasi" },
        { id: "namaPetugas", output: "outputNamaPetugas" },
        { id: "pangkat", output: "outputPangkat" },
        { id: "devisi", output: "outputDevisi" },
        { id: "narasi", output: "outputNarasi" },
    ];

    inputs.forEach(item => {
        let inputField = document.getElementById(item.id);
        let outputField = document.getElementById(item.output);

        inputField.addEventListener("input", function () {
            outputField.textContent = inputField.value;
        });
    });

    // Menyorot baris pasal yang diceklis
    function setupCheckboxListeners() {
        let checkboxes = document.querySelectorAll("input[type='checkbox']");
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("change", function () {
                if (this.checked) {
                    this.parentElement.parentElement.style.backgroundColor = "#ffcccc"; // Warna merah muda jika dipilih
                } else {
                    this.parentElement.parentElement.style.backgroundColor = ""; // Kembali ke default
                }
            });
        });
    }

    setupCheckboxListeners();

    // Menambahkan event listener ke tombol submit
    document.getElementById("submitBtn").addEventListener("click", submitForm);
});
