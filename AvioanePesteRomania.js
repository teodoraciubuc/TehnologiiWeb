async function planesRetrieval() {
  const uri = "https://opensky-network.org/api/states/all";

  try {
    const raspuns = await fetch(uri);
    const data = await raspuns.json();

    // limite România
    const minLat = 44;
    const maxLat = 49;
    const minLon = 20;
    const maxLon = 30;

    const planes = data.states.filter((plane) => {
      const lat = plane[6];
      const lon = plane[5];
      return lat >= minLat && lat <= maxLat && lon >= minLon && lon <= maxLon;
    });

    console.log(`Avioane găsite: ${planes.length}`);
    console.log(planes);
  } catch (err) {
    console.error("Eroare", err);
  }
}
planesRetrieval();
