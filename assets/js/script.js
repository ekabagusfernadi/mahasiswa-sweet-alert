// nama function Sweetalert adalah Swal.fire() 3 parameter = "judul", "text dibwh judul", "tipe sweetalertnya mau apa"
// Swal.fire("Hello World", "Latihan Sweetalert", "success")

// Swal.fire({
// 	title: "Error!",
// 	text: "Do you want to continue",
// 	icon: "error",
// 	confirmButtonText: "Cool",
// });

// ini pakai jquery
const flashData = $(".flash-data").data("flashdata");

if (flashData) {
	Swal.fire({
		title: "Data Mahasiswa",
		text: "Berhasil " + flashData,
		icon: "success",
		confirmButtonText: "Oke",
	});
}

// ini untuk tombol hapus
$(".tombol-hapus").on("click", function (e) {
	// yang pertama matikan dulu hrefnya, karena confrim default browser tidak akan menjalankan href jika tidak dikonfirmasi sedangkan sweetalert tetap akan menjalankan href saat alert muncul
	e.preventDefault();
	const href = $(this).attr("href"); // tombol hapus yang diklik akan diambil attribut hrefnya

	Swal.fire({
		title: "Apakan anda yakin?",
		text: "data mahasiswa akan dihapus!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Hapus Data!",
	}).then((result) => {
		if (result.isConfirmed) {
			// Swal.fire("Deleted!", "Your file has been deleted.", "success");
			// yang akan menjalankan hrefnya bukan html tapi javascript
			document.location.href = href;
		}
	});
});
