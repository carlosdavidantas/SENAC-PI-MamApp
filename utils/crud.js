import AsyncStorage from '@react-native-async-storage/async-storage';
import dataJson from "@/mocks/data.json";


export const initializeStorage = async () => {
    try {
        await AsyncStorage.getItem("data");
        await AsyncStorage.setItem("data", JSON.stringify(dataJson));
        
    } catch (e) {
        console.error('failed to init storage:', e);
    }
};

export async function get(dataType) {
    const data = await new Promise((resolve, reject) => {
        AsyncStorage.getItem("data")
            .then(data => {
                resolve(JSON.parse(data));
            })
            .catch(error => {
                reject(error);
            });
    });

    return data[dataType];
}

export async function post(dataType, item) {
    console.log("teste");
    const data = await new Promise((resolve, reject) => {
        AsyncStorage.getItem("data")
            .then(data => {
                resolve(JSON.parse(data));
            })
            .catch(error => {
                reject(error);
            });
    });
    console.log(data);
    data[dataType].push(item);
    console.log(data[dataType])
    await AsyncStorage.setItem("data", JSON.stringify(data));
    
}

export async function put(dataType, itemUpdated) {
    try{
        console.log("rodando");
        const data = await new Promise((resolve, reject) => {
            AsyncStorage.getItem("data")
                .then(data => {
                    resolve(JSON.parse(data));
                })
                .catch(error => {
                    reject(error);
                });
        });
        console.log(data);
        
        data[dataType] = data[dataType].map(item => {
            if (item.cpf === itemUpdated.cpf) {
                return itemUpdated;
            }
            return item;
        });
        
        console.log("------- " + data[dataType])
    
        await AsyncStorage.setItem("data", JSON.stringify(data));
        console.log("=========  " + data[dataType])
    }
    catch(error){
        console.log(error);
    }   
}

export async function remove(dataType, id) {
    try{
        console.log("rodando");
        const data = await new Promise((resolve, reject) => {
            AsyncStorage.getItem("data")
                .then(data => {
                    resolve(JSON.parse(data));
                })
                .catch(error => {
                    reject(error);
                });
        });
        console.log(data);
        
        data[dataType] = data[dataType].filter(item => {
            if (item.id === id) {
                return false;
            }
            return true;
        });
        
        console.log("------- " + data[dataType])
    
        await AsyncStorage.setItem("data", JSON.stringify(data));
        console.log("=========  " + data[dataType])
    }
    catch(error){
        console.log(error);
    } 
}