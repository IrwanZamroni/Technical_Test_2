//Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
const char = "NEGIE1";

const cha = char
  .slice(0, char.length - 1)
  .split("")
  .reverse();

const ch = char.slice(char.length - 1);

const r = cha.join("") + ch;
alert(r);

//Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu
class Urutan {
  constructor() {
    this.items = [];
    this.maxs = {};
  }
  push(element) {
    this.items.push(element.split(" "));
  }

  peek() {
    const x = this.items[0];

    for (let i = 0; i < x.length; i++) {
      const c = x[i].length;
      const o = Number(c);

      const b = x[i];
      this.maxs[b] = o;
    }
  }
  isMax() {
    return Math.max(this.max);
  }

  print() {
    console.log(this.items);

    const a = this.maxs;

    let sortable = [];
    for (var vehicle in a) {
      sortable.push([vehicle, a[vehicle]]);
    }

    sortable.sort(function (a, b) {
      return b[1] - a[1];
    });
    console.log(`${sortable[0]} char`);
  }
}
const urutan = new Urutan();
urutan.push("Saya sangat senang mengerjakan soal algoritma");
urutan.peek();
urutan.pop();
urutan.print();

//Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT
function coba(i, b) {
  let freq = {};
  const children = b.concat(i);

  for (const is of children) {
    if (is in freq) {
      freq[is] += 1;
    } else {
      freq[is] = 0;
    }
  }
  return freq;
}

const a = coba(["xc", "dz", "bbb", "dz"], ["bbb", "ac", "dz"]);
console.log(Object.values(a));
