import { object, string, number, date} from 'yup';


//setLocale({
//    string: {
//      max: 'login must have less than ${max} symbols',
//   },
//  });

let userSchemaLogin = object().shape({
  login: string().max(10, 'login must have less than ${max} symbols'),
  //email: string().required().email(),
  //pasword: string().email(),
});

let userSchemaEmail = object().shape({
  email: string().email('email is not valid'),
  //email: string().required().email(),
  //pasword: string().email(),
});

let userSchemaPass = object().shape({
  password: string().min(8, 'password must be longer ${min} symbols')
                    .max(15, 'password must have less than ${max} symbols')
                    .matches(/(?=.*[0-9])(?=.*[a-z])/, 'password must contain letters and numbers'),
  //email: string().required().email(),
  //pasword: string().email(),
});

// parse and assert validity
export default function ValidateInput(values) {
  
  if (values.login) {
    console.log(values);
  }
  try {
      if (values.login){  
        userSchemaLogin.validateSync(values);
        return 'OK';
      } else if (values.email){
        userSchemaEmail.validateSync(values);
        return 'OK';
      } else if (values.password){
        userSchemaPass.validateSync(values);
        return 'OK';
      }
    } catch (err) {
        console.log(err.name); // => 'ValidationError'
        console.log(err.errors[0]); // => ['Deve ser maior que 18']
        return err.errors[0];
      };
};
