import { createConnection } from 'typeorm';

export const dbConnection = async() => {
    try{
        await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "1234",
            database: "finanzas",
            entities:["dist/src/models/**/*.js"],
            synchronize: true
        
        });
        console.log('esta correcto');
        
    } catch (err) {
        console.log('err dbConnection: ',err);
        throw new Error('no puedes ngresar a tu bd')
        
    }
}