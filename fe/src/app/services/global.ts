import { User } from '../modelo/user';
import { Rol } from '../modelo/rol';

export var GLOBAL = {
   url: 'http://localhost:3000/'
}
// export var LogIn = {
//    token: ''
// }
export var Identity: User = {
   _id: '',
   name: '',
   password_hash: '',
   rol: ''
};
export var Roles: Array<Rol> = [
   {
      _id: '',
      name: 'Admin'
   },
   {
      _id: '',
      name: 'Ejecutivo'
   }
];