'use client'

import React, { useEffect, useState } from 'react'



const page = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/hello')
          .then((response) => response.json())
          .then((data) => setMessage(data.message));
      }, []);
  return (
    <div>
      <h1>Bienvenido a mi aplicación Next.js 14 con TypeScript</h1>
      <p>Esta es una aplicación simple para entender la lógica del desarrollo.</p>
      <p>Mensaje de la API: {message}</p>
    </div>
  )
}

export default page
