import { createConnection, EntityRepository } from "typeorm";
import { User } from "./entity/User";
const connectionSettings = require("../ormconfig.json")

const main = async () => {
    await createConnection(connectionSettings)
    
    // const user = new User();
    // user.firstname = "adam"
    // user.lastname = "momen"
    // user.isActive = true;
    // await user.save();
    // const res = await User.find({ firstname:"adam", lastname:"momen"})
    // const userRepository = connection.getRepository(User);
    // const user =  await userRepository.find({isActive:true})
    // console.log(`is should show something ${res}`)
} 
main()
.catch( e => console.log(e))
// console.log("This is awesome")