var pelangganError = document.getElementById('pelanggan-error');
var catalogError = document.getElementById('catalog-error');
var benangError = document.getElementById('benang-error');
var bayarError = document.getElementById('bayar-error');

function validatePelanggan(){
    var pelanggan = document.getElementById('for-pelanggan').value;

    if(pelanggan.length == 0){
        pelangganError.innerHTML = '<text>Tidak boleh kosong!</text>';
        return false;
    }
    else{
        pelangganError.innerHTML = '<b>Valid</b>';
        return true;
    }
}

function validateCatalog(){
    var catalog = document.getElementById('for-catalog').value;

    if(catalog.length == 0){
        catalogError.innerHTML = '<text>Tidak boleh kosong!</text>';
        return false;
    }
    else{
        catalogError.innerHTML = '<b>Valid</b>';
        return true;
    }
}

function validateBenang(){
    var benang = document.getElementById('for-benang').value;

    if(benang.length == 0){
        benangError.innerHTML = '<text>Tidak boleh kosong!</text>';
        return false;
    }
    else{
        benangError.innerHTML = '<b>Valid</b>';
        return true;
    }
}

function validateBayar(){
    var bayar = document.getElementById('for-bayar').value;

    if(bayar.length == 0){
        bayarError.innerHTML = '<text>Tidak boleh kosong!</text>';
        return false;
    }
    else{
        bayarError.innerHTML = '<b>Valid</b>';
        return true;
    }
}

function validateForm(){

    if(!validatePelanggan() ||!validateCatalog() || !validateBenang() || !validateBayar() ){
        Swal.fire("Masih ada bagian yang kosong !");
        return false;
        
        }
    else{
        swal.fire({
            title: 'Data tersimpan',
            timer: 1500
            })
    return true;
    }
}

const logout = document.getElementById('logout');
    logout.addEventListener('click', function(){
    swal.fire({
        title: 'Anda berhasil Log-out',
        timer: 1600
    })
})