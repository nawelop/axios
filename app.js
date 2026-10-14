const api = axios.create({
    baseUrl: "https://axios-etcm.onrender.com/"
});

const section = "users";
const record = [];

const $ = selector => document.querySelector(selector);

async function listar(endpoint = `$(section)`) {
    try {
        const {data} = await api.get(endpoint);
        return data;
    } catch (tomate) {
        console.log("erro na consulta: " + tomate.message)
    }
    
}
function renderizar () {
    const iUsers = section === "users";
    $(`#page-title`).textcontent = iUsers ? "usuarios" : "produtos";
    $(`#table-head`).innerHTML = iUsers
}
async function carregar(params) {
    record = await listar();
}

carregar();
