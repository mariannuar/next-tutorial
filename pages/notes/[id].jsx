import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Note(){
  const router = useRouter();
  const { id }= router.query;

  return (
    <div>
        <h1>Nota: {id} </h1>

        <div>
            <Link href="/notes">
                <a>Notas</a>
            </Link>
        </div>
        <div>
            <Link href="/">
                <a>Página principal</a>
            </Link>
        </div>
    </div>
  )
}
