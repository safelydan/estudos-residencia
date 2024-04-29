import Cliente from "./modelTest1.js";

(async () => {
    const cliente1 = await Cliente.create({ nome: "Alberto" });
    console.log(cliente1 instanceof Cliente);
    console.log(cliente1.nome);
  })();