import express from 'express';
import cors from 'cors'; 
import indexRoutes from '../routes/index.routes.js';
import * as db from '../db/cnn_mongodb.js';
export default class Server {
    constructor() {
        this.app = express();
        this.port =process.env.PORT || 3000;
        this.generalRoute= '/api/';
        this.middlewares();
        this.routes();
    }
     async conectarAMongoDB(){
            if(!db.isConected){
                await db.conectarAMongoDB();
            }
        }
    middlewares() { 
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    routes() {
       
     // localhost:3000/api/ejemplo
    this.app.use(this.generalRoute, indexRoutes);
}

listen() {
    this.app.listen(this.port, () => {
        console.log(`Servidor corriendo en puerto ${this.port}`);

    });   
}

}
