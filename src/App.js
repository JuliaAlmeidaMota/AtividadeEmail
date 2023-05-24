import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './css/index.css'

export default function App() { 
  const [nomeState, nomeStateChange] = useState('')
  const [emailState, emailStateChange] = useState('')
  const [telefoneState, telefoneStateChange] = useState('')
  const [showEmails, showEmailsChange] = useState([])

  const emails = []

  const formSubmit = (e) => {
    e.preventDefault()
    if (!nomeState || !emailState || !telefoneState ){
      alert ("Campos obrigatórios não preenchido!")
      return 
    }
    alert ("Enviado com sucesso!")
    addEmailToList({
      nome : nomeState,
      email : emailState,
      telefone : telefoneState
    })
  }
 
  const addEmailToList = (data) => {
    emails.push(data)
    showEmailsChange(emails.map((value, index) => <li key={index}>{value.nome} - {value.email} - {value.telefone}</li>))
  }

  return (
    <View style={styles.container}>
     
     <form onSubmit={formSubmit}>
      <span>
        <label>Nome</label>
        <input type='text' name='nome' placeholder='Digite seu nome' value={nomeState} onChange={(e) => nomeStateChange(e.target.value)} />
        <Text>{nomeState}</Text>
      </span>
<br></br>
      <span>
        <label>E-mail</label>
        <input type='email' name='email' placeholder='Digite seu e-mail' value={emailState} onChange={(e) => emailStateChange(e.target.value)} />
        <Text>{emailState}</Text>
      </span>
<br></br>
      <span>
        <label>Telefone</label>
        <input type='text' name='telefone' placeholder='Digite seu telefone' value={telefoneState} onChange={(e) => telefoneStateChange(e.target.value)} />
        <Text>{telefoneState}</Text>
      </span>
<br></br>
      <button type='submit'>
      
        Enviar
      </button>
     </form>
     <br />
     <br />
     <h2>Lista de emails enviados</h2>
     <ul>{showEmails}</ul>
      <StatusBar style="auto" />
      <footer>
        <hr />
        Criado por Julia Almeida Mota
      </footer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffdddd',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
