import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href='/backend' className="flex items-center gap-3">
      <Image src="/logo.png" height={60} width={60} alt="Logo" />
      <Image src="/logo-texto.png" height={0} width={230} alt="Logo" />
    </Link>
  )
}