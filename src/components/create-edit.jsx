import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import TextField from "./textField";
import { validator } from "../utils/validator";
import Modal from "./modal";
import { toggleToMainPage } from "../utils/toggle";

const CreateEdit = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    birthYear: "",
    portfolio: "",
  });
  const [errors, setErrors] = useState({});
  const [edit, setEdit] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const studentData = localStorage.getItem("student");
    if (!studentData) return;
    setData(JSON.parse(studentData));
    setEdit(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "birthYear") {
      const regExp = /\D/gi;
      const numberValue = value.replace(regExp, "");
      setData((prevState) => ({
        ...prevState,
        [name]: numberValue,
      }));
    } else {
      setData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleUpdate = () => {
    localStorage.setItem("student", JSON.stringify(data));
    setEdit(false);
  };

  const validatorConfig = {
    name: { isRequired: { message: 'Поле "Имя" обязательно для заполнения' } },
    surname: {
      isRequired: { message: 'Поле "Фамилия" обязательно для заполнения' },
    },
    birthYear: {
      isRequired: { message: 'Поле "Год рождения" обязательно для заполнения' },
      isBirthYear: { message: 'Поле "Год рождения" некорректно', value: 4 },
    },
    portfolio: {
      isRequired: { message: 'Поле "Портфолио" обязательно для заполнения' },
      isURL: { message: 'Поле "Портфолио" должно быть ссылкой' },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    localStorage.setItem("student", JSON.stringify(data));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          {edit ? <h1>Редактировать</h1> : <h1>Создать</h1>}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Имя"
              name="name"
              value={data.name}
              onChange={handleChange}
              error={errors.name}
            />
            <TextField
              label="Фамилия"
              name="surname"
              value={data.surname}
              onChange={handleChange}
              error={errors.surname}
            />
            <TextField
              label="Год рождения"
              name="birthYear"
              value={data.birthYear}
              onChange={handleChange}
              error={errors.birthYear}
            />
            <TextField
              label="Портфолио"
              name="portfolio"
              value={data.portfolio}
              onChange={handleChange}
              error={errors.portfolio}
            />
            {edit ? (
              <div>
                <button
                  className="btn btn-secondary me-2"
                  onClick={() => toggleToMainPage(history)}
                >
                  Назад
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                  onClick={handleUpdate}
                >
                  Обновить
                </button>
              </div>
            ) : (
              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                type="submit"
                disabled={!isValid}
              >
                Создать
              </button>
            )}

            <Modal />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEdit;
