import React from 'react';

export default function Blog() {
  return (
    <div style={styles.container}>
      {/* Cabeçalho do Blog */}
      <header style={styles.header}>
        <h1 style={styles.title}>BLOG</h1>
        <p style={styles.subtitle}>Dicas, trends e novidades do mundo do design.</p>
        <p style={styles.highlightText}>Confira nossas novidades mais recentes relacionadas a tecnologia e criação de um site!!!</p>
      </header>

      {/* SEÇÃO 1: Manchete Principal (Horizontal Larga) */}
      <section style={styles.sectionRow}>
        <div style={styles.mainCard}>
          <div style={styles.cardContent}>
            <span style={styles.date}>05/06/2026</span>
            <h2 style={styles.mainCardTitle}>Como um bom design pode aumentar suas vendas em até 200%</h2>
            <p style={styles.cardDescription}>
              A importância da criação de identidades visuais estratégicas. Entenda como marcas que investem em experiência visual e posicionamento estético convertem muito mais clientes e dominam o mercado digital.
            </p>
            <span style={styles.readMore}>Quero ler o artigo completo →</span>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: Duas Colunas (Tendências e Mercado) */}
      <section style={styles.sectionGridTwo}>
        <div style={styles.card}>
          <div style={styles.cardContent}>
            <span style={styles.date}>10/06/2026</span>
            <h3 style={styles.cardTitle}>5 tendências de branding para 2026</h3>
            <p style={styles.cardDescription}>O minimalismo caloroso e o uso de IA nas marcas. Novidades estéticas que vão fazer muito sucesso no próximo ano.</p>
            <span style={styles.readMore}>Ler artigo →</span>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardContent}>
            <span style={styles.date}>01/06/20266</span>
            <h3 style={styles.cardTitle}>Por que sua empresa precisa de um site profissional</h3>
            <p style={styles.cardDescription}>Entenda como o desenvolvimento web sob medida constrói autoridade e ajuda nos empreendimentos das empresas no Google.</p>
            <span style={styles.readMore}>Ler artigo →</span>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#0a0d14',
    color: '#ffffff',
    padding: '30px 20px',
    fontFamily: 'sans-serif',
    maxWidth: '1060px', // Reduzido de 1200px para 1060px para casar com o Contato
    margin: '0 auto',
    boxSizing: 'border-box',
    width: '100%',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.4rem', 
    letterSpacing: '4px',
    color: '#f3e5d8',
    margin: '0 0 8px 0',
  },
  subtitle: {
    color: '#8a8f98',
    fontSize: '1rem',
    margin: '0 0 12px 0',
  },
  highlightText: {
    color: '#ff7a00',
    fontWeight: 'bold',
    fontSize: '0.95rem',
  },
  sectionRow: {
    marginBottom: '25px',
    width: '100%',
  },
  sectionGridTwo: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', 
    gap: '30px', 
    width: '100%',
  },
  mainCard: {
    backgroundColor: '#161b26',
    borderRadius: '12px',
    borderLeft: '4px solid #ff7a00',
    boxSizing: 'border-box',
  },
  card: {
    backgroundColor: '#161b26',
    borderRadius: '12px',
    borderLeft: '4px solid #ff7a00',
    boxSizing: 'border-box',
  },
  cardContent: {
    padding: '28px 30px', // Compactado para as caixas ficarem menores e elegantes
    textAlign: 'left',
    boxSizing: 'border-box',
  },
  date: {
    color: '#5c6370',
    fontSize: '0.8rem',
    display: 'block',
    marginBottom: '8px',
  },
  mainCardTitle: {
    fontSize: '1.35rem', 
    margin: '0 0 10px 0',
    fontWeight: 'bold',
    lineHeight: '1.4',
  },
  cardTitle: {
    fontSize: '1.2rem', 
    margin: '0 0 10px 0',
    fontWeight: 'bold',
    lineHeight: '1.4',
  },
  cardDescription: {
    color: '#a0a5b0',
    lineHeight: '1.5',
    fontSize: '0.92rem',
    margin: '0 0 12px 0',
  },
  readMore: {
    color: '#ff7a00',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    display: 'inline-block',
  }
};