import axios from 'axios'
export function getgiftList() {
    return axios({
        method:'GET',
        url:'/api/meizhao/commonwords/list',
        dataType:'json',
        params: {
            userId: 176
        },
        header:{
        'machineCode':1,
        'terminal':'Web',
        'timeStamp':1000,
        'versionCode':'1.0',
        "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then( response => {
        console.log(response.data);
    })
}

