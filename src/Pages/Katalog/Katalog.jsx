import React, { useEffect, useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Resquet } from "../../repository/repository";
import AddIcon from "@mui/icons-material/Add"; // AddIcon import qilindi
// import "./Katalog.css"; // Assuming you have some CSS file for this component
import SearchPage from "../SearchPage/SearchPage";

export default function Katalog() {
  const [katalogData, setKatalogData] = useState();
  const [cardData, setCardData] = useState();

  useEffect(() => {
    async function FetchCategoryData() {
      try {
        const data = await Resquet("category-list/");
        setKatalogData(data.results);
      } catch (error) {
        console.error("Error fetching category list", error);
      }
    }

    async function FetchProductData() {
      try {
        const data = await Resquet(
          "product-list/?limit=9&search=&parent=radiologiya&categories__slug="
        );
        setCardData(data.results);
      } catch (error) {
        console.error("Error fetching category list", error);
      }
    }

    FetchCategoryData();
    FetchProductData();
  }, []);

  return (
    <div className="katalog_container container m-auto mx-auto flex gap-6">
      <div className="w-[400px] flex items-center gap-3 flex-col">
        {katalogData?.map((item, index) => (
          <Accordion key={item.id} className="my-5 border-none shadow-none">
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel-content"
              id={`panel-header-${item.id}`}
            >
              <div key={index}>
                <div className="flex items-center gap-3">
                  <img
                    className="katalog_img w-[45%]"
                    src={item.image}
                    alt={item.name}
                  />
                  <p>{item.name}</p>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              {item.child.map((child) => (
                <ul key={child.id}>
                  <li className="p-1">
                    <NavLink
                      className="m-2 text-[14px] text-[#555555] hover:text-red-500"
                      to={"#"}
                    >
                      {child.name}
                    </NavLink>
                  </li>
                </ul>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5  w-[calc(100%-400px)]">
        {cardData?.map((item) => (
          <SearchPage
            key={item.id}
            image={item.poster_url}
            title={item.title}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
}
