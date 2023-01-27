import "./style.css";
import { useNavigate } from "react-router-dom";
import { Carousel, Spinner } from "react-bootstrap";
import { useGetPhotosQuery } from "../../app/apis/ApiPhotos";
import { setImage } from "../../app/slices/ImageSlice";
import { useDispatch } from "react-redux";

export function HomePage() {
  const { data, isLoading } = useGetPhotosQuery();

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    <div>
      <Carousel
      interval={10000}
      >
        {data
          ?.map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={value.download_url}
                alt="First slide"
              />
              <Carousel.Caption>
                <h1
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    dispatch(setImage(value))
                    navigate("/page2")
                  }}
                >
                  <u>Seleccionar imagen</u>{" "}
                </h1>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
}
