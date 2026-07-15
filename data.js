const namaSaya = "dhika";
let usiaSaya = 19;


function generateBiodata() {
    if (usiaSaya > 10 && usiaSaya < 20) {
     // ini adalah kondisi pertama
     console.log('anda remaja');
    } else if (usiaSaya > 18 && usiaSaya < 30) {
        console.log('anda dewasa')
    } else {
     // ini adalah kondisitdk terpenuhi
     console.log('wah elu jenis yang mana yak');
    }

}




generateBiodata();