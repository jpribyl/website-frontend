import React from 'react';
import {Image} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Python from '../../assets/img/icons/800px-Python-logo-notext.png';
import Bash from '../../assets/img/icons/bash.png';
import Tux from '../../assets/img/icons/220px-Tux.png';
import Aws from '../../assets/img/icons/2000px-Amazon_Web_Services_Logo.png';
import Mathematica from '../../assets/img/icons/2000px-Mathematica_Logo.png';
import Javascript from '../../assets/img/icons/JavaScript-logo.png';
import Sql from '../../assets/img/icons/1200px-Postgresql_elephant.png';

export const techStackColumns = [
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

export const techStackData = [
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
        <hr />
        <p>
          Last but not least, I am a firm believer in test driven development.
          Although deadlines can make it difficult, it is much harder to operate
          at scale if you never took the time to write tests. Some of my
          production projects have fallen victim to this fate, but I am militant
          about it on personal projects.
        </p>
        <ul>
          <li>
            <b>Pytest</b> is my favorite python testing library. I have paired
            it with the requests library to test api's and selenium to test
            webapps.{' '}
            <a href="https://blog.daftcode.pl/the-cleaning-hand-of-pytest-28f434f4b684">
              This
            </a>{' '}
            article compares a couple of different testing frameworks in python.
            I found it very helpful when selecting a library for my own
            projects.
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
          interface.
        </p>
        <hr />
        <p>So far, I have worked with these flavors of relational databases:</p>
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
        <hr />
        <p>
          I have the most experience with basic CRUD and joins, but I did get
          into stored procedures and transactions while taking the Udemy
          courses. I would really enjoy picking up where I left off on those if
          there was a professional need.
        </p>
      </div>
    )
  },
  {
    title: 'Javascript',
    logo: Javascript,
    subcomponent: (
      <div>
        <p>
          Javascript is a language which has really grown on me in the last
          year. It has a lot of quirks, but it also has an elegance. I have used
          too many npm modules to count, but here is a highlight reel.
        </p>
        <hr />
        <p>
          When designing the look and feel of a web app, these two libraries
          have come in super handy:
        </p>
        <ul>
          <li>
            <b>D3</b> is the most fun that I have ever had building graphics. It
            is so much more than a plotting library. I have used it in
            production as well as personal projects.
          </li>
          <li>
            <b>Bootstrap</b> paved the way for much of the modern web. Although
            many bootstrap sites have a cookie-cutter feel to them, it continues
            to be one of the libraries that I could not live without.
          </li>
        </ul>
        <hr />
        <p>Designing a production web app:</p>
        <ul>
          <li>
            <b>React</b> is my framework of choice. I have never been on a
            project that used Angular or Vue, so I can't speak to those two --
            however, I really like the information flow in react.
          </li>
          <li>
            <b>Redux</b> allows for simple state management and almost feels
            like a part of react at this point. There are lots of awesome
            middleware options to make it even better.
          </li>
        </ul>
        <hr />
        <p>Full stack javascript requires a few backend tools as well:</p>
        <ul>
          <li>
            <b>Node</b> is node. Without node there is no javascript. Although I
            have never written an app entirely in node, it is the foundation of
            almost every javascript project that I have done.
          </li>
          <li>
            <b>Hapi</b> provides the server framework for node. It lets you skip
            out on a lot of boiler plate code and focus on the logic.
          </li>
        </ul>
        <hr />
        <p>
          Although vanilla js has come a long way, there are some basic utility
          libraries that it has not fully replaced:
        </p>
        <ul>
          <li>
            <b>Lodash</b> I am actually a big fan of the native filter map and
            reduce methods for taming objects in js.. but every once in a while
            you can save yourself a lot of effort with something like lodash's
            array chunk method.
          </li>
          <li>
            <b>Bluebird</b> lets you turn almost anything into a promise.
          </li>
          <li>
            <b>Async</b> is now part of vanilla js, but some of the projects
            that I have worked on are old enough that it had to be imported. I
            still find the auto method incredibly helpful for making lots of
            http requests efficiently.
          </li>
          <li>
            <b>Axios</b> is my go to for making promise based http requests.
            It's similar to the requests library in python
          </li>
          <li>
            <b>Webpack</b> for bundling and delivering content. I am still
            shocked that this actually works.
          </li>
        </ul>
      </div>
    )
  },
  {
    title: 'Mathematica',
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
            libraries, I LOVED mathematica's plotting. It is incredibly easy to
            bootstrap a graphical representation to your solution for a problem.
            This can help determine it's validity (IE does it pass the smell
            test)
          </li>
        </ul>
      </div>
    )
  },
  {
    title: 'Linux Ecosystem ',
    logo: Tux,
    subcomponent: (
      <div>
        <p>
          I am very passionate about open source software and I can't get enough
          of linux. Watching my computer boot into Arch still gives me
          goosebumps.
        </p>
        <hr />
        <p>General Tools</p>
        <ul>
          <li>
            <b>Arch linux</b> I have been running arch on all of my machines for
            a while now and outside of the context of iOS app development, I do
            not think that I will ever use another OS. I LOVE the rolling
            release structure and being close enough to my computer to
            understand why things aren't working.
          </li>
          <li>
            <b>Vim</b> I adore vim. I have spent more time than was strictly
            necessary reading blog posts and watching vimcasts. My top plugins
            are jedi, ale, vim-surround, vimux, and ranger.vim. I love vim
            enough to install vimium on my girlfriend's computer and to
            read/write emails in neomutt.
          </li>
          <li>
            <b>I3wm</b> tiling window managers are lots of fun. I3 has a very
            straightforward conf file that lets you control almost everything
            about how your computer functions.
          </li>
          <li>
            <b>Xfce</b> Although I don't load very many of xfce's features I do
            appreciate letting a lightweight version of it control my power
            settings.
          </li>
          <li>
            <b>Ranger</b> There has never been a better file browser.
          </li>
          <li>
            <b>LibreOffice</b> Without the hard work that these guys have done,
            it would be much more difficult to use linux as a primary operating
            system
          </li>
        </ul>
      </div>
    )
  },
  {
    title: 'Bash',
    logo: Bash,
    subcomponent: (
      <div>
        <p>
          Along with the linux ecosystem, I really enjoy writing bash scripts.
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
            -ril` into `sed -s` for a quick recursive renaming of variables.{' '}
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
    title: 'Cloud Infrastructure',
    logo: Aws,
    subcomponent: (
      <div>
        <p>
          I have experience with Heroku, Digital Ocean, and AWS. Out of those, I
          have found AWS to typically feature the lowest server cost as well as
          the most customizability. This comes at the cost of more maintenance
          and (sometimes) longer implementation.
        </p>
        <hr />
        <p>Here are some of the AWS tools that I have found the most helpful</p>
        <ul>
          <li>
            <b>api gateway</b> functions very nicely with lambda. I recently
            learned about the lambda proxy integration which will let you almost
            fake a server by assigning a lambda listener that directs incoming
            requests
          </li>
          <li>
            <b>lambda</b> is the future. Or at least, that's what everyone says.
            Sometimes it can be harder to test, and if you're not careful it
            will return 200s when it should return 500s but in the right setting
            server costs can drop by 90% or more. And, once you write a decent
            deploy script it is not very hard to get your app online.
          </li>
          <li>
            <b>cognito</b> is a remarkably low hassel way to handle
            authentication. In the past I have struggled with implementing an
            auth sequence that is simple but not insecure, but now I don't even
            have to think about it!
          </li>
          <li>
            <b>ebs</b> Before learning how to use lambda functions, I deployed
            several personal web apps through elastic beanstalk.
          </li>
          <li>
            <b>rds</b> Even when going serverless, it is often still very
            helpful (or even essential) to have a server running your database.
            For my personal projects I tend to use one free tier rds instance
            running a postgres server.
          </li>
          <li>
            <b>ec2</b> is useful for just about everything! I have even used it
            in conjunction with Bees With Machine Guns (look it up) to run an
            open source load test on our production app prior to launch.
          </li>
          <li>
            <b>s3</b> is another essential piece of the infrastructure. Without
            s3, it would be much more difficult to run a static site able to
            render content in a timely fashion.
          </li>
        </ul>
        <hr />
        <p>And, some of the things that I have done on heroku</p>
        <ul>
          <li>
            <b>Webpack Integration</b> In order to save some money on server
            costs, I was able to bundle the application logic and the frontend
            for one of our production dashboards. This means that I only needed
            one server to handle frontend and backend for a django/react web
            app.
          </li>
          <li>
            <b>Redis Cache/Queue</b> When load times for our production
            dashboard started getting a little high, I was able to cut them down
            by 75% or more with the introduction of a redis cache. Additionally,
            I introduced a queue to handle long running processes (like push
            notifications).
          </li>
          <li>
            <b>Deploy Hooks</b> Although we have yet to fully complete our test
            suite / deploy hooks - it is possible to link heroku into a github
            account. Then, you can require all tests to pass before
            automatically deploying a rolling upate to the app.
          </li>
        </ul>
        <hr />
        <p>
          I have the least amount of experience with digital ocean, but it is
          also the only server for which I am currently paying.
        </p>
        <ul>
          <li>
            <b>OpenVPN</b> VPN providers have a terrible history with regards to
            user privacy. So, I decided to spin up my own homebrewed VPN server
            in the cloud. I chose digital ocean because their entry level
            droplet costs $5 a month and allows up to 1Tb of throughput. This is
            incredibly cheap. The same amount of bandwidth on AWS would cost
            around $150!
          </li>
        </ul>
      </div>
    )
  }
];
