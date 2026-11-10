import Image from "next/image";

// Blok teks (kiri) + foto monokrom (kanan). Isi `image` dengan path di /public/images.
export default function Split({ children, image, alt = "" }) {
  return (
    <section className="split">
      <div>{children}</div>
      {image
        ? <Image className="photo" src={image} alt={alt} width={1200} height={1500} />
        : <div className="photo ph" role="img" aria-label="Foto menyusul" />}
    </section>
  );
}
