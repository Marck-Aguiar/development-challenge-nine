const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

// Definindo o Schema
const schemaData = mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  address: String,
  birthdate: { type: Date, default: null } 
}, {
  timestamps: true
});


const userModel = mongoose.model("user", schemaData);

// Leitura dos dados
app.get("/", async (req, res) => {
  try {
    const data = await userModel.find({});
    res.json({ success: true, data: data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erro ao buscar dados!" });
  }
});

// Criando os dados
app.post("/create", async (req, res) => {
  try {
    console.log(req.body);
    const data = new userModel(req.body);
    await data.save();
    res.json({ success: true, message: "Dados salvos com sucesso", data: data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erro ao salvar dado!" });
  }
});

// Atualizando os dados
app.put("/update", async (req, res) => {
  try {
    console.log(req.body);
    const { _id, ...rest } = req.body;
    console.log(rest);
    const data = await userModel.updateOne({ _id: _id }, rest);
    res.json({ success: true, message: "Dados atualizados com successo", data: data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erro ao atualizar dados!" });
  }
});

// Excluindo os dados
app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const data = await userModel.deleteOne({ _id: id });
    res.json({ success: true, message: "Dados excluidos com sucesso!", data: data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erro ao excluir dados!" });
  }
});

mongoose
  .connect("mongodb://localhost:27017/crudmed")
  .then(() => {
    console.log("Conectado ao DB");
    app.listen(PORT, () => console.log("O Servidor está sendo executado"));
  })
  .catch((err) => console.log(err));
