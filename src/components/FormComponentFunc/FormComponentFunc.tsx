import React, {useState, useEffect } from 'react'
import './FormComponentFunc.scss'
import { ContentForm, FormInput, FormButton, ErrorBlockForm } from "./elements";

const FormComponentFunc: React.FC = () => {
  const [username, setUsername] : React.ComponentState = useState('');
  const [usernameError, setUsernameError] : React.ComponentState = useState('');
  const [email, setEmail] : React.ComponentState = useState('');
  const [emailError, setEmailError] : React.ComponentState = useState('');
  const [phone, setPhone] : React.ComponentState = useState('');
  const [phoneError, setPhoneError] : React.ComponentState = useState('');
  const [password, setPassword] : React.ComponentState = useState('');
  const [passwordError, setPasswordError] : React.ComponentState = useState('');
  const [passwordConfirm, setPasswordConfirm] : React.ComponentState = useState('');
  const [passwordConfirmError, setPasswordConfirmError] : React.ComponentState = useState('');
  const [errorBlockForm, setErrorBlockForm] : React.ComponentState = useState('errorBlockForm');
  const informationArr : Array<object> = [];
  const emailTestString : RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const testLetters : RegExp = /[a-zA-Z]/;
  const testNumbers : RegExp = /[0-9]/;

  function onChangeUsername(event : any) {
    setUsername(event.target.value);
  }

  useEffect(() => {
    if(username.length < 4 || username.length > 16) {
      setUsernameError('Username length should be 4 - 16');
      setErrorBlockForm('errorBlockForm');
    } else if(!testLetters.test(username)) {
      setUsernameError('only ENGLISH');
      setErrorBlockForm('errorBlockForm');
    }
    else {
      setUsernameError('');
      setErrorBlockForm('errorBlockFormNo');
    }
  }, [username, testNumbers, testLetters]);

  function onChangeEmail(event : any) {
    setEmail(event.target.value);
  }

  useEffect(() => {
    if(!emailTestString.test(email)) {
      setEmailError('Email should looks like "example1@gmail.com"');
      setErrorBlockForm('errorBlockForm');
    } else {
      setEmailError('');
      setErrorBlockForm('errorBlockFormNo');
    }
  }, [email, emailTestString]);

  function onChangePhone(event : any) {
    setPhone(event.target.value);
  }

  useEffect(() => {
    if(testNumbers.test(phone) && phone.length >= 7 && phone.length <= 16 && !testLetters.test(phone)) {
      setPhoneError('');
      setErrorBlockForm('errorBlockFormNo');
    } else {
      setPhoneError('Phone NUMBER should looks like "+380112881884" without plus');
      setErrorBlockForm('errorBlockForm');
    }
    for(let i = 0; i < phone.length; i++) {
      if(phone[i] === '+') {
        setPhoneError('Phone NUMBER should looks like "+380112881884" without plus');
        setErrorBlockForm('errorBlockForm');
      }
    }
  }, [phone, testNumbers, testLetters]);

  function onChangePassword(event : any) {
    setPassword(event.target.value);
  }

  useEffect(() => {
    if(testLetters.test(password) && testNumbers.test(password) && password.length >= 6 && password.length <= 18) {
      setPasswordError('');
      setErrorBlockForm('errorBlockFormNo');
    } else {
      setPasswordError('Password length should be 8 - 18, has uppercase and lowercase letters and does not have spaces');
      setErrorBlockForm('errorBlockForm');
    }
  }, [password, testNumbers, testLetters]);

  function onChangePasswordConfirm(event : any) {
    setPasswordConfirm(event.target.value);
  }

  useEffect(() => {
    if(passwordConfirm === '') {
      setPasswordConfirmError('Please confirm your password');
      setErrorBlockForm('errorBlockForm');
    } else if(passwordConfirm !== password) {
      setPasswordConfirmError('Passwords should be identical');
      setErrorBlockForm('errorBlockForm');
    } else {
      setPasswordConfirmError('');
      setErrorBlockForm('errorBlockFormNo');
    }
  }, [password, passwordConfirm]);

  function onSubmit(event : React.MouseEvent) {
    event.preventDefault();

    informationArr.push({
      username : username,
      email : email,
      phone : phone,
      password : password
    });
    setUsername('');
    setEmail('');
    setPhone('');
    setPassword('');
    setPasswordConfirm('');
  }

  return(
    <ContentForm>
      <form>
        <FormInput type="text" name="username" id="username" value={username} placeholder={'*Username'} onChange={onChangeUsername} />
        { usernameError !== '' && <span>{usernameError}</span> }
        <FormInput type="text" name="email" id="email" placeholder={'*Email'} value={email} onChange={onChangeEmail} />
        { emailError !== '' && <span>{emailError}</span> }
        <FormInput type="text" name="phone" id="phone" placeholder={'Phone Number'} value={phone} onChange={onChangePhone} />
        { phoneError !== '' && <span>{phoneError}</span> }
        <FormInput type="password" name="password" id="password" placeholder={'*Password'} value={password} onChange={onChangePassword} />
        { passwordError !== '' && <span>{passwordError}</span> }
        <FormInput type="password" name="passwordConfirm" id="passwordConfirm" placeholder={'*Confirm Password'} value={passwordConfirm} onChange={onChangePasswordConfirm} />
        { passwordConfirmError !== '' && <span>{passwordConfirmError}</span> }
        <FormButton type={'button'} id="submitBtn" onClick={onSubmit} value={'sign in'}/>
        <ErrorBlockForm className={errorBlockForm}></ErrorBlockForm>
      </form>
    </ContentForm>
  );
};

export default FormComponentFunc;