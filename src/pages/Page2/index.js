import logo from "../../Icono.png";
import "./style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useAddTodoMutation } from "../../app/apis/ApiServer";
import Swal from "sweetalert2";

export function PageTwo() {
  const image = useSelector((state) => state.image.value);

  const [addTodo] = useAddTodoMutation();

  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={image != null ? image?.download_url : logo}
          className="App-logo"
          alt="logo"
        />
        <p>
          <b>Autor: </b>
          {image?.author} <br /> <code>{image?.url}</code>
        </p>
      </header>

      <div className="App-line"></div>

      <main className="App-main">
        <div
          style={{
            width: "80%",
          }}
        >
          <h3>Almacenar Imagen</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setTodo({
                    ...todo,
                    title: e.target.value,
                  });
                }}
                value={todo.title}
                type="text"
                placeholder="titulo"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setTodo({
                    ...todo,
                    description: e.target.value,
                  });
                }}
                value={todo.description}
                type="text"
                placeholder="descripcion"
              />
            </Form.Group>
          </Form>
          <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <Button
              onClick={(e) => {
                e.preventDefault();
                addTodo({
                  title: todo.title,
                  description: todo.description,
                  image: image?.download_url,
                })
                  .unwrap()
                  .then((res) => {
                    Swal.fire(
                      "Imagen Almacenada",
                      "la imagen se almaceno correctamente",
                      "success"
                    );
                    setTodo({
                      title: "",
                      description: "",
                    });
                  });
              }}
              size="lg"
            >
              Guardar
            </Button>
          </div>
        </div>
        <Link to="/page3" className="App-link">
          Ver imagenes
        </Link>
        <Link to="/" className="App-link">
          Volver
        </Link>
      </main>
    </div>
  );
}
