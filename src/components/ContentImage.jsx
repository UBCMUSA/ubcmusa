/**
 * A rounded, framed content image for page sections. Shows at the image's
 * natural aspect ratio scaled to its container width (no cropping). Wrap in a
 * width-constrained parent (e.g. max-w-sm mx-auto) for portrait photos.
 */
export default function ContentImage({ src, alt, className = "" }) {
  return (
    <figure
      className={`overflow-hidden rounded-xl shadow-sm ring-1 ring-steel/10 ${className}`}
    >
      <img src={src} alt={alt} loading="lazy" className="block w-full" />
    </figure>
  );
}
