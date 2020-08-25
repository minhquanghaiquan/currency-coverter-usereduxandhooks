import axiosService from "./axiosService";





export const getData = (first, second) => {

     const url  = `https://free.currconv.com/api/v7/convert?q=${first}_${second}&compact=ultra&apiKey=9c018b4900806414a3b1`;
  
     return axiosService.get(url);
};


