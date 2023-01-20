export async function getCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) throw new Error("Error: " + response.status);
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof ErrorEvent) console.error("Error " + error.message);
  }
}
