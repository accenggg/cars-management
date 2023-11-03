/* eslint-disable react/prop-types */
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function Cars() {
  const [cars, setCars] = useState();

  useEffect(() => {
    async function getCars() {
      const response = await fetch(
        "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
      );
      const data = await response.json();
      setCars(data);
    }
    getCars();
  }, []);

  return (
    <>
      <Header />
      <section className="search">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="row search__card mx-lg-5 py-3 px-4">
                <div className="col-lg-auto col-xl-2 col-xxl-3 col-md-auto">
                  <label>Tipe Driver</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="tipeDriver"
                    value="default"
                  >
                    <option value="default">
                      Pilih Tipe Driver &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    </option>
                    <option value="true">Dengan Supir</option>
                    <option value="false">Tanpa Supir (Lepas Kunci)</option>
                  </select>
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto">
                  <label>Tanggal</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Pilih Tanggal"
                    id="tanggal"
                  />
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto search__time">
                  <label>Pilih Waktu</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="waktuJemput"
                  >
                    <option value="default">
                      Pilih Waktu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </option>
                    <option value="08:00">08.00 WIB</option>
                    <option value="09:00">09.00 WIB</option>
                    <option value="10:00">10.00 WIB</option>
                    <option value="11:00">11.00 WIB</option>
                    <option value="12:00">12.00 WIB</option>
                  </select>
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto">
                  <label className="fw-light">
                    Jumlah Penumpang (optional)
                  </label>
                  <div className="input-group">
                    <input
                      type="search"
                      className="form-control border-end-0"
                      placeholder="Jumlah Penumpang"
                      id="jumlahPenumpang"
                      defaultValue="0"
                    />
                    <span className="input-group-text bg-white">
                      <img src="images/fi_users.png" width="20px" alt="" />
                    </span>
                  </div>
                </div>
                <div className="col-lg-2 col-xl-auto col-md-2  pt-4">
                  <button className="btn btn-utama" id="load-btn">
                    Cari Mobil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cars">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 ">
              <div className="row" id="cars-container">
                <CarsList cars={cars} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

function CarsList({ cars }) {
  return (
    <>
      {cars?.map((car) => (
        <div key={car.id} className="col-lg-4 my-2">
          <div className="card px-2 py-4">
            <img src={car.image} className="card-img-top mt-4" />
            <div className="card-body">
              <h5 className="card-title fs-6">
                {car.manufacture}/{car.model}
              </h5>
              <h5 className="card-title fs-5 fw-bold">
                Rp {car.rentPerDay} / hari
              </h5>
              <p className="cars__p">{car.description}</p>
              <div className="row">
                <div className="col-1">
                  <img
                    src="images/fi_users1.png"
                    width="20px"
                    alt=""
                    srcSet=""
                  />
                </div>
                <div className="col-10 ms-lg-2">{car.capacity} orang</div>
              </div>
              <div className="row mt-2">
                <div className="col-1">
                  <img
                    src="images/fi_settings.png"
                    width="20px"
                    alt=""
                    srcSet=""
                  />
                </div>
                <div className="col-10 ms-lg-2">{car.transmission}</div>
              </div>
              <div className="row mt-2 mb-4">
                <div className="col-1">
                  <img
                    src="images/fi_calendar.png"
                    width="20px"
                    alt=""
                    srcSet=""
                  />
                </div>
                <div className="col-10 ms-lg-2">Tahun {car.year}</div>
              </div>

              <a href="#" className="btn btn-utama" style={{ width: "100%" }}>
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
