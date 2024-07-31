import axios from "axios";

export const baseUrl = "https://admin.ht-med.uz/api/v1/";
export const baseHeaders = {
  "Accept-Language": localStorage.getItem("language") || "uz",
};

export async function Resquet(link) {
  try {
    const result = await axios.get(baseUrl + link, {
      headers: baseHeaders,
    });
    return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
