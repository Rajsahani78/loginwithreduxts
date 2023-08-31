import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../Store/Actions/UserAction";
import { useDispatch } from "react-redux";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();

  const onFinish = (values: any) => {
    const formdata = {
      userName: values.userName,
      email: values.email,
      password: values.password,
    };
    if (formdata) {
      dispatch(createUser(formdata)).then((res: any) => {
        localStorage.setItem("email", res?.payload?.email);
        message.success("Redgister Success!");
        navigate("/login");
      });
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    message.error("Signup Failed!");
  };

  const redirectLogin = () => {
    navigate("/login");
  };

  type FieldType = {
    userName: string;
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
          marginTop: "8%",
          width: "600px",
          height: "450px",
          borderRadius: "10px",
          backgroundColor: "cyan",
        }}
      >
        <h1 style={{ marginLeft: "35%" }}>Signup Here</h1>
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          name="basic"
          style={{ maxWidth: 600 }}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="UserName"
            name="userName"
            rules={[{ required: true, min: 3, max: 10 }]}
            style={{ margin: "20px" }}
          >
            <Input style={{ padding: "10px" }} />
          </Form.Item>
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true }]}
            style={{ margin: "20px" }}
          >
            <Input style={{ padding: "10px" }} type="email" />
          </Form.Item>
          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, min: 3, max: 10 }]}
            style={{ margin: "20px" }}
          >
            <Input.Password style={{ padding: "10px" }} />
          </Form.Item>
          <Button type="primary" htmlType="submit" style={{ margin: "20px" }}>
            Signup
          </Button>
          Already User? Please
          <Button
            type="primary"
            style={{ marginLeft: "10px" }}
            onClick={redirectLogin}
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default Signup;
