import React, { useState, useEffect } from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Resquet } from "../../repository/repository";
import "swiper/css";
import useHomeCatalog from "../../hooks/useHomeCatalog";

export default function Newhome() {

  const [partnersData, setPartnersData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [commentData, setCommentData] = useState();
  const [bannerData, setBannerData] = useState([]);
  const { homeData, katalogId } = useHomeCatalog();
  console.log(homeData);

  useEffect(() => {
    async function FetchData() {
      try {
        const data = await Resquet("banner-list/");
        setBannerData(data);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    }

    async function FetchCategory() {
      try {
        const data = await Resquet("category-image-list/");
        setCategoryData(data.results);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    }

    async function FetchPartners() {
      try {
        const data = await Resquet("partner-image-list/");
        setPartnersData(data.results);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    }

    async function FetchComment() {
      try {
        const data = await Resquet("comment-list/");
        setCommentData(data.results);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    }

    FetchData();
    FetchCategory();
    FetchPartners();
    FetchComment();
  }, []);

  const filterdata = bannerData?.filter(
    (item) => item.id === 8 || item.id === 10
  );

  return (
    <div className="container4">
      <div className="row4">
        <div className="home_page">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {homeData?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex gap-5 ml-20">
                  <div
                    className="newhome_card"
                    onClick={() => katalogId(item.id)}
                  >
                    <h1 className="mt5 text-[40px]">{item?.title}</h1>
                    <h1 className="mt-7 text-[20px]">{item?.body}</h1>
                  </div>
                  <div className="newhome_katalog">
                    <img
                      className="newhome_img"
                      src={item?.image}
                      alt={item?.name}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="katalog_data grid grid-cols-2 gap-5 my-2">
        {filterdata.map((item, index) => {
          return (
            <div
              className="small_katalog_data flex items-center p-[25px] rounded-[40px] bg-[#87B7FF]"
              key={index}
            >
              <div className="flex">
                <h1 className="text-[40px] font-extrabold text-2xl mb-2 max-w-[150px]  text-ellipsis overflow-hidden whitespace-nowrap">
                  {item.title}
                </h1>
                <h1 className="mt-10 text-[15px] text-[#475d77]">
                  {item.body}
                </h1>
                <img className="katalog_img" src={item.image} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h1 className="text-[30px] font-extrabold">Uskunalar bo`limi</h1>{" "}
        <hr className="category_hr" />
        <div className="tools_card flex justify-center gap-[15px] flex-wrap mt-10">
          {categoryData.map((item, i) => {
            return (
              <div className="" key={i}>
                <div className="cursor-pointer hover:shadow-lg transition-all duration-300 toolCard p-[10px] bg-[#ededed] flex flex-col items-center rounded-[15px] gap-2 text-center w-[225px]">
                  <h1>{item.name}</h1>
                  <img className="category_img" src={item.image} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <h1 className="text_work text-lg font-bold mb-4 text-[32px] mt-10">
        Biz bilan ishlashning afzaliklari
      </h1>{" "}
      <hr className="class_worked" />
      <div className="flex gap-6 mt-16">
        <div className="card_worked mb-4">
          <img
            src="https://ht-med.uz/_next/image?url=%2Fcard_logo%2FLayer_1%20(2).png&w=96&q=75"
            alt=""
            className="mt-2"
          />
          <h1 className="text-md font-semibold">Qulay narx siyosat</h1>
          <p>
            Uskunalarimiz yuqori sifatiga ega va boshqa kompaniyalardan 25%
            arzon.
          </p>
        </div>
        <div className="card_worked mb-4">
          <img
            src="https://ht-med.uz/_next/image?url=%2Fcard_logo%2FIsolation_Mode%20(1).png&w=96&q=75"
            alt=""
            className="mb-2"
          />
          <h1 className="text-md font-semibold">
            Omborda tovarlarning ko'p assortimenti
          </h1>
          <p>Taklif etilgan barcha uskunalar omborda mavjud.</p>
        </div>
        <div className="card_worked mb-4">
          <img
            src="https://ht-med.uz/_next/image?url=%2Fcard_logo%2FIsolation_Mode.png&w=64&q=75"
            alt=""
            className="mb-2"
          />
          <h1 className="text-md font-semibold">
            Metrologik attestatsiya va sertifikatlash
          </h1>
          <p>
            Uskunani bizdan sotib olayotganda biz mijozga metrologik
            attestatsiyasi va muvofiqlik sertifikatini taqdim etamiz.
          </p>
        </div>
        <div className="card_worked mb-4">
          <img
            src="https://ht-med.uz/_next/image?url=%2Fcard_logo%2FLayer_1%20(4).png&w=96&q=75"
            alt=""
            className="mb-2"
          />
          <h1 className="text-md font-semibold">
            Xizmat ko'rsatish markazi va tajribali muhandislarning mavjudligi
          </h1>
          <p>
            Uskunalarni bepul o'rnatamiz va kafolat muddati davomida
            nosozliklarni bartaraf etamiz.
          </p>
        </div>
        <div className="card_worked mb-4">
          <img
            src="https://ht-med.uz/_next/image?url=%2Fcard_logo%2FLayer_1%20(3).png&w=96&q=75"
            alt=""
            className="mb-2"
          />
          <h1 className="text-md font-semibold">
            Uzoq muddatli kafolat va kafolatdan keyingi servis xizmati
          </h1>
          <p>
            Uskuna turiga qarab 1 yildan 3 yilgacha kafolatni, shuningdek
            kafolatdan keyingi xizmatni taklif qilamiz.
          </p>
        </div>
      </div>
      <h1 className="text-lg font-bold mb-4 text-[32px] mt-10">Ish jarayoni</h1>{" "}
      <hr className="class_worked2" />
      <div className="father_card">
        <div className="children_card">
          <img src="https://ht-med.uz/card_sxema/Group.png" alt="" />
          <h1 className="number_one1">1</h1>
          <p className="number_p1">
            <span className="span_p">Siz kerakli uskunalar</span> <br /> uchun
            ariza topshirasiz.
          </p>
        </div>
        <div>
          <img src="https://ht-med.uz/card_sxema/Group%20(1).png" alt="" />
          <h1 className="number_one">2</h1>
          <p className="number_p ml-3">
            Siz bilan shartnoma <br />
            <span className="ml-7">imzolaymiz.</span>
          </p>
        </div>
        <div>
          <img src="https://ht-med.uz/card_sxema/Group.png" alt="" />
          <h1 className="number_one3">3</h1>
          <p className="number_p3">
            Uskunalarni yetkazib <br />
            <span className="ml-7"> beramiz.</span>
          </p>
        </div>
        <div>
          <img src="https://ht-med.uz/card_sxema/Group%20(2).png" alt="" />
          <h1 className="number_one">4</h1>
          <p className="number_p">
            Sizning xohishingizga <br /> ko'ra, kafolat muddati <br />{" "}
            <span className="ml-3">tugaganidan so'ng</span> <br />{" "}
            <span className="ml-3">qo'shimcha xizmat </span> <br />{" "}
            <span className="ml-2">ko'rsatish bitimlarini </span> <br />{" "}
            <span className="ml-7">taklif qilishimiz</span> <br />
            <span className="ml-11"> mumkin.</span>
          </p>
        </div>
        <div>
          <img src="https://ht-med.uz/card_sxema/Group%20(1).png" alt="" />
          <h1 className="number_one">5</h1>
          <p className="number_p">
            {" "}
            Mutaxassislarimiz siz <br />
            <span className="ml-5"> bilan bog'lanib,</span> <br />{" "}
            <span className="ml-2"> uskunalar bo'yicha </span>
            <br /> barcha savollarga javob <br />{" "}
            <span className="ml-11">berishadi.</span>
          </p>
        </div>
        <div className="number_card">
          <img src="https://ht-med.uz/card_sxema/Group%20(3).png" alt="" />
          <h1 className="number_one">6</h1>
          <p className="number_p">
            {" "}
            Uskunaning mezonlari <br />{" "}
            <span className="ml-4">va talab qilinadigan</span> <br /> texnik
            xususiyatlaridan <br /> kelib chiqib, biz maxsus <br /> tijorat
            taklifini tuzamiz.
          </p>
        </div>
        <div>
          <img src="https://ht-med.uz/card_sxema/Group%20(1).png" alt="" />
          <h1 className="number_one">7</h1>
          <p className="number_p">
            <span className="ml-4"> Uskunani o'rnatib</span> <br />{" "}
            <span className="ml-4">beramiz va tibbiy</span> <br />{" "}
            <span className="ml-5">xodimlaringizga</span> <br /> uskunadan
            foydalanish <br />{" "}
            <span className="ml-3">tartibini o'rgatamiz.</span>
          </p>
        </div>
        <div className="number_card">
          <img src="https://ht-med.uz/card_sxema/Group%20(3).png" alt="" />
          <h1 className="number_one">8</h1>
          <p className="number_p">
            {" "}
            Biz 1 yildan 3 yilgacha <br />{" "}
            <span className="ml-4">kafolat beramiz va </span>
            <br /> <span className="ml-6">kafolat muddati</span> <br />{" "}
            <span className="ml-2">davomida biz 24 soat</span> <br />{" "}
            <span className="ml-6">davomida bepul</span> <br />{" "}
            <span className="ml-4">xizmat ko'rsatamiz.</span>
          </p>
        </div>
      </div>
      <h1 className="text-[18px] font-extrabold">Bizning xizmatlarimiz</h1>
      <hr className="category_hr2" />
      <div className="category_father flex gap-16">
        <div className="category_children1">
          <div>
            <h1 className="category_title text-[18px] font-extrabold">
              Tibbiy xodimlarga uskunalarning ishlashi bo'yicha ko'rsatmalar
              beramiz
            </h1>
            <p className="category_text">
              Biz tibbiy xodimlarga texnik uskunalardan to'g'ri foydalanishni
              o'rgatamiz va ko'rsatmalar beramiz. Bunga asosiy tartiblari va
              uskunani samarali va xavfsiz muhim ma'lumotlarni o'rgatish kiradi.
            </p>
          </div>
        </div>
        <div className="category_children2">
          <h1 className="text-[18px] font-extrabold">
            Biz tibbiy xodimlarga texnik uskunalardan to'g'ri foydalanishni
            o'rgatamiz va ko'rsatmalar beramiz.
          </h1>
          <p>
            Biz texnik uskunalarni o'rnatish, sozlash ishlarini amalga va
            foydalanishga keltiramiz. Bularga: ulanish, funktsiyalarini sinash,
            sozlamalarni sozlash va o'rnatish kiradi.
          </p>
        </div>
        <div className="category_children3">
          <h1 className="text-[18px] font-extrabold">
            Biz ehtiyot qismlarni yetkazib beramiz
          </h1>
          <p>
            Biz eskirgan yoki buzilgan qurilmalar uchun ehtiyot qismlarini
            ta'mirlab beramiz. Bu uskunaning uzluksiz yetishmasligi tufayli
            ishlamay qolish vaqtini qisqartiradi.
          </p>
        </div>
        <div className="category_children4">
          <h1 className="text-[18px] font-extrabold">
            Biz eskirgan yoki buzilgan qurilmalar uchun ehtiyot qismlarini
            yetkazib beramiz va ularni ehtiyot qismlarini ta'mirlab beramiz.
          </h1>
          <p>Biz kerak bo'lganda texnik xizmat ko'rsatish va ta'mirlash.</p>
        </div>
      </div>
      <h1>Bizning xalqaro hamkorlarimiz</h1>
      <hr />
      <div className="partners">
        {partnersData.map((item, i) => {
          return (
            <div className="partner" key={i}>
              <div className="partners_card">
                <img className="partners_img" src={item.image} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="relative">
        <Swiper
          centeredSlides={true}
          loop={true}
          spaceBetween={30}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="mySwiper"
          slidesPerView={"auto"}
        >
          {commentData?.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="p-8">
                  <div className="title flex items-center pb-7 gap-3">
                    <div
                      className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] rounded-full bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${item.image})`,
                      }}
                    ></div>
                    <div>
                      <h1 className="font-bold text-[18px]">
                        {item.full_name}
                      </h1>
                      <p className="text-[14px]">{item.position}</p>
                    </div>
                  </div>
                  <div className="text-[14px]">
                    <p>{item.comment}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <h1>Bog`lanish uchun ma`lumot</h1>
      <hr />
      <div class="card_second flex justify-between items-center">
        <div class="footer_icons_lists">
          <div class="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#5f6368"
            >
              <path d="M480.06-486.67q30.27 0 51.77-21.56 21.5-21.55 21.5-51.83 0-30.27-21.56-51.77-21.55-21.5-51.83-21.5-30.27 0-51.77 21.56-21.5 21.55-21.5 51.83 0 30.27 21.56 51.77 21.55 21.5 51.83 21.5ZM480-168q129.33-118 191.33-214.17 62-96.16 62-169.83 0-114.86-73.36-188.1-73.36-73.23-179.97-73.23T300.03-740.1q-73.36 73.24-73.36 188.1 0 73.67 63 169.83Q352.67-286 480-168Zm0 88Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>
            <div>
              <p class="location">Manzil</p>
              <p class="location_address">
                Toshkent shahar, Sergeli tumani, <br />
                Qumariq MFY, pos.Gagarina <br />
                ko'chasi, 26-2-uy.
              </p>
            </div>
          </div>
          <div class="phone_info flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#5f6368"
            >
              <path d="M266.67-40q-27 0-46.84-19.83Q200-79.67 200-106.67v-746.66q0-27 19.83-46.84Q239.67-920 266.67-920h426.66q27 0 46.84 19.83Q760-880.33 760-853.33v746.66q0 27-19.83 46.84Q720.33-40 693.33-40H266.67Zm0-166.67v100h426.66v-100H266.67Zm213.45 83.34q14.21 0 23.71-9.62t9.5-23.83q0-14.22-9.61-23.72-9.62-9.5-23.84-9.5-14.21 0-23.71 9.62-9.5 9.61-9.5 23.83 0 14.22 9.61 23.72 9.62 9.5 23.84 9.5Zm-213.45-150h426.66v-480H266.67v480Zm0-546.67h426.66v-33.33H266.67V-820Zm0 613.33v100-100Zm0-613.33v-33.33V-820Z" />
            </svg>
            <div className="mt-7">
              <p class="phone_number_class">Telefon raqam</p>
              <div class="phone_number">
                <p>+998 (97) 131 07 89</p>
                <p>+998 (99) 311 25 52</p>
              </div>
            </div>
          </div>
          <div class="elektron_info flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#000000"
            >
              <path d="M146.67-160q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33v506.66q0 27-19.83 46.84Q840.33-160 813.33-160H146.67ZM480-454.67 146.67-670v443.33h666.66V-670L480-454.67Zm0-66.66 330.67-212H150l330 212ZM146.67-670v-63.33V-226.67-670Z" />
            </svg>
            <div>
              <p class="elektron_title">Elektron pochta</p>
              <p class="medical_email mt-2">hi-tech_orient_medical@mail.ru</p>
            </div>
          </div>
        </div>
        <div>
          <div class="contact_us">
            <h1 className="text-[20px] font-bold">Biz bilan bog`lanish</h1>
            <div class="contact_icons flex gap-5">
              <img
                src="https://ht-med.uz/_next/image?url=%2Ficons%2FGroup%202205%20(2).png&w=64&q=75"
                alt="Icon 1"
              />
              <img
                src="https://ht-med.uz/_next/image?url=%2Ficons%2FGroup(9).png&w=64&q=75"
                alt="Icon 2"
              />
              <img
                src="https://ht-med.uz/_next/image?url=%2Ficons%2FGroup%202279.png&w=64&q=75"
                alt="Icon 3"
              />
              <img
                src="https://ht-med.uz/_next/image?url=%2Ficons%2FGroup(10).png&w=64&q=75"
                alt="Icon 4"
              />
            </div>
          </div>
          <div className="web_browser">
            <h1 className="web_browser_title text-[20px] font-bold">
              Biz ijtimoiy <br /> tarmoqlardamiz
            </h1>
            <div className="web_browser_icons flex gap-5">
              <img
                src="https://ht-med.uz/_next/image?url=%2Ficons%2Fyoutube.png&w=64&q=75"
                alt=""
              />
              <img
                src="https://ht-med.uz/_next/image?url=%2Ficons%2FGroup%202205%20(2).png&w=64&q=75"
                alt=""
              />
              <img
                src="https://ht-med.uz/_next/image?url=%2Ficons%2FGroup%202208.png&w=64&q=75"
                alt=""
              />
              <img
                src="https://ht-med.uz/_next/image?url=%2Ficons%2FGroup%202203(1).png&w=64&q=75"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="submit_form flex flex-col items-center mt-5">
          <h1>Ariza yuborish</h1>
          <input className="input_sumbit" type="text" placeholder="Ism"/>
          <hr />
          <input className="input_sumbit" type="text" placeholder="Nomer"/>
          <hr />
          <input className="input_sumbit" type="text" placeholder="Matn"/>
          <button>Yuborish</button>
        </div>
      </div>
      <div>
      <iframe
          className="rounded-[25px] mt-8"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d749.9194707851482!2d69.255519!3d41.250574!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b278f47926f%3A0x58c5ded3abff2147!2sHi-tech%20Orient%20Medical!5e0!3m2!1sen!2sus!4v1720526472472!5m2!1sen!2sus"
          width="100%"
          height="450"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
