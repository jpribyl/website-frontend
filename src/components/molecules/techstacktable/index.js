//@prettier
import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ExpandableTable from '../../../components/atoms/expandabletable/';
import Python from '../../../assets/img/icons/800px-Python-logo-notext.png';
import Bash from '../../../assets/img/icons/bash.png';
import Aws from '../../../assets/img/icons/2000px-Amazon_Web_Services_Logo.png';
import Mathematica from '../../../assets/img/icons/2000px-Mathematica_Logo.png';
import Javascript from '../../../assets/img/icons/JavaScript-logo.png';
import Sql from '../../../assets/img/icons/1200px-Postgresql_elephant.png';

const techStackColumns = [
  {
    //Header: 'Logo',
    sortable: false,
    width: 75,
    Cell: u => {
      return <Image src={u.original.logo} rounded responsive />;
    },
  },
  {
    //Header: 'Title',
    accessor: 'title',
    sortable: false
  },
  {
    Cell: u => {
      return <FontAwesomeIcon className="dropdownIcon" icon="caret-down" />;
    },
    sortable: false,
    width: 40
  }
];

const techStackData = [
  {
    title: 'Python',
    logo: Python,
    subcomponent: (
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
    title: 'SQL',
    logo: Sql,
    subcomponent: (
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
    title: 'Javascript',
    logo: Javascript,
    subcomponent: (
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
    title: 'Mathematica',
    logo: Mathematica
  },
  {
    title: 'Bash',
    logo: Bash
  },
  {
    title: 'Cloud Infrastructure',
    logo: Aws
  }
];

export default class TechStackTable extends Component {
  render() {
    return (
      <ExpandableTable
        showPagination={false}
        className={'techStack'}
        data={techStackData}
        columns={techStackColumns}
      />
    );
  }
}
