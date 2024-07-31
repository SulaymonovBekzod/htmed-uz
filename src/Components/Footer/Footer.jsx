import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "../../images/Group 2309.png";

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_row flex">
        < div className="footer_section flex">
          <img className="footer_img" src={Logo} alt="Company Logo" />
          <p className="footer_text">
            Kompaniyaning maqsadi sifatli <br /> tibbiy uskunalar bilan aholini{" "}
            <br /> ta'minlash va sog'lom, kelajak <br /> yaratish.
          </p>
          <div className="footer_info">
            <div className="footer_icon">
              <img
                className="footer_quloqchin"
                src="https://ht-med.uz/_next/image?url=%2Fimg%2F17195491891537184111%201.png&w=48&q=75"
                alt="Support Icon"
              />
            </div>
            <div className="footer_service">
              <button className="footer_xizmati">
                Qo`llab-quvvatlash xizmati <br /> +998 (99) 311 25 52
              </button>
            </div>
          </div>
          <div className="footer_links_container flex gap-10 mt-12">
            <h1 className="menu_links">Menyu</h1>
            <ul className="footer_links footer_links_left">
              <li>
                <Link to="/">Asosiy sahifa</Link>
              </li>
              <li>
                <Link to="/katalog">Katalog</Link>
              </li>
              <li>
                <Link to="/kompaniya">Kompaniya</Link>
              </li>
              <li>
                <Link to="/yutuqlar">Yutuqlar</Link>
              </li>
              <li>
                <Link to="/jamoa">Jamoa</Link>
              </li>
            </ul>
            <ul className="footer_links footer_links_right">
              <li>
                <Link to="/galereya">Galereya</Link>
              </li>
              <li>
                <Link to="/yangiliklar">Yangiliklar</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/aloqa">Aloqa</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_blog">
          <h1 className="useful_news">Foydali Yangiliklar</h1>
          <div>
            <p className="all_useful_news">
              Barcha yangililardan xabardor bo`lish <br /> uchun ijtimoiy tarmoqlaringizga obuna <br /> bo`ling
            </p>
          </div>
          <div className="footer_icons">
            <img className="facebook_icon" src="https://ht-med.uz/_next/image?url=%2Ficons%2FButton%20container.png&w=96&q=75" alt="" />
            <img className="telegram_icon" src="https://ht-med.uz/_next/image?url=%2Ficons%2FButton%20container%20(1).png&w=96&q=75" alt="" />
            <img className="youtube_icon" src="https://ht-med.uz/_next/image?url=%2Ficons%2FButton%20container%20(2).png&w=96&q=75" alt="" />
            <img className="instagram_icon" src="https://ht-med.uz/_next/image?url=%2Ficons%2FButton%20container%20(3).png&w=96&q=75" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
