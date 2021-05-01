const LANGUAGES = [
    'java',
    'C++',
    'Rust',
    'Python',
    'Ruby',
    'F#',
    'Clojure'
]
export const getLanguages = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(LANGUAGES);
        }, 1000);
    });
}