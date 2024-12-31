/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rohit's Portfolio",
  description:
    "Versatile Data Scientist & Analytics Expert@Onmarket Software Pvt.Ltd | AWS Solution Architect Assoc. | Python Advocate | | Skilled DevOps, MLOps & AICloud | Leading Business Triumphs with Data & Cloud-Native Expertise.",
  og: {
    title: "Rohit Sapkal Portfolio",
    type: "website",
    url: "https://github.com/rohitsapkal993",
  },
};

//Home Page
const greeting = {
  title: "Rohit Sapkal",
  logo_name: "RohitSapkal",
  nickname: "RohitSapkalSci",
  subTitle:
    "Versatile Data Scientist & Analytics Expert@Onmarket Software Pvt.Ltd | AWS Solution Architect Assoc. | Python Advocate | | Skilled DevOps, MLOps & AICloud | Leading Business Triumphs with Data & Cloud-Native Expertise.",
  resumeLink:
    "https://drive.google.com/file/d/1dN9JtCK09-ZW-DJtxF1k7NQQ7149OcMN/view?usp=sharing",
  portfolio_repository: "https://github.com/rohitsapkal993",
  githubProfile: "https://github.com/rohitsapkal993",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/rohitsapkal993",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "http://www.linkedin.com/in/rohitpsapkal",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:rohitsapkal993@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#8993be",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#00BCD4",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: {
            color: "#000000",
          },
        },



        // {
        //   skillName: "NPM",
        //   fontAwesomeClassname: "simple-icons:npm",
        //   style: {
        //     color: "#CB3837",
        //   },
        // },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Google",
    //   iconifyClassname: "https://media.giphy.com/media/5NPhdqmyRxn8I/giphy.gif",
    //   style: {
    //     color: "#000000",
    //   },
    //   profileLink: "https://www.coursera.org/account/accomplishments/professional-cert/YTMXBDJKRT38",
    // },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/rohitsapkalsci",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dy Patil Savitribai Phule Pune University",
      subtitle: "B.E Mechanical Engineering",
      descriptions: [
        "⚡ I have studied Mechanical engineering subjects like Mechanics, Thermodynamics, Heat Transfer, CAD/CAM, Power Plant Engineering, Mathematics, etc.",
        "⚡ Dissertation: Piezoelectric Footstep Power Generation",
        " The project aims to provide an environmentally safe and cost-effective alternative to traditional energy sources. When a good amount of pressure is applied to a piezoelectric material, it has the ability to create some voltage. Under a mechanical framework, piezoelectric generators are arranged in a planned circuit with other components in a series parallel combination.",
        
      ],
    },
    {
      title: "University of Stirling",
      subtitle: "M.Sc. in Data Science For Business",
      descriptions: [
        "⚡ I have taken varity of courses related to Data Science for Business which correspond to Explainable Modules: Data Analytics, Business Analytics, Statistics with R, Mobile Finance Applications, Representing and manipulating data, etc.",
        "⚡ Dissertation: Machine Learning Algorithms",
        "Explain how machine learning algorithms improve business, as well as sorts of machine learning algorithms and produce code to demonstrate a basic grasp of algorithms in Python programming, such as supervised learning, unsupervised learning, reinforcement learning, and its subcategories.", 
       
      ],
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    {
      title: "Data Analyst",
      subtitle: "-Joseph Santarcangelo",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/987429523977b9bc2a60c16dd31655db",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    {
      title: "Google Professional Data Analytics",
      subtitle: "- Google Career Certificates",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/d0f816317883d871c6589fdcdba4dea4",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Professional Experiences, Relevant Experience and Volunteership",
  description:[
    " Experienced and highly motivated Data Scientist with 3+ years of expertise in Python development and Data Analysis. Skilled in machine learning, database engineering, data warehousing, and analytics using Python and R. Certified Google Professional Data Analyst and IBM Data Analyst. Strong communicator, presenting complex results to non-technical audiences. Collaborated with stakeholders to define software requirements, analyse large datasets, and develop predictive models for informed decision-making. Proficient in Python frameworks (OpenCV, SciPy, NumPy, Matplotlib, Flask, Django) and experienced with big data technologies (Spark, Hadoop, SQL, MongoDB).",
    " MSc in Data Science for Business. Passionate about leveraging data and technology for strategic insights.",
  ],
    header_image_path: "experience.svg",
  sections: [
    {
      title: "Professional Experiences",
      experiences: [
        {
          title: "Chatbot For Residential Society (Python Developer)",
          company: "Arsys Inovics Private Limited",
          company_url: "https://cleartax.in/f/company/arsys-inovics-private-limited/U72100PN2014PTC152114",
          logo_path: "Arsys.png",
          duration: "Feb 2020 - March 2021",
          location: "Pune, Maharashtra",
          description:
          [
            "Collaborated with Senior Engineers and Project Manager to define software requirements and timelines, ensuring successful acquisition, design, and development of project specifications. Utilized statistical models and data training techniques to analyze large datasets and develop predictive models that informed key business decisions.",
            "Designed and delivered data visualizations for major stakeholders, including Board and Global Management Teams, using Microsoft Power BI. Utilized a strong statistical background to work on data collection, analysis, and reporting. ",
            "Participated consistently in project standup/status meetings, sprint meetings, and client engagement to ensure effective communication and collaboration with team members and stakeholders, leading to successful project completion.",
            "⚡ Technologies used: Python, Rasa, SQL, NLTK, NLP, REST_API, Tensorflow, Keras, GIT,PyTorch,",
          ],
            color: "#0879bf",
        },
        {
          title: "Castle Health Care (Python Developer)",
          company: "Arsys Inovics Private Limited",
          company_url: "https://cleartax.in/f/company/arsys-inovics-private-limited/U72100PN2014PTC152114",
          logo_path: "Arsys.png",
          duration: "Sept 2018 - Feb 2020",
          location: "Pune, Maharashtra",
          description:
          [
            "Patient problems/symptoms features, prior history, family history, and patients linked all test results such as x-ray, blood, etc. are all included in the Castle Health Care Project.Actively involved in Scrum meetings to discuss and understand software requirements, while also participating in different phases of the software development lifecycle, including requirements gathering, design, Statistical Model implementation, and coding of different modules as per business requirements. Prepared technical specification documents for various functionalities, ensuring effective communication and collaboration with senior engineers to meet project timelines.Translated business problems into data exploitation queries, collaborated and coordinated with multiple departments, stakeholders, partners, and external vendors, and utilized coding expertise in Python or R to create useful data outcomes and address data availability and quality issues in major business transformation programs.",
            "⚡ Technologies used:  Python, Django, DRF, MySQL, Pytest, REST_API, GIT,",
          ],
            color: "#9b1578",
        },
        {
          title: "Network Monitoring and Traffic Analysis (Python Developer)",
          company: "Arsys Inovics Private Limited.",
          company_url: "https://cleartax.in/f/company/arsys-inovics-private-limited/U72100PN2014PTC152114",
          logo_path: "Arsys.png",
          duration: "Oct 2017 - Sept 2018",
          location: "Pune, Maharashtra",
          description:
          [
            "A project for managing network inventory, network communication, fault management, and network traffic analysis is network traffic monitoring and traffic analysis.",
            "Designed and delivered visualizations for major stakeholders, including board members and global management teams, using Microsoft Power BI and expertise in data visualization techniques, statistical analysis, and data modeling.",
            "Developed and maintained data pipelines, ETL, and SQL queries to extract, transform, and load data from various sources, collaborating with stakeholders and IT team members to ensure data accuracy, consistency, and integrity.",
            "Proactively engaged in troubleshooting and debugging of models, helping to resolve issues and optimize performance for better accuracy.",
            "⚡ Technologies used: Python, Django, DRF, MySQL, Numpy, Pandas, Matplotlib, Pytest, REST_API, GIT.",
          ],
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Relevent Experiences",
      experiences: [
        {
          title: "Data Scientist",
          company: "StirBank.",
          logo_path: "Bank.jpg",
          duration: "Sept 2021 - March 2022",
          location: "Scotland, United Kingdom",
          description:[
            "Implemented predictive models to identify high-risk loan borrowers, reducing default rates and increasing profitability, contributing to the business objective of StirBank.",
            "Leveraged statistical analysis and data modelling techniques to identify trends and insights in complex bank data sets, resulting in an increase in the efficiency of data analysis by 30%.",
            "Applied debugging tools and techniques to identify and resolve issues and defects in data science workflows, resulting in a 25% reduction in the time required to identify and resolve issues.",
            "Applied various data analytical methodologies such as CRISP-DM, quantitative and qualitative research to produce comprehensive data reports. Additionally, I utilized algorithms like decision trees, logistic regression, and neural networks to identify potential loan borrowers and forecast their repayment likelihood.",
            "⚡ Technologies used: Anaconda, Python, Matplotlib, Pandas, NumPy",
          ],
        
          color: "#000000",
        },
        {
          title: "Data Analyst",
          company: "Retail",
          logo_path: "Retail.jpg",
          duration: "May 2021 - Sept 2021",
          location: "Scotland, United Kingdom",
          description:
          [
            "Utilized data analysis techniques on a retail shop dataset to identify and solve sales issues in targeted locations, resulting in increased revenue and customer satisfaction by 25%.",
            "Took ownership of data quality issues, building tools and processes to monitor and proactively identify potential issues and prevent downstream impacts on analysis and reporting.",
            "Developed and implemented machine learning models for prediction using Python, including logistic regression, decision trees, and neural networks. Achieved accurate and reliable results for various business problems and improved decision-making processes.",
            "Technologies used: Anaconda, Python, Matplotlib, Pandas, NumPy",
          ],
          color: "#ee3c26",
        },
        {
          title: "Data Analyst",
          company: "Ice_Cream",
          logo_path: "ice-cream.webp",
          duration: "March 2021 - May 2021",
          location: "Scotland, United Kingdom",
          description:
          [
            "Collaborated with the Ice Cream Factory to collect and analyze data from multiple cities across two countries, leveraging exploratory data analysis (EDA) and statistical modeling techniques to identify and solve business challenges, resulting in improved operations and increased profitability.",
            "Leveraged R programming language to conduct hypothesis testing and statistical modeling, enabling accurate sales prediction and implementation of effective business strategies to enhance revenue growth by 35%.",
            "⚡ Tech_Stack: R, Dplyr, Ggplot, choroplethrMaps, openintro, DataExplorer, tidyverse, dplyr",
          ],
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "RISC World Shop and Global Refills",
          company: "Risc World Shop",
          company_url: "https://www.risc.org.uk/main",
          logo_path: "risc.jpg",
          duration: "June 2021 - Aug 2021",
          location: "Reading, United Kingdom",
          description:
          [
            "Store Assistance, Served as cashier at tills.",
            "Worked as floor support for Men’s Department",
            "Helped customers on floors",
          ],
          color: "#4285F4",
        },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "IMG-3706.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Skills",
    subtitle:
      "Github repository for the more understanding of my skills.",
    link: "https://rohitsapkal993.github.io/rohitsapkal993/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Bramall Court, Alderson Road North, Sheffiled, United Kingdom, S2 4UF",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/ZHSp8M11uxpP9LHbA",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
