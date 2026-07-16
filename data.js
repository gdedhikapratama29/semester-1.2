const namaSaya = "dhika";
let usiaSaya = 15;

let biodata = document.getElementById('biodata');

console.log(biodata);

function generateBiodata() {

    let generasi;

    if (usiaSaya > 10 && usiaSaya < 20) {
        generasi = 'generasi muda';
    } else if (usiaSaya > 18 && usiaSaya < 30) {
        generasi = 'generasi dewasa';
    } else if ( usiaSaya >= 30) {
        generasi = 'generasi tua';
    } else if(usiaSaya > 2 && usiaSaya < 10) {
        generasi = 'generasi anak';
    } else {
     // ini adalah kondisitdk terpenuhi
        generasi = 'generasi bayi';
    }

    return  biodata.innerHTML = generasi;

}



generateBiodata();