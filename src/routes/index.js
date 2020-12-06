import React from 'react';
import Home from '../components/modulo/login/Home';
import RedefinirSenha from '../components/modulo/login/RedefinirSenha';
import HomeProfessor from '../components/modulo/professor/HomeProfessor';
import CadastrarAlunos from '../components/modulo/professor/CadastrarAlunos';
import RelatorioAlunos from '../components/modulo/professor/RelatorioAlunos';
import CadastrarTrilha from '../components/modulo/professor/CadastrarTrilha'
import CadastrarPergunta from '../components/modulo/professor/CadastrarPergunta'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/redefinirsenha" component={RedefinirSenha} />
      <Route exact path="/homeprofessor" component={HomeProfessor} />
      <Route exact path="/cadastraralunos" component={CadastrarAlunos} />
      <Route exact path="/relatorioalunos" component={RelatorioAlunos} />
      <Route exact path="/cadastrartrilha" component={CadastrarTrilha} />
      <Route exact path="/cadastrarpergunta" component={CadastrarPergunta} />
      
    </Switch>
  </Router>
);

export default Routes;
