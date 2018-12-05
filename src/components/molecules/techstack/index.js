import React, {Component} from 'react';
import ExpandableList from '../../../components/atoms/expandablelist/';
import Python from '../../../assets/img/icons/800px-Python-logo-notext.png';
import Bash from '../../../assets/img/icons/bash.png';
import Aws from '../../../assets/img/icons/2000px-Amazon_Web_Services_Logo.png';
import Mathematica from '../../../assets/img/icons/2000px-Mathematica_Logo.png';
import Javascript from '../../../assets/img/icons/JavaScript-logo.png';
import Sql from '../../../assets/img/icons/1200px-Postgresql_elephant.png';

const techStack = [
  {
    name: 'Python',
    id: 'python',
    logo: Python,
    expandedText: (
      <div>
        Collection:
        <ul>
          <li>Selenium </li>
          <li>BeautifulSoup </li>
        </ul>
        Manipulation:
        <ul>
          <li>Pandas</li>
          <li>Numpy</li>
          <li>NLTK</li>
        </ul>
        Modeling:
        <ul>
          <li>SKLearn</li>
          <li>TensorFlow</li>
          <li>Keras</li>
        </ul>
        Presentation:
        <ul>
          <li>Matplotlib</li>
          <li>Seaborn</li>
          <li>Bokeh</li>
        </ul>
        Web:
        <ul>
          <li>Django</li>
          <li>Bokeh</li>
        </ul>
      </div>
    )
  },
  {
    name: 'SQL',
    id: 'sql',
    logo: Sql,
    expandedText: (
      <div>
        <ul>
          <li>PostgreSQL</li>
          <li>MySQL</li>
          <li>SQLite</li>
        </ul>
      </div>
    )
  },
  {
    name: 'Javascript',
    id: 'javascript',
    logo: Javascript,
    expandedText: (
      <div>
        Visualization:
        <ul>
          <li>D3</li>
          <li>Bootstrap</li>
        </ul>
        Frontend:
        <ul>
          <li>React</li>
          <li>Redux</li>
        </ul>
        Backend:
        <ul>
          <li>Hapi</li>
          <li>Node</li>
        </ul>
        Utilities:
        <ul>
          <li>Webpack</li>
          <li>Lodash</li>
          <li>Bluebird</li>
          <li>Async</li>
        </ul>
      </div>
    )
  },
  {
    name: 'Mathematica',
    id: 'mathematica',
    logo: Mathematica
  },
  {
    name: 'Bash',
    id: 'bash',
    logo: Bash
  },
  {
    name: 'Cloud Infrastructure',
    id: 'cloud',
    logo: Aws
  }
];

class TechStack extends Component {
  render() {
    return <ExpandableList listData={techStack} />;
  }
}

export default TechStack;
