export async function fetchAnbefalet() {
    try {
        // henter data fra din lokale json-fil
        const response = await fetch('assets/data/anbefalet.json');
        
        // konverterer svaret til JSON
        const data = await response.json();

        // returnerer data til den funktion der kalder fetchAnbefalet
        return data;
    } catch (error) {
        // hvis der er en fejl, vises den her
        console.error('Error fetching or parsing data:', error);
    }
}