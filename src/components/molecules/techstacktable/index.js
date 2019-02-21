//@format
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
    }
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
        <p>
          I have used python quite extensively over the past few years for web
          design and data science. These are some of my favorite libraries.
        </p>
        <hr />
        <p>
          When collecting unstructured data, I have found data scraping to be
          incredibly helpful. These libraries help turn anything into usable
          data:
        </p>
        <ul>
          <li>
            <b>Selenium</b> is a webdriver which lets you programatically
            collect everything from the IoT that you could ever want.
          </li>
          <li>
            <b>BeautifulSoup</b> is able to parse websites that are not too
            heavy on javascript. It greatly facilitates reading them into
            primitive python data types.
          </li>
        </ul>
        <hr />
        <p>
          After collecting data, it typically needs to be cleaned and
          re-structured. This often seems to be true even when collecting data
          from a database which already ought to be clean.
        </p>
        <ul>
          <li>
            <b>Pandas</b> is my all time favorite python library. If you are
            only going to learn one thing, make it pandas.
          </li>
          <li>
            <b>Numpy</b> pandas wouldn't exist without numpy. Sometimes working
            at a lower level can be worthwhile.
          </li>
          <li>
            <b>NLTK</b> is hard to beat for any kind of natural language
            processing. I have found the punkt tokenizer especially helpful.
          </li>
        </ul>
        <hr />
        <p>Once the data has been cleaned the real fun begins...</p>
        <ul>
          <li>
            <b>SciPy</b> has an excellent curve_fit function as well as support
            for fourier transforms, interpolations, numerical integration, etc.
          </li>
          <li>
            <b>SKLearn</b> operates a bit higher than SciPy and lets you cut out
            a lot of the boilerplate for common models (naive bayes,
            regressions, word vectorizers, etc).
          </li>
          <li>
            <b>TensorFlow</b> run of the mill neural network library outfitted
            with lots of pre-trained networks to ease your pain.
          </li>
          <li>
            <b>Keras</b> sits on top of TF and lets you quickly bootstrap
            different network architectures.
          </li>
        </ul>
        <hr />
        <p>
          Humans are typically much better at recognizing patterns through
          images than they are at wading through enormous multi-dimensional
          matrices. These libraries help turn numbers into interactive,
          exploratory graphics.
        </p>
        <ul>
          <li>
            <b>Matplotlib</b> is everyone's favorite plotting library. The
            syntax mirrors that of Matlab and the default styles are fresh out
            of the 1980s. What's not to like?
          </li>
          <li>
            <b>Seaborn</b> works very well with matplotlib and allows for easy
            modern visual styling.
          </li>
          <li>
            <b>Bokeh</b> is a python wrapper for the popular JS library D3.
            Honestly, I prefer d3.. but for rapid prototyping of interactive
            diagrams in a browser, it's hard to beat.
          </li>
        </ul>
        <hr />
        <p>
          Lately, I have actually shifted away from python for web development.
          It often seems cleaner and more performant to link a javascript
          frontend directly into the database by way of lambda functions. But,
          in the past I have had a lot of fun running websevers with these two
          libraries.
        </p>
        <ul>
          <li>
            <b>Django</b> is essential for any full stack python developer.
            Class based views have the potential to cut out tons of boilerplate.
            Plus, management tends to like the dashboard access.
          </li>
          <li>
            <b>Bokeh</b> is not an entirely production-ready solution on its
            own, but spinning up a server will let you build an interactive
            dashboard in very little time
          </li>
        </ul>
      </div>
    )
  },
  {
    title: 'SQL',
    logo: Sql,
    subcomponent: (
      <div>
        <p>
          I took several SQL courses on Udemy when I was learning to code.
          Although most of the production projects that I have worked on lately
          are using some form of nosql, I LOVE writing sql for personal
          projects. Plus, the newest version of pgAdmin (4) has an awesome
          interface. So far, I have worked with these flavors of relational
          databases:
        </p>
        <ul>
          <li>
            <b>PostgreSQL</b>
          </li>
          <li>
            <b>MySQL</b>
          </li>
          <li>
            <b>SQLite</b>
          </li>
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
          <li>Axios</li>
          <li>Ajax</li>
        </ul>
      </div>
    )
  },
  {
    title: 'Mathematica',
    logo: Mathematica,
    subcomponent: (
      <div>
        <ul>
          <li>NDSolve</li>
          <li>Taylor Expansions</li>
          <li>Data import/export/manipulation</li>
          <li>Plotting</li>
        </ul>
      </div>
    )
  },
  {
    title: 'Bash',
    logo: Bash,
    subcomponent: (
      <div>
        <ul>
          general
          <li>running arch linux</li>
          text
          <li>grep/sed/awk</li>
          <li>sed</li>
          <li>awk</li>
          networking
          <li>squid/openVPN/iptables/wpa_supplicant/iw/ip/ifconfig</li>
          <li>squid</li>
          <li>openVPN</li>
          <li>iptables</li>
          <li>wpa_supplicant</li>
          <li>dhcpcd</li>
          <li>nmap</li>
          <li>iw</li>
          <li>ip</li>
          <li>ifconfig</li>
          <li>wget/axel with a webserver</li>
          system management
          <li>systemd</li>
          <li>cron</li>
          <li>cron</li>
        </ul>
      </div>
    )
  },
  {
    title: 'Cloud Infrastructure',
    logo: Aws,
    subcomponent: (
      <div>
        <ul>
          <li>api gateway</li>
          <li>lambda</li>
          <li>cognito</li>
          <li>ebs</li>
          <li>rds</li>
          <li>ec2</li>
          <li>s3</li>
        </ul>
      </div>
    )
  }
];

export default class TechStackTable extends Component {
  render() {
    return (
      <ExpandableTable
        expanded={this.props.expanded}
        handleExpand={this.props.handleExpand}
        showPagination={false}
        className={'techStack'}
        data={techStackData}
        columns={techStackColumns}
      />
    );
  }
}
