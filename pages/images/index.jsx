import React from "react";
import Link from "next/link";
import Image from 'next/image';

export default function ImagePage() {
  return (
    <div>
        <div>
            <Image
                src="/perrito.jpeg"
                alt="Foto de perrito"
                width={500}
                height={500}
            />
        </div>
        <div>
            <Link href="/">
            <a>Página principal</a>
            </Link>
        </div>
    </div>
  );
}