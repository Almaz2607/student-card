import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { addEditData } from "../utils/edit";
import { getStudentAge } from "../utils/student";

const Main = () => {
  const [data, setData] = useState();
  const history = useHistory();

  useEffect(() => {
    const studentData = localStorage.getItem("student");
    setData(JSON.parse(studentData));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h1 className="mb-4">Карточка студента</h1>
          {data ? (
            <>
              <h5>Имя: {data.name} </h5>
              <h5>Фамилия: {data.surname} </h5>
              <h5>
                Год рождения: {data.birthYear} {getStudentAge(data.birthYear)}
              </h5>
              <h5>
                Портфолио: <a href="#">{data.portfolio}</a>
              </h5>
              <button
                className="btn btn-primary mt-3"
                onClick={() => addEditData(history)}
              >
                Редактировать
              </button>
            </>
          ) : (
            <>
              <h5>Нет данных</h5>
              <button
                className="btn btn-primary mt-3"
                onClick={() => addEditData(history)}
              >
                Добавить
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
