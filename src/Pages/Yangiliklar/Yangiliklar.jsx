import React, { useEffect, useState } from "react";
import { Resquet } from "../../repository/repository";
export default function Yangiliklar() {
  const [newsData, setNewsData] = useState();

  useEffect(() => {
    async function FetchProductData() {
      try {
        const data = await Resquet("news-list/?page=1");
        setNewsData(data.results);
      } catch (error) {
        console.error("Error fetching category list", error);
      }
    }
    FetchProductData();
  }, []);

  return (
    <div className="new_container w-[80%] m-auto">
      <div className="new_row">
        <div className="news_page flex flex-wrap wrap my-5">
          {newsData?.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex mt-10 gap-5 bg-gray-100 my-5 rounded-2xl p-4">
                  <img
                    className="w-[30%] rounded-2xl"
                    src={item.image_url}
                    alt=""
                  />
                  <div className="flex-1 flex flex-col justify-between p-2">
                    <p className="mb-2">{item.title}</p>
                    <p className="mb-2">{item.description}</p>
                    <p>{item.created_at}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
