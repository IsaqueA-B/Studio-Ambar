export const aplicarMascaraCPF = (value) => {
    value = value.replace(/\D/g, '').slice(0, 11);
    if (value.length > 9) {
        value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (value.length > 6) {
        value = value.replace(/^(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
    } else if (value.length > 3) {
        value = value.replace(/^(\d{3})(\d{0,3})/, '$1.$2');
    }
    return value;
};

export const aplicarMascaraEmail = (value) => {
    // Permite digitar livremente, mas podemos sugerir @gmail.com como placeholder
    return value.trim().toLowerCase();
};