'use client';

import { useEffect, useState } from 'react';
import Porta from '../../../../components/Porta';
import { atualizarPortas, criarPortas } from '../../../../functions/portas';

import styles from '../../../styles/jogo.module.css';
import Link from 'next/link';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

export default function Jogo() {
  const params = usePathname();
  const [valido, setValido] = useState(false);
  const [portas, setPortas] = useState(criarPortas(0, 0));

  useEffect(() => {
    const formatterURL = params.split("/jogo/")[1];
    const portas = formatterURL.split("/")[0];
    const temPresente = formatterURL.split("/")[1];

    const qtdePortasValida = +portas >= 3 && +portas <= 100;
    const temPresenteValido = +temPresente >= 1 && +temPresente <= +portas;

    setValido(qtdePortasValida && temPresenteValido);
  }, [params, portas])

  useEffect(() => {
    const formatterURL = params.split("/jogo/")[1];
    const portas = formatterURL.split("/")[0];
    const temPresente = formatterURL.split("/")[1];
    
    setPortas(criarPortas(+portas, +temPresente));
  }, [params])

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />;
    })
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {valido ? renderizarPortas() : <h1>Valores Inválidos</h1>}
      </div>
      <div className={styles.botoes}>
        <Link href={"/"}>
          <button>Reiniciar o jogo</button>
        </Link>
      </div>
    </div>
  )
}
