import Image from "next/image";
import Link from "next/link";

export default function MiddleHeader() {
  return (
    <div className="text-center sm:flex items-center md:w-4/5 m-auto justify-between pt-8 pb-2 sm:py-8 mt-12">
      <Link href="/">
        <Image
          src="/logo-detikcom.png"
          alt="logo"
          width={300}
          height={62}
          layout="intrinsic"
        />
      </Link>
      <Image
        src="https://aeroindomagz.com/wp-content/uploads/2021/01/729x90_3.png"
        width={728}
        height={90}
        layout="intrinsic"
        priority
      />
    </div>
  );
}
