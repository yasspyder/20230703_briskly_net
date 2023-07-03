import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getProfile, editProfile } from "../store/slices/profileSlice";
import declension from "../services/declension";

function ProfilePage() {
  const loading = useSelector((state) => state.profile.loading);
  const profilePageData = useSelector((state) => state.profile.profilePageData);
  const error = useSelector((state) => state.profile.error);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [surname, setSurmame] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (!profilePageData) {
      dispatch(getProfile());
    }
    setName(profilePageData?.name);
    setSurmame(profilePageData?.surname);
    if (!error) {
      setPassword("");
    }
  }, [dispatch, profilePageData]);

  // const confirmPasswordHandle = (e) => {
  //   setConfirmPassword(e.target.value);
  // };

  const submitHandle = (e) => {
    e.preventDefault();
    const data = {
      name,
      surname,
      password,
    };
    dispatch(editProfile(data));
  };

  return (
    <div className="container-fluid text-center pb-5">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="mb-5">Здравствуйте, {profilePageData?.name}</h2>
          <div className="profile-container">
            <div>
              <div className="profile-image-container">
                <img
                  src={profilePageData?.image_url}
                  alt="..."
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    display: "block",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div>avatars</div>
            </div>
            <div className="profile-form">
              <h3 className="mb-3">
                Ваш баланс: {profilePageData?.points}{" "}
                <i className="fa fa-bolt text-primary ml-1"></i>
              </h3>
              <Form onSubmit={submitHandle}>
                <Form.Group controlId="text">
                  <Form.Label>Имя</Form.Label>
                  <Form.Control
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder="Введите имя"
                  />
                </Form.Group>
                <Form.Group controlId="text">
                  <Form.Label>Фамилия</Form.Label>
                  <Form.Control
                    onChange={(e) => setSurmame(e.target.value)}
                    value={surname}
                    type="text"
                    placeholder="Введите фамилию"
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Подтвердите пароль</Form.Label>
                  <Form.Control
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Подтвердите пароль"
                  />
                  {error && (
                    <span
                      className="mt-2"
                      style={{ display: "block", color: "red" }}
                    >
                      {error[0]}
                    </span>
                  )}
                </Form.Group>
                <Button className="w-100" variant="primary" type="submit">
                  Сохранить
                </Button>
                <hr />
              </Form>
              {/* <Form>
                <Form.Group controlId="password">
                  <Form.Label>Новый пароль</Form.Label>
                  <Form.Control
                    onChange={passwordHandle}
                    value={password}
                    type="password"
                    placeholder="Введите пароль"
                  />
                  {error && (
                    <span
                      className="mt-2"
                      style={{ display: "block", color: "red" }}
                    >
                      {error[0]}
                    </span>
                  )}
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Повторите пароль</Form.Label>
                  <Form.Control
                    onChange={confirmPasswordHandle}
                    value={confirmPassword}
                    type="password"
                    placeholder="Повторите пароль"
                  />{" "}
                </Form.Group>
                <Button
                  disabled
                  className="w-100"
                  variant="primary"
                  type="submit"
                >
                  Сохранить
                </Button>
              </Form> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfilePage;
