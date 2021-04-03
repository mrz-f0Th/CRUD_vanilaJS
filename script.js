const tambahTugas = document.querySelectorAll('.tambah-data');
const btnTambah = document.querySelector('.btn-tambah');
const tBody = document.querySelector('.data-list');


btnTambah.addEventListener('click', () => {
    // Tambah Data Tugas
    tambahData(tambahTugas);

    // get button hapus
    const btnHapus = document.querySelectorAll('.btn-hapus');
    btnHapus.forEach(btn => {
        btn.addEventListener('click', () => {
            Swal.fire({
                width: 400,
                title: 'Apakah anda yakin ?',
                text: "Anda akan menghapus Tugas ini !",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya, Hapus!'
            }).then((result) => {
                if (result.isConfirmed) {
                    const parent = btn.parentElement.parentElement;
                    // Hapus Data Tugas
                    parent.remove();
                    Swal.fire({
                        width: 400,
                        title: 'Terhapus!',
                        text: 'Tugas anda sudah terhapus.',
                        icon: 'success',
                    })
                }
            })
        })
    })

    // get button update
    const btnUpdate = document.querySelectorAll('.btn-update');
    btnUpdate.forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.parentElement.parentElement;
            tambahTugas.forEach((t, i) => {
                // post value to form
                t.value = parent.children[i].textContent;
                parent.remove();

            })
        })
    })
})




function tambahData(tambah) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${tambah[0].value}</td>
                    <td>${tambah[1].value}</td>
                    <td>${tambah[2].value}</td>
                    <td>
                        <a class="btn btn-warning mb-2 mb-md-0 btn-update" href="#tambah-tugas" role="button">Perbarui</a>
                        <button class="btn btn-danger btn-hapus">Hapus</button>
                    </td>`
    if (tambah[0].value != "" && tambah[1].value != "" && tambah[2].value != "") {
        tBody.appendChild(tr);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Isikan data terlebih dahulu !',
            width: 400,
            // footer: '<a href>Why do I have this issue?</a>'
        })
    }
    tambah.forEach(t => t.value = "");
}



const x = window.matchMedia("(max-width: 600px)");


function mobile(x) {
    if (x.matches) {
        const div = document.createElement('div');
        div.innerHTML = `<img width="400" class="rounded mx-auto d-block" src="img/eror.jpg">
                        <h1 class="text-center" >Mobile Version on Going !</h1>`;
        document.querySelector('.global').style.display = "none";
        document.body.appendChild(div);
    } else {
        document.querySelector('.global').style.display = "block"
    }
}

mobile(x);