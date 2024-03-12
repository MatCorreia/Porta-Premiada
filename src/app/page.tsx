'use client';
import Cartao from '@/components/Cartao';

import styles from "../app/styles/home.module.css";
import Link from 'next/link';
import EntradaNumerica from '@/components/EntradaNumerica';
import { useState } from 'react';

export default function Home() {
  const [qtdePortas, setQtdePortas] = useState<number>(3);
  const [comPresente, setComPresente] = useState<number>(1);

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgColor="#C0392C">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text={"Qtde Portas?"} value={qtdePortas} onChange={(novaQtde: number) => setQtdePortas(novaQtde)} />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text={"Porta com presente?"} value={comPresente} onChange={(novaPortaComPresente: number) => setComPresente(novaPortaComPresente)} />
        </Cartao>
        <Cartao bgColor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`} className={styles.link}>
            <h2>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
