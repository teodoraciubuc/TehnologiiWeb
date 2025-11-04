const apiUrl = "http://localhost:8000/api/";

async function get(url) {
  return (await axios.get(url)).data;
}

async function post(url, body) {
  return (
    await axios.post(url, JSON.stringify(body), {
      headers: { "Content-Type": "application/json" },
    })
  ).data;
}

// Afișează
async function loadTable() {
  let data = await get(apiUrl + "getList");
  let tableDiv = document.getElementById("tableData");
  if (!data || !tableDiv) return;

  let html = [];
  html.push("<table border='1' id='myTable'>");
  html.push("<tr><th>ID</th><th>Name</th><th>Age</th></tr>");

  for (let item of data) {
    html.push(
      `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.age}</td></tr>`
    );
  }

  html.push("</table>");
  tableDiv.innerHTML = html.join("");
}

//(POST)
async function sendData() {
  let name = document.getElementById("inputName").value;
  let age = document.getElementById("inputAge").value;

  if (!name || !age) {
    alert("Completează numele și vârsta!");
    return;
  }

  await post(apiUrl + "postList", { name, age });
  await loadTable();
}

async function getById() {
  const id = document.getElementById("inputId").value;
  const resultDiv = document.getElementById("result");

  if (!id) {
    alert("Introdu un ID!");
    return;
  }

  try {
    const persoana = await get(apiUrl + "getById/" + id);
    resultDiv.innerHTML = `
            <h3>Rezultat:</h3>
            <p><strong>ID:</strong> ${persoana.id}</p>
            <p><strong>Nume:</strong> ${persoana.name}</p>
            <p><strong>Vârstă:</strong> ${persoana.age}</p>
        `;
  } catch (err) {
    resultDiv.innerHTML = `<p style="color:red;">Persoana cu ID ${id} nu a fost găsită.</p>`;
  }
}
loadTable();
