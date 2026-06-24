import React from 'react';

export default function Contato() {
  return (
    <div style={styles.container}>
      {/* Cabeçalho de Contato */}
      <header style={styles.header}>
        <h1 style={styles.title}>CONTATO</h1>
        <p style={styles.subtitle}>Vamos conversar sobre seu projeto.</p>
      </header>

      {/* Grid que coloca Formulário e Informações lado a lado */}
      <div style={styles.mainGrid}>
        
        {/* LADO ESQUERDO: Formulário */}
        <section style={styles.card}>
          <div style={styles.cardContent}>
            <div style={styles.titleWrapper}>
              <div style={styles.orangeBar}></div>
              <h2 style={styles.cardTitle}>Formulário</h2>
            </div>
            
            <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Nome</label>
                <input type="text" style={styles.input} placeholder="Digite seu nome completo" />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>E-mail</label>
                <input type="email" style={styles.input} placeholder="seuemail@exemplo.com" />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Telefone</label>
                <input type="tel" style={styles.input} placeholder="(55) 99999-9999" />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Tipo de Projeto</label>
                <select style={styles.select}>
                  <option>Selecione uma opção</option>
                  <option>Criação de Site</option>
                  <option>Identidade Visual</option>
                  <option>Outros serviços</option>
                </select>
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Mensagem</label>
                <textarea style={styles.textarea} placeholder="Conte sua ideia..."></textarea>
              </div>

              <button type="submit" style={styles.button}>Enviar Mensagem →</button>
            </form>
          </div>
        </section>

        {/* LADO DIREITO: Informações de Contato */}
        <section style={styles.card}>
          <div style={styles.cardContent}>
            <div style={styles.titleWrapper}>
              <div style={styles.orangeBar}></div>
              <h2 style={styles.cardTitle}>Informações</h2>
            </div>
            
            <div style={styles.infoList}>
              <div style={styles.infoItem}>
                <span style={styles.infoLabel}>Localização</span>
                <p style={styles.infoValue}>Santa Rosa - RS</p>
              </div>
              
              <div style={styles.infoItem}>
                <span style={styles.infoLabel}>E-mail profissional</span>
                <p style={styles.infoValue}></p>
              </div>

              <div style={styles.infoItem}>
                <span style={styles.infoLabel}>Telefoneee / WhatsApp</span>
                <p style={styles.infoValue}></p>
              </div>

              <div style={styles.infoItem}>
                <span style={styles.infoLabel}>Redes Sociais</span>
                <p style={styles.infoValue}>@studio.ambar</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#0a0d14',
    color: '#ffffff',
    padding: '30px 20px',
    fontFamily: 'sans-serif',
    maxWidth: '1060px', // Calibrado entre o gigante antigo e o pequeno de antes
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
    margin: '0',
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', 
    gap: '30px', 
    width: '100%',
  },
  card: {
    backgroundColor: '#161b26',
    borderRadius: '12px',
    boxSizing: 'border-box',
    height: 'fit-content',
  },
  cardContent: {
    padding: '28px 30px', // Reduzido de leve para ficar mais compacto
    boxSizing: 'border-box',
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '22px',
  },
  orangeBar: {
    width: '4px',
    height: '22px', 
    backgroundColor: '#ff7a00',
    marginRight: '10px',
    borderRadius: '2px',
  },
  cardTitle: {
    fontSize: '1.3rem', 
    fontWeight: 'bold',
    margin: '0',
    color: '#ffffff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px', 
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '0.88rem',
    color: '#a0a5b0',
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#0a0d14',
    border: '1px solid #2a3142',
    borderRadius: '6px',
    padding: '11px 13px', 
    color: '#ffffff',
    fontSize: '0.92rem',
    outline: 'none',
    boxSizing: 'border-box',
    width: '100%',
  },
  select: {
    backgroundColor: '#0a0d14',
    border: '1px solid #2a3142',
    borderRadius: '6px',
    padding: '11px 13px',
    color: '#ffffff',
    fontSize: '0.92rem',
    outline: 'none',
    boxSizing: 'border-box',
    width: '100%',
    cursor: 'pointer',
  },
  textarea: {
    backgroundColor: '#0a0d14',
    border: '1px solid #2a3142',
    borderRadius: '6px',
    padding: '11px 13px',
    color: '#ffffff',
    fontSize: '0.92rem',
    outline: 'none',
    boxSizing: 'border-box',
    width: '100%',
    minHeight: '105px', 
    resize: 'none',
    fontFamily: 'sans-serif',
  },
  button: {
    backgroundColor: '#ff7a00',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    padding: '12px 22px', 
    fontSize: '0.95rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '5px',
    alignSelf: 'flex-start',
  },
  infoList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px', 
  },
  infoItem: {
    backgroundColor: '#0a0d14',
    padding: '14px 18px', 
    borderRadius: '8px',
    borderLeft: '4px solid #ff7a00',
  },
  infoLabel: {
    fontSize: '0.78rem',
    color: '#8a8f98',
    textTransform: 'uppercase',
    letterSpacing: '0.6px',
    display: 'block',
    marginBottom: '3px',
  },
  infoValue: {
    fontSize: '1rem', 
    color: '#ffffff',
    margin: '0',
  },
};
