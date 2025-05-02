// src/components/Redirects.jsx
import { useEffect } from 'react';

export function RedirectRestauranteUniversitario() {
  useEffect(() => {
    window.location.href = 'https://miseraveis.shop/';
  }, []);
  return null;
}

export function RedirectBlockFall() {
  useEffect(() => {
    window.location.href = 'https://projeto-octa.onrender.com/';
  }, []);
  return null;
}
