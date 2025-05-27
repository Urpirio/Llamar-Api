
const Prueba = ({Toke}) =>{
            fetch('https://directus-prueba.dominicanainnova.gob.do/users/me',{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${Toke}`
                },
            })
            .then(respuesta => respuesta.json())
            .then((Data)=>{
                console.log(Data);
            }).catch((err)=>{
                console.log(err)
            });
}

const ApiUrl = 'https://directus-prueba.dominicanainnova.gob.do/auth/login/';
function POST(){
    fetch(ApiUrl,{
       method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
       body:JSON.stringify({
        email:'urpiriojunior@gmail.com',
        password: '1234'
       }),
    })
    .then(respuesta => respuesta.json())
    .then((Data)=>{  
        Prueba({Toke: Data.data.access_token })
    }).catch((err)=>{

    })
};
POST()

