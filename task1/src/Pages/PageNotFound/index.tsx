import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div style={{ marginLeft: "10%" }}>
      <h1>OOPS PAGE NOT FOUND !</h1>
      <Button type="primary" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </div>
  );
};
export default PageNotFound;
