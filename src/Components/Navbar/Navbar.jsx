import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/Group 2309.png";
import SearchImg from "../../images/Search.png";
import useCatalog from "../../hooks/useCatalog";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { catalogData,  katalogId } = useCatalog();
  const  [query, setQuery] = useState("")
  const navigate = useNavigate()

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  
  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/searchpage?query=${query}`);
      setQuery(""); 
    }
  };

  return (
    <>
      <div className="container1">
        <div className="row w-[80%] mx-auto justify-between items-center">
          <div>
            <img className="logo" src={Logo} alt="Logo" />
          </div>
          <div>
            <ul className="navbar-wrapper">
              <li>
                <Link to="/">Asosiy sahifa</Link>
              </li>
              <li>
                <Link to="/katalog">Katalog</Link>
              </li>
              <li
                className="navbar_wrapper_menu_item"
                onClick={handleDropdownToggle}
              >
                <p>О нас</p>
                <ul className={`drop_down ${dropdownOpen ? "open" : ""}`}>
                  <li>
                    <Link className="biz" to="/Контакты1">
                      Контакты
                    </Link>
                  </li>
                  <li>
                    <Link to="/Контакты2">Контакты</Link>
                  </li>
                  <li>
                    <Link to="/Контакты3">Контакты</Link>
                  </li>
                  <li>
                    <Link to="/Контакты4">Контакты</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/yangiliklar">Yangiliklar</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Aloqa</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="row2">
          <form className="form" onSubmit={handleSearch}>
            <div className="katalog_section">
              <button type="button" className="katalog_btn" onClick={openModal}>
                Каталог
              </button>
            </div>
            <div className="katalog_big_search">
              <input
                className="katalog_search"
                type="text"
                placeholder="qidiruv"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
              />
              <button type="submit" className="btn_search">
                <img className="search_img" src={SearchImg} alt="Search" />
              </button>
            </div>
          </form>
        </div>

        {isModalOpen && (
          <div className="modal z-20">
            <div className="modal_content">
              <span className="close_button" onClick={closeModal}>
                &times;
              </span>
              <div className="container3">
                <div className="row3">
                  {catalogData.map((item, index) => (
                    <div
                      className="katalog_card"
                      onClick={() => katalogId(item.id)}
                      key={index}
                    >
                      <img
                        className="katalog_img"
                        src={item.image}
                        alt={item.name}
                      />
                      <h1 className="katalog_text">{item.name}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
