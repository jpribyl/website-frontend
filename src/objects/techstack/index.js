import React from "react"
import { Image } from "react-bootstrap"
import { AwesomeButton } from "react-awesome-button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import Python from '../../assets/img/icons/800px-Python-logo-notext.png';
import Python from "../../assets/img/icons/Python_logo-512.png"
//import Bash from '../../assets/img/icons/bash.png';
import Bash from "../../assets/img/icons/bash-bw.png"
//import Tux from '../../assets/img/icons/220px-Tux.png';
import Tux from "../../assets/img/icons/Tux_Mono.svg.png"
//import Aws from '../../assets/img/icons/2000px-Amazon_Web_Services_Logo.png';
import Aws from "../../assets/img/icons/aws-bw.png"
//import Mathematica from '../../assets/img/icons/2000px-Mathematica_Logo.png';
import Mathematica from "../../assets/img/icons/mathematica-bw.png"
//import Javascript from '../../assets/img/icons/JavaScript-logo.png';
import Javascript from "../../assets/img/icons/js-bw.png"
//import Kubernetes from '../../assets/img/icons/Kubernetes_color.png'
import Kubernetes from "../../assets/img/icons/kubernetes-50.png"
//import Sql from '../../assets/img/icons/1200px-Postgresql_elephant.png';
import Sql from "../../assets/img/icons/postgres-bw.png"
import { Tooltip } from "react-tippy"

export const techStackColumns = [
  {
    //Header: 'Logo',
    sortable: false,
    width: 75,
    Cell: u => {
      return <Image src={u.original.logo} rounded responsive />
    }
  },
  {
    //Header: 'Title',
    accessor: "title",
    sortable: false
  },
  {
    Cell: u => {
      return <FontAwesomeIcon className="dropdownIcon" icon="caret-down" />
    },
    sortable: false,
    width: 40
  }
]

