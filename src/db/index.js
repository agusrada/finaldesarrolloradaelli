import * as SQlite from 'expo-sqlite';

const db = SQlite.openDatabase('carnicerialola.db') 

export const init = () => {
    const promise = new Promise((resolve, reject)=>{
        db.transaction(tx=>{
            tx.executeSql('CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY_KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL)',
            [],
            ()=> resolve(),
            (_, error)=>reject(error)
            )

        })

  })
  return promise
}

export const insertSession=(email, localId, token)=>{
    const promise = new Promise((resolve, reject)=>{
        db.transaction(tx=>{
            tx.executeSql('INSERT INTO sessions (email, localId, token) VALUES (?, ?, ? ) ',
        [email, localId, token],
        (_,result)=>resolve(result),
        (_,error)=>reject(error)
            )

        })
    })
}

export const fetchSession = (localId) => {
    const promise= new Promise((resolve,reject)=>{
        
    })
}