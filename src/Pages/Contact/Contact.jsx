import React from "react";

export default function Contact() {
  return (
    <>
      <div className="card_second flex justify-between items-center">
        <div className="footer_icons_lists">
          <div className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 0 960 960"
              width="40px"
              fill="#5f6368"
            >
              <path d="M480.06-486.67q30.27 0 51.77-21.56 21.5-21.55 21.5-51.83 0-30.27-21.56-51.77-21.55-21.5-51.83-21.5-30.27 0-51.77 21.56-21.5 21.55-21.5 51.83 0 30.27 21.56 51.77 21.55 21.5 51.83 21.5ZM480-168q129.33-118 191.33-214.17 62-96.16 62-169.83 0-114.86-73.36-188.1-73.36-73.23-179.97-73.23T300.03-740.1q-73.36 73.24-73.36 188.1 0 73.67 63 169.83Q352.67-286 480-168Zm0 88Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>
            <div>
              <p className="location">Manzil</p>
              <p className="location_address">
                Toshkent shahar, Sergeli tumani, <br />
                Qumariq MFY, pos.Gagarina <br />
                ko'chasi, 26-2-uy.
              </p>
            </div>
          </div>
          <div className="phone_info flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 0 960 960"
              width="40px"
              fill="#5f6368"
            >
              <path d="M266.67-40q-27 0-46.84-19.83Q200-79.67 200-106.67v-746.66q0-27 19.83-46.84Q239.67-920 266.67-920h426.66q27 0 46.84 19.83Q760-880.33 760-853.33v746.66q0 27-19.83 46.84Q720.33-40 693.33-40H266.67Zm0-166.67v100h426.66v-100H266.67Zm213.45 83.34q14.21 0 23.71-9.62t9.5-23.83q0-14.22-9.61-23.72-9.62-9.5-23.84-9.5-14.21 0-23.71 9.62-9.5 9.61-9.5 23.83 0 14.22 9.61 23.72 9.62 9.5 23.84 9.5Zm-213.45-150h426.66v-480H266.67v480Zm0-546.67h426.66v-33.33H266.67V-820Zm0 613.33v100-100Zm0-613.33v-33.33V-820Z" />
            </svg>
            <div className="mt-7">
              <p className="phone_number_class">Telefon raqam</p>
              <div className="phone_number">
                <p>+998 (97) 131 07 89</p>
                <p>+998 (99) 311 25 52</p>
              </div>
            </div>
          </div>
          <div className="elektron_info flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 0 960 960"
              width="40px"
              fill="#000000"
            >
              <path d="M146.67-160q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33v506.66q0 27-19.83 46.84Q840.33-160 813.33-160H146.67ZM480-454.67 146.67-670v443.33h666.66V-670L480-454.67Zm0-66.66 330.67-212H150l330 212ZM146.67-670v-63.33V-226.67-670Z" />
            </svg>
            <div>
              <p className="elektron_title">Elektron pochta</p>
              <p className="medical_email mt-2">hi-tech_orient_medical@mail.ru</p>
            </div>
          </div>
        </div>
        <div>
          <div className="contact_us">
            <h1 className="text-[20px] font-bold">Biz bilan bog`lanish</h1>
            <div className="contact_icons flex gap-5">
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
        <div className="submit_form flex flex-col items-center mt-5 w-[80%] max-w-md h-auto p-4 bg-white rounded-lg shadow-md">
          <h1 className="text-lg font-bold mb-4">Ariza yuborish</h1>
          <input
            className="input_sumbit w-full mb-3 p-2 rounded"
            type="text"
            placeholder="Ism"
          />
          <hr className="w-full mb-3" />
          <input
            className="input_sumbit w-full mb-3 p-2 rounded"
            type="text"
            placeholder="Nomer"
          />
          <hr className="w-full mb-3" />
          <input
            className="input_sumbit w-full mb-3 p-2 rounded"
            type="text"
            placeholder="Matn"
          />
          <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
            Yuborish
          </button>
        </div>
      </div>

      <div className="w-full mt-8">
        <iframe
          className="rounded-[25px]"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d749.9194707851482!2d69.255519!3d41.250574!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b278f47926f%3A0x58c5ded3abff2147!2sHi-tech%20Orient%20Medical!5e0!3m2!1sen!2sus!4v1720526472472!5m2!1sen!2sus"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