export const techStackData = [
  {
    title: "Python",
    logo: Python,
    subcomponent: (
      <div>
        <p>
          I have used python quite extensively over the past few years for web
          design and data science. These are some of my favorite libraries:
        </p>
        <hr />
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginLeft: "-30px"
          }}>
          <Tooltip title="You are what you test" arrow={true} size="big">
            <a href="https://docs.pytest.org/en/latest/contents.html">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Pytest
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="Now with better docs and a user friendly API"
            arrow={true}
            size="big">
            <a href="https://www.tensorflow.org/api_docs">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  TensorFlow
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="In case you need a neural net, but can only afford to write 11 lines of code"
            arrow={true}
            size="big">
            <a href="https://keras.io/">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Keras
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="My all time favorite library, a real life data panacea"
            arrow={true}
            size="big">
            <a href="https://pandas.pydata.org/pandas-docs/stable/">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Pandas
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="Without it, we wouldn't have pandas"
            arrow={true}
            size="big">
            <a href="https://docs.scipy.org/doc/numpy/reference/">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Numpy
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="Chop and scratch free text inputs"
            arrow={true}
            size="big">
            <a href="https://www.nltk.org/api/nltk.html">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  NLTK
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip title="curve_fit everything" arrow={true} size="big">
            <a href="https://www.scipy.org/docs.html">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  SciPy
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="For when you want to build models before you understand the theory"
            arrow={true}
            size="big">
            <a href="https://scikit-learn.org/stable/documentation.html">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  SKLearn
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip title="Kernels for life" arrow={true} size="big">
            <a href="https://ipython.org/documentation.html">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Ipython
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="Easing the transition from Mathematica"
            arrow={true}
            size="big">
            <a href="https://jupyter.readthedocs.io/en/latest/">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Jupyter
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="For when a Flask won't cut it"
            arrow={true}
            size="big">
            <a href="https://docs.djangoproject.com/en/2.2/">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Django
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="Scraping websites heavy on javascript"
            arrow={true}
            size="big">
            <a href="https://www.seleniumhq.org/docs/">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Selenium
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="Parsing html into dictionaries"
            arrow={true}
            size="big">
            <a href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/">
              <span className="technologyButton">
                <AwesomeButton
                  className="technologyButton"
                  type="primary"
                  bubbles={true}>
                  BeautifulSoup
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="Everyone's favorite plotting library"
            arrow={true}
            size="big">
            <a href="https://matplotlib.org/3.1.1/contents.html">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Matplotlib
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="Matplotlib, but with sane defaults"
            arrow={true}
            size="big">
            <a href="https://seaborn.pydata.org/">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Seaborn
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="Gorgeous, interactive charts that are not quite production ready"
            arrow={true}
            size="big">
            <a href="https://bokeh.pydata.org/en/latest/docs/reference.html">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Bokeh
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip title="HTTP for Humans™" arrow={true} size="big">
            <a href="https://2.python-requests.org/en/master/">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Requests
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip title="Making classes fun again" arrow={true} size="big">
            <a href="http://www.attrs.org/en/stable/api.html">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Attrs
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
        </ul>
        <hr />
      </div>
    )
  },
  {
    title: "Amazon Web Services",
    logo: Aws,
    subcomponent: (
      <div>
        <p>
          I have experience with Heroku, Digital Ocean, and AWS. Out of those, I
          have found AWS to typically feature the lowest server cost as well as
          the most customizability. This comes with the price of more
          maintenance and (sometimes) longer implementation. The AWS ecosystem
          is immense, but here are some of the services I have used:
        </p>
        <hr />
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginLeft: "-30px"
          }}>
          <Tooltip title="Works greath with λ" arrow={true} size="big">
            <a href="https://docs.aws.amazon.com/apigateway/index.html">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Api Gateway
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip title="Don't worry about hardware" arrow={true} size="big">
            <a href="https://docs.aws.amazon.com/lambda/index.html">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Lambda
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip title="Remember hardware?" arrow={true} size="big">
            <a href="https://docs.aws.amazon.com/elastic-beanstalk/index.html">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Elastic Beanstalk (EBS)
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip title="A fancy way to EC2" arrow={true} size="big">
            <a href="https://docs.aws.amazon.com/rds/index.html">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Relational Database Service (RDS)
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="If this were a lego, it would be the 2x4"
            arrow={true}
            size="big">
            <a href="https://docs.aws.amazon.com/ec2/index.html">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Elastic Compute Cloud (EC2)
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="Directing requests since 2010"
            arrow={true}
            size="big">
            <a href="https://docs.aws.amazon.com/route53/index.html">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Route 53
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="High availability around the world"
            arrow={true}
            size="big">
            <a href="https://docs.aws.amazon.com/cloudfront/index.html">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  CloudFront
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="IAM me, but who are you? (sorry)"
            arrow={true}
            size="big">
            <a href="https://docs.aws.amazon.com/iam/index.html">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Identity and Access Management (IAM)
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip title="Just forget about oauth2" arrow={true} size="big">
            <a href="https://docs.aws.amazon.com/cognito/index.html">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Cognito
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip title="Keep your devs in check" arrow={true} size="big">
            <a href="https://docs.aws.amazon.com/singlesignon/index.html">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Single Sign On (SSO)
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
        </ul>
        <hr />
      </div>
    )
  },
  {
    title: "Javascript",
    logo: Javascript,
    subcomponent: (
      <div>
        <p>
          Javascript is a language which has really grown on me. It has a lot of
          quirks, but it also has an elegance. I have used too many npm modules
          to count, but here is a highlight reel:
        </p>
        <hr />
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginLeft: "-30px"
          }}>
          <Tooltip
            title="More than just a plotting library"
            arrow={true}
            size="big">
            <a href="https://github.com/d3/d3/wiki">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  D3
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="The modern web, brought to you by bootstrap"
            arrow={true}
            size="big">
            <a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Bootstrap
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="Let's not fight about frameworks"
            arrow={true}
            size="big">
            <a href="https://reactjs.org/docs/getting-started.html">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  React
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip title="What state are you in?" arrow={true} size="big">
            <a href="https://redux.js.org/introduction/getting-started">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Redux
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip title="Might cause side effects" arrow={true} size="big">
            <a href="https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Redux-Saga
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="I'm not sure javascript would exist without it"
            arrow={true}
            size="big">
            <a href="https://nodejs.org/en/docs/">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Node
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip title="A feel good node wrapper" arrow={true} size="big">
            <a href="https://hapijs.com/tutorials">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Hapi
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="They prioritize developer happiness, just like me!"
            arrow={true}
            size="big">
            <a href="https://adonisjs.com/docs/4.1/installation">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Adonis
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip title="Don't reinvent the wheel" arrow={true} size="big">
            <a href="https://lodash.com/docs/4.17.11">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Lodash
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip title="Keep your promises" arrow={true} size="big">
            <a href="http://bluebirdjs.com/docs/api-reference.html">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Bluebird
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip title="Less necessary these days" arrow={true} size="big">
            <a href="https://caolan.github.io/async/v3/">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Async
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip title="Even better than requests.py" arrow={true} size="big">
            <a href="https://github.com/axios/axios">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Axios
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
        </ul>
        <hr />
      </div>
    )
  },
  {
    title: "Kubernetes",
    logo: Kubernetes,
    subcomponent: (
      <div>
        <p>
          My fascination with kubernetes is fairly recent. Currently, I am
          looking into running apache spark on the bare metal raspberry pi
          cluster I built in my laundry room. So far I have configured the basic
          cluster to run a stateless web app. Along the way I have gained
          exposure to much of the kubernetes ecosystem:
        </p>
        <hr />
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginLeft: "-30px"
          }}>
          <Tooltip
            title="Currently using weave"
            arrow={true}
            size="big">
            <a href="https://kubernetes.io/docs/concepts/cluster-administration/networking/">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Cluster Networking
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="Traeffik works well on ARM builds"
            arrow={true}
            size="big">
            <a href="https://kubernetes.io/docs/concepts/services-networking/ingress/">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Ingress
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="exposing apps"
            arrow={true}
            size="big">
            <a href="https://kubernetes.io/docs/concepts/services-networking/service/">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Services
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="rolling updates, testing & deployment pipelines using docker webhooks and a simple web listener"
            arrow={true}
            size="big">
            <a href="https://docs.docker.com/docker-hub/webhooks/">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                        CI / CD
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="Using RBAC"
            arrow={true}
            size="big">
            <a href="https://kubernetes.io/docs/concepts/policy/pod-security-policy/">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                        Security Policies
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="Easey peasey"
            arrow={true}
            size="big">
            <a href="https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                        Horizontal Autoscaling
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
        </ul>
        <hr />
      </div>
    )
  },
  {
    title: "SQL",
    logo: Sql,
    subcomponent: (
      <div>
        <p>
          I love writing sql. Every office needs one, right? So far, I have
          worked with these flavors of relational databases:
        </p>
        <hr />
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginLeft: "-30px"
          }}>
          <a href="https://dev.mysql.com/doc/">
            <span className="technologyButton">
              <AwesomeButton type="primary" bubbles={true}>
                MySQL
              </AwesomeButton>
            </span>
          </a>
          <a href="https://www.postgresql.org/docs/">
            <span className="technologyButton">
              <AwesomeButton type="primary" bubbles={true}>
                PostgreSQL
              </AwesomeButton>
            </span>
          </a>
          <a href="https://www.sqlite.org/docs.html">
            <span className="technologyButton">
              <AwesomeButton type="primary" bubbles={true}>
                SQLite
              </AwesomeButton>
            </span>
          </a>
        </ul>
        <hr />
        <p>
          I have the most experience with basic CRUD and joins, but I did get
          into stored procedures and transactions a couple years back. I would
          really enjoy picking up where I left off on those if there was a
          professional need.
        </p>
      </div>
    )
  },
  {
    title: "*Nix",
    logo: Tux,
    subcomponent: (
      <div>
        <p>
          I am very passionate about open source software and can't get enough
          of linux. On a good day, I never have to leave the terminal. These are
          some of my favorite *nix tools
        </p>
        <hr />
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginLeft: "-30px"
          }}>
          <Tooltip title="[SOLVED]" arrow={true} size="big">
            <a href="https://wiki.archlinux.org/">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Arch Linux
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip title="hjkl" arrow={true} size="big">
            <a href="https://www.vim.org/docs.php">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Vim
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip title="finger food > eye candy" arrow={true} size="big">
            <a href="https://i3wm.org/docs/userguide.html">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  I3wm
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip title="Gnome is cool too" arrow={true} size="big">
            <a href="https://docs.xfce.org/">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Xfce
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="The file manager of champions"
            arrow={true}
            size="big">
            <a href="https://github.com/ranger/ranger/wiki/Official-user-guide">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Ranger
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="Less laggy than google sheets"
            arrow={true}
            size="big">
            <a href="https://www.libreoffice.org/community/docs-team/">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  LibreOffice
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip title="Saving me from myself" arrow={true} size="big">
            <a href="http://anamnesis.sourceforge.net/">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Anamnesis
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip title="A beautiful *nix mail client" arrow={true} size="big">
            <a href="https://getmailspring.com/">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Mailspring
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="Use it with compton for bonus points"
            arrow={true}
            size="big">
            <a href="https://guake.readthedocs.io/en/stable/">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Guake Terminal
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
          <Tooltip
            title="Spotlight search for the minimalist"
            arrow={true}
            size="big">
            <a href="https://dmenu.readthedocs.io/en/latest/">
              <span className="technologyButton">
                <AwesomeButton type="primary" bubbles={true}>
                  Dmenu
                </AwesomeButton>
              </span>
            </a>
          </Tooltip>
        </ul>
        <hr />
      </div>
    )
  },
  {
    title: "Bash",
    logo: Bash,
    subcomponent: (
      <div>
        <p>
          Along with the linux ecosystem, I really enjoy writing bash scripts.
          Here are some of the friends that I have made along the way:
        </p>
        <hr />
        <p>Text Manipulation</p>
        <ul>
          <li>
            <b>grep</b> is a simple tool that lets you search an entire codebase
            without having to leave your terminal. I have aliased gi to `grep
            -ri` because I use it so often
          </li>
          <li>
            <b>sed</b> functions very nicely with grep. I love to pipe `grep
            -ril` into `sed -s` for a quick recursive renaming of variables.{" "}
            <a href="https://devpost.com/software/sed-pathfinder">Here</a> is a
            fun article about a maze-solver written entirely in sed.
          </li>
          <li>
            <b>awk</b> Whenever grep and sed are insufficient, you can ALWAYS do
            it with awk. My only regret about awk is that I have not yet used it
            frequently enough to hit a real flow with the syntax
          </li>
        </ul>
        <hr />
        <p>
          I learned about quite a few networking tools when I was setting up our
          home wifi (blog post in the works) - here are some that stick out to
          me
        </p>
        <ul>
          <li>
            <b>iptables</b> My dad says that writing iptables will "put hair on
            my chest" - whatever that means. I have used iptables primarily to
            control which ports go where and who can ssh into what from where.
          </li>
          <li>
            <b>wpa_supplicant</b> is a wpa key negotiator which is actually much
            easier to troubleshoot than many of the higher level GUI's
          </li>
          <li>
            <b>dhcpcd</b> or "dynamic host configuration protocol" talks to a
            dhcp server and together they take care of assigning ip addresses to
            clients
          </li>
          <li>
            <b>dnsmasq</b> I am running a home-brew wifi as wan router off of a
            pi and use dnsmasq to run the dhcp server. I do not actually use
            it's dns lookup because I have a pi-hole sitting in the cloud
            upstream.
          </li>
          <li>
            <b>nmap</b> is more useful for pen-testing but also for running
            network wide scans without having to log into the router
          </li>
          <li>
            <b>iw / ip / ifconfig</b> are what I use "in the trenches" - IE if
            my network is down and I want to poke at it to see why, I might try
            using ip to set a device down/up or iw to check the link or ifconfig
            to set a static ip.
          </li>
          <li>
            <b>wget/axel</b> paired with a python webserver provides an
            incredibly efficient method to transfer files between computers on
            my vpn. I can hit 5-10Mb/s or more with these tools
          </li>
          <li>
            <b>Squid and openVPN</b> Although not actually bash, they are
            controlled by systemd. Our bandwidth is not always fast so I set up
            a transparent caching proxy on our local network to help with http
            requests. Additionally, I set up a server in the cloud running
            openVPN to protect our network requests from anyone else on the
            public hotspot.
          </li>
        </ul>
        <hr />
        <p>For general collecting of system processes, I have two favorites</p>
        <ul>
          <li>
            <b>systemd</b> is what I use for any sort of daemon. It's really
            nice to be able to check status with something as simple as
            `systemctl status` and have the logging taken care of by journalctl
          </li>
          <li>
            <b>cron</b> is more for recurring jobs. I have had some issues with
            cron in the past. It is not a great choice for jobs that NEED to run
            even when a computer is offline. And, it can be tricky to get access
            to the right environment variables. But, there is a reason that cron
            has been around for as long as it has.
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "Mathematica",
    logo: Mathematica,
    subcomponent: (
      <div>
        <p>
          I do not use Mathematica very much anymore, but it will always hold a
          special place in my heart. It was the first introduction to
          programming that I ever had. It was incredibly valuable during my
          undergraduate physics program.
        </p>
        <hr />
        <ul>
          <li>
            <b>NDSolve</b> might be the most powerful tool in Mathematica. It is
            a numerical differential equation solver that has support for
            several different methods and types of problem (shooting, ivps, etc)
          </li>
          <li>
            <b>Taylor Expansions</b> were one of the things that I did almost
            daily during my undergraduate studies. Mathematica makes them much
            less painful.
          </li>
          <li>
            <b>Data import/export/manipulation</b> When I was collaborating with
            Princeton for research, we had to pass data sets back and forth.
            Nothing too serious, but I did start to think about I/O early in my
            programming career
          </li>
          <li>
            <b>Plotting</b> Before I learned how to use more powerful plotting
            libraries, I loved mathematica's plotting. It is incredibly easy to
            bootstrap a graphical representation to your solution for a problem.
            This can help determine it's validity (IE does it pass the smell
            test)
          </li>
        </ul>
      </div>
    )
  }
]
