import React from 'react';
import Home from '../components/modulo/login/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RedefinirSenha from '../components/modulo/login/RedefinirSenha';
import HomeProfessor from '../components/modulo/professor/HomeProfessor';
import CadastrarAlunos from '../components/modulo/professor/CadastrarAlunos';
import RelatorioAlunos from '../components/modulo/professor/RelatorioAlunos';
import CadastrarTrilha from '../components/modulo/professor/CadastrarTrilha'
import CadastrarPergunta from '../components/modulo/professor/CadastrarPergunta'
import HomeAluno from './../components/modulo/aluno/HomeAluno';
import RelatorioQuestoesAlunos from './../components/modulo/aluno/RelatorioQuestoesAlunos';
import Quiz from './../components/modulo/aluno/Quiz';


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
      <Route exact path="/homealuno" component={HomeAluno} />
      <Route exact path="/relatorioquestoesaluno" component={RelatorioQuestoesAlunos} />
      <Route exact path="/quiz" component={Quiz} />
    </Switch>
  </Router>
);

export default Routes;
