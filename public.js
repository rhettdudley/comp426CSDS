

const pubRoot = new axios.create({
    baseURL: "http://localhost:3001/public"
});
  
export async function addBar(bar) {
    return await pubRoot.post(`/bars/`, {
        data: bar
    })
}

export async function getAllBars() {
    return await pubRoot.get('/bars');
}
