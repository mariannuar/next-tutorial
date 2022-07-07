import React from "react";
import Link from "next/link";

export default function MainPage() {
  return (
    <div>
      <h1>Página principal</h1>

      <Link href="/notes">
        <a>Notas</a>
      </Link>
    </div>
  );
}
