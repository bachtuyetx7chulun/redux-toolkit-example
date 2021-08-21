import { Button, Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import cryptoRandomString from "crypto-random-string";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { signin, signout } from "./features/auth/auth.slice";
import { IRoom } from "./features/room/room.interface";
import { createRoom } from "./features/room/room.slice";
import { IRoot } from "./features/root/root.interface";
import {
  useGetSettingQuery,
  usePrefetch,
  useUpdateSettingMutation,
} from "./features/setting/settingApi";

function App() {
  const { data, isLoading, isFetching } = useGetSettingQuery("12334551", {});
  const [createSetting, createSettingResult] = useUpdateSettingMutation();

  const prefetchSetting = usePrefetch("getSetting");
  const auth = useSelector((state: IRoot) => state.auth);
  const rooms = useSelector((state: IRoot) => state.rooms);
  const dispatch = useDispatch();

  const signIn = async () => {
    dispatch(
      signin({
        login: true,
        // profile: {
        //   name: "",
        //   email: "",
        //   facebookId: "",
        //   googleId: "",
        //   picture: "",
        //   role: "",
        //   type: "",
        // },
      })
    );
  };
  const signOut = () => {
    dispatch(
      signout({
        login: false,
        // profile: {
        //   name: "",
        //   email: "",
        //   facebookId: "",
        //   googleId: "",
        //   picture: "",
        //   role: "",
        //   type: "",
        // },
      })
    );
  };

  const createRandomRoom = async () => {
    const result = await createSetting({
      id: 123,
      name: 1232,
      age: 11,
    });

    prefetchSetting(cryptoRandomString({ length: 10 }));
    const room: IRoom = {
      id: cryptoRandomString({ length: 10 }),
      name: cryptoRandomString({ length: 10 }),
      playerCount: 1,
      secretKey: cryptoRandomString({ length: 10 }),
      type: "user",
      createAt: new Date().toUTCString(),
      updateAt: new Date().toUTCString(),
    };

    dispatch(createRoom(room));
  };

  return (
    <div className="App">
      <div hidden={!isLoading}>Đang tải</div>
      <div hidden={!isFetching}>Đang lấy dữ liệu</div>
      <div hidden={!createSettingResult.isLoading}>Đang tạo dữ liệu</div>
      {auth.login && (
        <div style={{ marginBottom: "1rem" }}>Người dùng đã đăng nhập</div>
      )}
      <p>
        <Button hidden={auth.login} onClick={signIn} type="dashed">
          Signin
        </Button>
        <Button hidden={!auth.login} onClick={signOut} type="dashed">
          Signout
        </Button>
      </p>
      <Button hidden={!auth.login} onClick={createRandomRoom} type="dashed">
        Create random room
      </Button>
      <Row style={{ marginTop: "1rem" }} gutter={20}>
        {rooms.map((room) => {
          return (
            <Col key={room.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                style={{ width: "100%" }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta title={room.name} description="www.instagram.com" />
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
