export const SITE = {
  name: "Onyx Padel",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://onyxpadel.com",
  phoneDisplay: "+62 851-7789-0891",
  phone: "+6285177890891",
  wa: "https://wa.me/6285177890891",
  ayo: "https://ayo.co.id/v/onyx-padel",
  reclub: "https://reclub.co/id/clubs/@onyx-padel",
  maps: "https://maps.app.goo.gl/AHZuwWXHo2zTda3n6",
  address: "Jl. Rorojonggrang No.1, Bencongan Indah, Kecamatan Kelapa Dua, Kabupaten Tangerang, Banten 15810",
  geo: { lat: -6.2165818, lng: 106.6007531 },
};

export const NAV = [
  { href: "/about", label: "Tentang" },
  { href: "/facilities", label: "Fasilitas" },
  { href: "/pricing", label: "Harga" },
  { href: "/rules", label: "Aturan" },
  { href: "/location", label: "Lokasi" },
];

export const ABOUT = [
  "Onyx Padel adalah private padel venue eksklusif di Karawaci, Kelapa Dua, Kabupaten Tangerang, dengan 2 court yang dirancang untuk pengalaman bermain yang lebih nyaman dan personal.",
  "Dengan suasana yang lebih private, kamu bisa bermain tanpa keramaian. Setelah bermain, tersedia sauna dan cold plunge untuk membantu pemulihan tubuh, relaksasi, dan mengembalikan energi.",
  "Tempat yang pas untuk olahraga, recovery, dan quality time bersama teman atau komunitas.",
];

export const HIGHLIGHTS = [
  { t: "Private padel experience", d: "Venue eksklusif dengan suasana lebih nyaman dan tidak terlalu ramai." },
  { t: "2 premium padel courts", d: "Lapangan berkualitas untuk pengalaman bermain terbaik." },
  { t: "Sauna dan cold plunge", d: "Fasilitas recovery untuk relaksasi setelah bermain." },
  { t: "Exclusive and intimate", d: "Cocok untuk bermain bersama teman, komunitas, atau sesi latihan." },
  { t: "Modern sports lifestyle", d: "Kombinasi olahraga dan recovery dalam satu tempat." },
];

export const FACILITIES = [
  "Sauna", "Cold plunge", "Hot shower", "Shower", "Toilet", "Ruang ganti",
  "Tribun penonton", "Wi-Fi", "Parkir mobil", "Parkir motor",
  "Makanan ringan", "Minuman",
];

export const PRICING = [
  { title: "Weekday", rows: [
    ["07.00 - 10.00", 225000], ["11.00 - 16.00", 175000],
    ["17.00 - 23.00", 225000], ["23.00 - 00.00", 175000],
  ] },
  { title: "Weekend (Minggu)", rows: [["Flat per jam", 150000]] },
];

export const RULES = [
  { title: "Aturan venue", items: [
    "Datang minimal 10 menit sebelum waktu bermain yang dipesan.",
    "Setiap sesi bermain mengikuti waktu booking yang telah ditentukan.",
    "Gunakan sepatu olahraga yang sesuai untuk padel/tennis court agar kualitas lapangan terjaga.",
    "Dilarang membawa makanan dan minuman selain air minum ke area lapangan.",
    "Jaga kebersihan, kenyamanan, dan ketertiban selama berada di venue.",
    "Setiap pemain bertanggung jawab atas barang pribadi masing-masing.",
    "Dilarang merokok di area lapangan dan area fasilitas indoor.",
    "Anak di bawah umur harus berada dalam pengawasan orang tua atau pendamping.",
    "Kerusakan fasilitas akibat kelalaian pengguna menjadi tanggung jawab pengguna.",
    "Manajemen berhak menolak atau menghentikan aktivitas jika terjadi pelanggaran aturan venue.",
  ] },
  { title: "Aturan sauna dan cold plunge", items: [
    "Hanya untuk pengguna yang telah melakukan booking.",
    "Disarankan maksimal 10-15 menit per sesi.",
    "Bilas tubuh terlebih dahulu sebelum menggunakan cold plunge.",
    "Gunakan handuk atau pakaian yang sesuai.",
    "Pengguna dengan kondisi kesehatan tertentu disarankan berkonsultasi dengan dokter terlebih dahulu.",
    "Gunakan fasilitas secara bergantian dan jaga kenyamanan pengguna lain.",
    "Manajemen tidak bertanggung jawab atas risiko kesehatan akibat penggunaan yang tidak sesuai anjuran.",
  ] },
  { title: "Kebijakan booking", items: [
    "Booking dilakukan melalui aplikasi atau sistem reservasi yang tersedia.",
    "Pembayaran dilakukan sesuai ketentuan untuk mengamankan slot booking.",
    "Reschedule hanya 1 kali dan paling lambat 1 hari sebelum jadwal sewa.",
    "Reservasi tidak dapat dibatalkan dan tidak ada refund.",
    "Keterlambatan tidak menambah waktu bermain dan tetap mengikuti slot yang dipesan.",
    "Pada kondisi tertentu (cuaca ekstrem atau kendala teknis), manajemen berhak menjadwalkan ulang sesi bermain.",
  ] },
];
