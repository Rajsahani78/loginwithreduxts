import { Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../Store/Actions/UserAction";
import { useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();

  const email = localStorage.getItem("email");

  const onFinish = (values: any) => {
    if (values?.email && values?.password && !(email === values?.email)) {
      message.error("Wrong Credentials,Please Signup First!");
    }
    if (email === values?.email) {
      dispatch(getUser(values?.email)).then((res: any) => {
        message.success("Login Success!");
        if (res.payload.length > 0) {
          navigate("/");
        }
      });
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    message.error("Login Failed!");
  };

  const redirectSignup = () => {
    navigate("/signup");
  };

  type FieldType = {
    email: string;
    password: string;
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          margin: "auto",
          marginTop: "10%",
          width: "600px",
          height: "350px",
          borderRadius: "10px",
          backgroundColor: "cyan",
        }}
      >
        <h1 style={{ marginLeft: "35%" }}>Login Here</h1>
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          name="basic"
          style={{ maxWidth: 600 }}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true }]}
            style={{ margin: "20px", fontSize: "20px" }}
          >
            <Input style={{ padding: "8px" }} type="email" />
          </Form.Item>
          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, min: 3, max: 10 }]}
            style={{ margin: "20px" }}
          >
            <Input.Password style={{ padding: "8px" }} />
          </Form.Item>
          <Button type="primary" htmlType="submit" style={{ margin: "20px" }}>
            Login
          </Button>
          Don't have an account? Please
          <Button
            type="primary"
            style={{ marginLeft: "12px" }}
            onClick={redirectSignup}
          >
            Signup
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default Login;
