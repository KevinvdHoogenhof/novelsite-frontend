import http from "../httpcommon";

class NovelService {
    getAllNovels(){
        return http.get("/novel/novels");
    }
}

export default new NovelService();


// export async function getAllNovels() {

//     try{
//         const response = await fetch(url + '/novel/novels');
//         return await response.json();
//     }catch(error) {
//         return [];
//     }
// }

// export async function createNovel(data) {
//     const response = await fetch(url + `/novel/create`, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({user: data})
//       })
//     return await response.json();
// }