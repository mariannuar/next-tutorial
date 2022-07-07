import React from 'react';
import { useRouter } from 'next/router';

export default function Path() {
  const router = useRouter();
  const { params }= router.query;

  // console.log(params);

  return (
    <h1>hello</h1>
  );
}
