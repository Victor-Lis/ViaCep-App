export function cepFormat(value: string) {
    return value.replace(/^(\d{5})(\d{3})$/, "$1-$2")
}
