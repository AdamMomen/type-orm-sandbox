import { createConnection, EntityRepository } from "typeorm";
import { User } from "./entity/User";
const connectionSettings = require("../ormconfig.json")

const main = async () => {
    const connection  = await createConnection(connectionSettings)
    
    const user = new User();
    user.firstname = "adam"
    user.lastname = "momen"
    user.isActive = true;
    const userRepository = connection.getRepository(User);
    // const user =  await userRepository.find({isActive:true})
    console.log(`is should show something ${user}`)
} 
main()
.catch( e => console.log(e))
console.log("This is awesome")