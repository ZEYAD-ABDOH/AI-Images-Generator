const api = "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";
const inp = document.getElementById('inp');
const images = document.querySelector('.images')
const getimage =async ()=>{
  console.log("zeyad")
  // make request to openia api
  const  methods = {
    method:"POST",
    headers:{
      "Content-Type" : "application/json",
      "Authorization": `Bearer ${api}`
    },
    body:JSON.stringify(
    {
    "prompt":inp.value,
    "n": 3, 
    "size": "256x256"
    }
    ) 
  }

    const res = await fetch("https://api.openai.com/v1/images/generations" ,methods)
 // parse the  response as json
    const data = await res.json()
    const listImages = data.data;
    images.innerHTML=""
    listImages.map(photo=> {
    const container = document.createElement("div")
    images.append(container)
    const img  = document.createElement("img")
    container.append(img)
    img.src = photo.url
    
    })
}
