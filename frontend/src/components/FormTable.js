import { MdClose } from 'react-icons/md';
import "../App.css";
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const FormTable = ({ handleSubmit, handleOnChange, handleClose, rest }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!rest.name) {
      newErrors.name = "Nome é obrigatório.";
    }

    if (!rest.email) {
      newErrors.email = "E-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(rest.email)) {
      newErrors.email = "E-mail inválido.";
    }

    if (!rest.mobile) {
      newErrors.mobile = "Número é obrigatório.";
    } else if (!/^\d{10}$/.test(rest.mobile)) {
      newErrors.mobile = "Número inválido. Deve conter 10 dígitos.";
    }

    if (!rest.address) {
      newErrors.address = "Endereço é obrigatório.";
    }

    if (!rest.birthdate) {
      newErrors.birthdate = "Data de nascimento é obrigatória.";
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(rest.birthdate)) {
      newErrors.birthdate = "Data inválida. Use o formato YYYY-MM-DD.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit(e);
    }
  };

  return (
    <div className="addContainer">
      <form onSubmit={handleFormSubmit}>
        <div className="close-btn" onClick={handleClose}>
          <MdClose />
        </div>
        <label htmlFor="name">Nome :</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleOnChange}
          value={rest.name}
        />
        {errors.name && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">{errors.name}</Alert>
          </Stack>
        )}
        
        <label htmlFor="email">E-mail :</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleOnChange}
          value={rest.email}
        />
        {errors.email && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">{errors.email}</Alert>
          </Stack>
        )}
        
        <label htmlFor="mobile">Número :</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          onChange={handleOnChange}
          value={rest.mobile}
        />
        {errors.mobile && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">{errors.mobile}</Alert>
          </Stack>
        )}
        
        <label htmlFor="address">Endereço :</label>
        <input
          type="text"
          id="address"
          name="address"
          onChange={handleOnChange}
          value={rest.address}
        />
        {errors.address && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">{errors.address}</Alert>
          </Stack>
        )}
        
        <label htmlFor="birthdate">Data de Nascimento :</label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          onChange={handleOnChange}
          value={rest.birthdate}
        />
        {errors.birthdate && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">{errors.birthdate}</Alert>
          </Stack>
        )}
        
        <button className="btn" type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormTable;
