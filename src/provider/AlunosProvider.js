import api from './api'

const headers = {
  'Content-Type': 'application/json; charset=utf-8' 
};

export async function getAlunos() {
  return await api.get('/alunos',{headers});
}