import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormTable from './FormTable';

axios.defaults.baseURL = "http://localhost:8080";

function TablePatient() {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    birthdate: "",
    
  });
  const [formDataEdit, setFormDataEdit] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    birthdate: "",
    _id: ""
  });
  const [dataList, setDataList] = useState([]);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("/create", formData);
    console.log(data);
    if (data.data.success) {
      setAddSection(false);
      alert(data.data.message);
      getFetchData();
      setFormData({
        name: "",
        email: "",
        mobile: "",
        address: "",
        birthdate: ""    
      });
    }
  };

  const getFetchData = async () => {
    const data = await axios.get("/");
    console.log(data);
    if (data.data.success) {
      setDataList(data.data.data);
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  const handleDelete = async (id) => {
    const data = await axios.delete("/delete/" + id);

    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = await axios.put("/update", formDataEdit);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
      setEditSection(false);
    }
  };

  const handleEditOnChange = (e) => {
    const { value, name } = e.target;
    setFormDataEdit((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const handleEdit = (el) => {
    setFormDataEdit(el);
    setEditSection(true);
  };

  return (
    <>
      <div className="container">
        <button className="btn btn-back" onClick={() => navigate('/LandingPage')}>Voltar</button> {/* Use navigate here */}
        <button className="btn btn-add" onClick={() => setAddSection(true)}>Adicionar</button>

        {addSection && (
          <FormTable
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            handleClose={() => setAddSection(false)}
            rest={formData}
          />
        )}
        {editSection && (
          <FormTable
            handleSubmit={handleUpdate}
            handleOnChange={handleEditOnChange}
            handleClose={() => setEditSection(false)}
            rest={formDataEdit}
          />
        )}

        <div className="tableContainer">
        
        <h3 className="tableHeader">Dados dos Pacientes :</h3>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Número</th>
                <th>Endereço</th>
                <th>Data de Nascimento</th>
              </tr>
            </thead>
            <tbody>
              {dataList[0] ? (
                dataList.map((el) => (
                  <tr key={el._id}>
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td>{el.mobile}</td>
                    <td>{el.address}</td>
                    <td>{el.birthdate}</td>
                    <td>
                      <button className="btn btn-edit" onClick={() => handleEdit(el)}>Editar</button>
                      <button className="btn btn-delete" onClick={() => handleDelete(el._id)}>Excluir</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="4">Sem dados!</td></tr>              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TablePatient;
