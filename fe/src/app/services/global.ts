import { User } from '../modelo/user';
import { Rol } from '../modelo/rol';
import { Cartera} from '../modelo/cartera';

export var GLOBAL = {
   url: 'http://localhost:3000/'
}
// export var LogIn = {
//    token: ''
// }
export var Identity: User = {
   _id: '',
   name: '',
   active: null,
   password_hash: '',
   rol: '',
};
export var Roles: Array<Rol> = [
   {
      _id: '',
      name: 'Admin'
   },
   {
      _id: '5acd8be53bfdae1018ec3628',
      name: 'Ejecutivo'
   }
];
export var CarteraS:Cartera={

    name:'',
    user:''
};