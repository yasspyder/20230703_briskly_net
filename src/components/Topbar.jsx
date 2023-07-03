import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';

function Topbar() {
  return (
    <div className="container-fluid d-lg-block">
      <div className="d-flex justify-content-between py-4 px-3">
        <div className="">
          <Link
            to="/"
            className="text-decoration-none d-flex align-items-center overflow-hidden"
            style={{ height: '100px' }}
          >
            <img className="main-logo" src="/img/BrisklyLogo.svg" alt="" />
            <div className="px-1 d-flex flex-column justify-content-center">
              <h1 className="m-0">
                <span className="text-primary">B</span>RISKLY
              </h1>
              <h1 className="m-0">
                <span className="text-primary">L</span>EARN
              </h1>
            </div>
          </Link>
        </div>
        {/* <div className="col-lg-3 text-right">
          <div className="w-100 d-flex">
            <i className="fa fa-2x fa-search text-primary mr-3"></i>
            <div className="input-group">
              <input
                type="text"
                className="form-control border-primary"
                style={{ padding: 5, paddingLeft: 15 }}
                placeholder="Что-то ищете?"
              />
              <div className="input-group-append">
                <button className="btn btn-primary px-4">Поиск</button>
              </div>
            </div>
          </div>
        </div> */}
        <div className="d-lg-flex d-none">
          <UserInfo />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
