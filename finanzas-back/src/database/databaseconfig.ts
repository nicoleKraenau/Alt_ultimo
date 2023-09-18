import { createConnection } from 'typeorm';

export const dbConnection = async() => {
    try{
        await createConnection({
            type: "postgres",
            host: "localhost",
            //port: 8000,
            port: 5432,
            username: "postgres",
            password: "123",
            database: "prueba",
            entities:["dist/src/models/**/*.js"],
            synchronize: true
            // entities:["dist/src/models/**/*.js"],
            // sysnchronize:true
        });
        console.log('BD connectada°°');
        
    } catch (err) {
        console.log('err dbConnection: ',err);
        throw new Error('Error a la hora de iniciar la BD')
        
    }
}