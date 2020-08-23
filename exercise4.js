
// alert(`Perulangan sudah dilakukan sebanyak ${countConfirm}`)
let ask;
let countConfirm = 0;
while (true) {
  ask = confirm("apakah anda mau mengulang?")
    if (ask == false) {
      alert("anda sudah mengulang sebanyak " + count)
        break;
    } else {
      countConfirm++
    }
}