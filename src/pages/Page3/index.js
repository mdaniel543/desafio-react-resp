import { Link } from "react-router-dom";
import { CardGroup, Card, Spinner, Button } from "react-bootstrap";
import {
  useGetTodosQuery,
  useDeleteTodoMutation,
} from "../../app/apis/ApiServer";
import Swal from "sweetalert2";

export function PageThree() {
  const { data, isLoading } = useGetTodosQuery();

  const [deleteTodo] = useDeleteTodoMutation();

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "25rem",
          height: "100%",
          width: "100%",
        }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="App">
      <CardGroup>
        {data.map((value) => (
          <Card>
            <Card.Img
              style={{ height: "160px", width: "410px" }}
              variant="top"
              src={value.image}
            />
            <Card.Body>
              <Card.Title>{value.title}</Card.Title>
              <Card.Text>{value.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  deleteTodo(value.id)
                    .unwrap()
                    .then((res) => {
                      Swal.fire(
                        "Eliminado",
                        "Se elimino correctamente",
                        "success"
                      );
                    });
                }}
              >
                Eliminar
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </CardGroup>
      <div
        style={{
          marginTop: "5rem",
          marginRight: "5rem",
        }}
      >
        <Link to="/page2" className="App-link">
          Volver
        </Link>
      </div>
    </div>
  );
}
