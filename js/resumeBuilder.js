// Lines 12-13: I do not have a twitter account, added LinkedIn and Degreed instead
// Line 24: Added variable 'bc' to save on keystrokes in dot notation
// Lines 41, 45: Used HTMLcontactGeneric to format LinkedIn and Degreed

var bio = {
  "name": "Ray A Michaud",
  "role": "Web Developer",
  "contacts": {
    "mobile": "(207) 754-4930",
    "email": "rayamichaud@twc.com",
    "github": "raymichaud",
    "linkedin": "rayamichaud",
    "degreed": "raymichaud",
    "location": "Lewiston, ME"
  },
  "welcomeMessage": "Welcome. I am currently employed as a full stack web developer. I am pursuing educational credentials to augment my self-learning and experience in this field.",
  "skills": [
    "web application development",
    "technology training",
    "fine art painting"
  ],
  "biopic": "images/RayMichaud.jpg",
  "display": function() {
    var bc = bio.contacts

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bc.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bc.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bc.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);

    var formattedLinkedin = HTMLcontactGeneric.replace("%data%", bc.linkedin);
    formattedLinkedin = formattedLinkedin.replace("%contact%", "linkedin")
    $("#topContacts").append(formattedLinkedin);
    $("#footerContacts").append(formattedLinkedin);

    var formattedDegreed = HTMLcontactGeneric.replace("%data%", bc.degreed);
    formattedDegreed = formattedDegreed.replace("%contact%", "degreed")
    $("#topContacts").append(formattedDegreed);
    $("#footerContacts").append(formattedDegreed);

    var formattedlocation = HTMLlocation.replace("%data%", bc.location);
    $("#topContacts").append(formattedlocation);
    $("#footerContacts").append(formattedlocation);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);

    $("#header").append(HTMLskillsStart);

    for (skill in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkill)
    }
  }
};

// The rubric states that education.schools.majors is an array of strings.
// This implies that you expect to see more than one major, though this does
//      not match up with what is displayed on the mock-up. Lines 232-235 is
//      a routine that will display more than one major, seperated by commas.
// Line 217 and Line 242: created variables "es" and "eo" to cut down on keystrokes.
// line 243-244: Created a different display format to accomodate multiple
//      courses per online school and added "courses" array to education object.
var education = {
  "schools": [
    {
      "name": "St Dominic Regional High School",
      "location": "Lewiston, ME",
      "degree": "Graduated 3rd in class",
      "majors": [
        "College Preparation",
        "STEM"
      ],
      "dates": "1972-1976",
      "url": "http://www.stdomsmaine.org/"
    }
  ],
  "onlineCourses": [
    {
      "school": "Udacity",
      "dates": "2016-Present",
      "courses": [
        {
          "title": "Front End Developer Nanodegree",
          "url": "www.udacity.com"
        }
      ]
    },
    {
      "school": "Code School",
      "dates": "2013-Present",
      "courses": [
        {
          "title": "Functional HTML5 & CSS3",
          "url": "https://www.codeschool.com/courses/functional-html5-css3"
        },
        {
          "title": "Front-end Foundations",
          "url": "https://www.codeschool.com/courses/front-end-foundations"
        },
        {
          "title": "Front-end Formations",
          "url": "https://www.codeschool.com/courses/front-end-formations"
        },
        {
          "title": "CSS Cross-Country",
          "url": "https://www.codeschool.com/courses/css-cross-country"
        },
        {
          "title": "Journey Into Mobile",
          "url": "https://www.codeschool.com/courses/journey-into-mobile"
        },
        {
          "title": "Fundamentals of Design",
          "url": "https://www.codeschool.com/courses/fundamentals-of-design"
        },
        {
          "title": "Adventures in Web Animations",
          "url": "https://www.codeschool.com/courses/adventures-in-web-animations"
        },
        {
          "title": "Assembling Sass",
          "url": "https://www.codeschool.com/courses/assembling-sass"
        },
        {
          "title": "Unmasking HTML Emails",
          "url": "https://www.codeschool.com/courses/unmasking-html-emails"
        },
        {
          "title": "Try SQL",
          "url": "https://www.codeschool.com/courses/try-sql"
        },
        {
          "title": "The Sequel to SQL",
          "url": "https://www.codeschool.com/courses/the-sequel-to-sql"
        }
      ]
    },
    {
      "school": "Codecademy",
      "dates": "2013-Present",
      "courses": [
        {
          "title": "Learn SQL",
          "url": "https://www.codecademy.com/en/courses/learn-sql"
        },
        {
          "title": "HTML & CSS",
          "url": "https://www.codecademy.com/en/tracks/web"
        },
        {
          "title": "jQuery",
          "url": "https://www.codecademy.com/en/tracks/jquery"
        }
      ]
    },
    {
      "school": "Udemy",
      "dates": "2013-Present",
      "courses": [
        {
          "title": "Convert HEX to Decimal in under 30 seconds!",
          "url": "https://www.udemy.com/course-dashboard-redirect/?course_id=50274"
        },
        {
          "title": "Git Complete: the definitive, step-by-step guide to Git",
          "url": "https://www.udemy.com/course-dashboard-redirect/?course_id=221674"
        },
        {
          "title": "Command Line Essentials: Git Bash for Windows",
          "url": "https://www.udemy.com/course-dashboard-redirect/?course_id=470424"
        },
        {
          "title": "Learning C# .NET",
          "url": "https://www.udemy.com/course-dashboard-redirect/?course_id=11152"
        },
        {
          "title": "Design for Coders",
          "url": "https://www.udemy.com/course-dashboard-redirect/?course_id=79610"
        }
      ]
    },
    {
      "school": "Microsoft Virtual Academy",
      "dates": "2015-Present",
      "courses": [
        {
          "title": "Developing in HTML5 with JavaScript and CSS3 Jump Start",
          "url": "https://mva.microsoft.com/training-courses/learn-html5-with-javascript-css3-jumpstart-training"
        },
        {
          "title": "C# Fundamentals for Absolute Beginners",
          "url": "https://mva.microsoft.com/training-courses/c-fundamentals-for-absolute-beginners"
        },
        {
          "title": "Microsoft Azure Fundamentals",
          "url": "https://mva.microsoft.com/training-courses/microsoft-azure-fundamentals"
        },
        {
          "title": "Windows 10 Development for Absolute Beginners",
          "url": "https://mva.microsoft.com/en-US/training-courses/windows-10-development-for-absolute-beginners-14541"
        }
      ]
    }
  ],
  "display": function() {
    var es = education.schools;
    for (school in es) {
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", es[school].name);
      formattedSchoolName = formattedSchoolName.replace("#", es[school].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", es[school].degree);
      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", es[school].location);
      $(".education-entry:last").append(formattedSchoolLocation);

      var formattedSchoolDates = HTMLschoolDates.replace("%data%", es[school].dates);
      $(".education-entry:last").append(formattedSchoolDates);

      var SchoolMajor = es[school].majors[0];
      if (es[school].majors.length > 1) {
        for (var i = 1; i <= es[school].majors.length - 1; i++) {
          SchoolMajor = SchoolMajor + ", " + es[school].majors[i]
        }
      };
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", SchoolMajor);
      $(".education-entry:last").append(formattedSchoolMajor);
    };
    $("#education").append(HTMLonlineClasses);
    var eo = education.onlineCourses;

    for (site in eo) {
      $("#education").append(HTMLschoolStart);

      var formattedEoSchool = HTMLeoSchool.replace("%data%", eo[site].school);
      $(".education-entry:last").append(formattedEoSchool);

      var formattedOnlineDates = HTMLonlineDates.replace("%data%", eo[site].dates);
      $(".education-entry:last").append(formattedOnlineDates);

      for (course in eo[site].courses) {
        var formattedOnlineCourse = HTMLeoCourse.replace("%data%", eo[site].courses[course].title);
        formattedOnlineCourse = formattedOnlineCourse.replace("#", eo[site].courses[course].url);
        $(".education-entry:last").append(formattedOnlineCourse)
      }
    }
  }
};

// Added "positions" array to work object to accomodate multiple positions per job -
//      also created different display format because there is no url object for
//      each job.
var work = {
  "jobs": [
    {
      "employer": "Androscoggin Bank",
      "dates": "1996-Present",
      "location": "30 Lisbon St, Lewiston, ME",
      "positions": [
        {
          "title": "AVP/Web Development & Support Mgr",
          "dates": "2010-Present",
          "description": "Oversee the development of the bank's public website and intranet"
        },
        {
          "title": "AVP/IS Development & Support Officer",
          "dates": "2003-2010",
          "description": "Create web-based solutions for reporting challenges"
        },
        {
          "title": "Data Systems Officer",
          "dates": "1999-2003",
          "description": "Oversee mainframe operations and liaise with other operational departments"
        },
        {
          "title": "Mainframe Systems Specialist",
          "dates": "1999",
          "description": "Oversee team of mainframe operators"
        },
        {
          "title": "Mainframe Operator",
          "dates": "1998-1999",
          "description": "Perform daily mainframe operations"
        },
        {
          "title": "Teller/Floating Customer Service Representative",
          "dates": "1996-1998",
          "description": "Perform teller functions, Account openings and closings, and IRA setups"
        }
      ]
    },
    {
      "employer": "Bradlees, Inc.",
      "dates": "1975-1996",
      "location": "1 Bradlees Circle, Braintree, MA",
      "positions": [
        {
          "title": "Customer Service Manager, Westbrook, ME",
          "dates": "1988-1996",
          "description": "Oversee customer service functions, oversee tellers, act as personnel manager, serve as northern New England technology trainer"
        },
        {
          "title": "Sales Associate, Lewiston, ME",
          "dates": "1975-1988",
          "description": "Process stock, act as cashier, act as front-end supervisor, act as cash office clerk, act as cash office trainer for Northern New England"
        }
      ]
    }
  ],
  "display": function() {
    var j = work.jobs;

    for (job in j) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLaltEmployer.replace("%data%", j[job].employer);
      $(".work-entry:last").append(formattedEmployer);

      var formattedEmployerDates = HTMLworkDates.replace("%data%", j[job].dates);
      $(".work-entry:last").append(formattedEmployerDates);

      var formattedEmployerLocation = HTMLworkLocation.replace("%data%", j[job].location);
      $(".work-entry:last").append(formattedEmployerLocation);

      for (position in j[job].positions) {
        var formattedJobTitle = HTMLjobTitle.replace("%data%", j[job].positions[position].title);
        $(".work-entry:last").append(formattedJobTitle);

        var formattedJobDates = HTMLjobDates.replace("%data%", j[job].positions[position].dates);
        $(".work-entry:last").append(formattedJobDates);

        var formattedJobDescription = HTMLjobDescription.replace("%data%", j[job].positions[position].description);
        $(".work-entry:last").append(formattedJobDescription);
      }
    }
  }
};

// Line 395: Created variable "p" to cut down on keystrokes
var projects = {
  "projects": [
    {
      "title": "Museum L-A website redesign",
      "dates": "2010",
      "description": "Redesign website for Museum L-A and migrate to a new CMS system",
      "images": [
        "images/museumla-home.jpg",
        "images/museumla-bells.jpg"
      ]
    },
    {
      "title": "1000 Tears website",
      "dates": "2012-2013",
      "description": "Create website to host the 1000 Tears art installation project. Also allows people to dedicate a Tear online. All proceeds from sale of Tear dedications benefit the Patrick Dempsey Center for Cancer Hope and Healing.",
      "images": [
        "images/tears-home.jpg",
        "images/tears-about.jpg",
        "images/tears-dedicate.jpg"
      ]
    },
    {
      "title": "Business Intelligence Group (BIG)",
      "dates": "2014",
      "description": "The Business Intelligence Group (BIG) is a cross functional team tasked with creating the foundation for a Business Intelligence program at Androscoggin Bank. Preliminary work is focused on cleaning our databases, standardizing data entry, and identifying reporting needs. In future years, BIG will help Androscoggin Bank develop analytical and predictive models to improve decision making, streamline operations, and enhance client experiences and product offerings. It's a BIG project with a great team!",
      "images": [
        ""
      ]
    },
    {
      "title": "Mobile Banking App",
      "dates": "2014",
      "description": "This project supports the goal to increasing adoption rates of high-efficiency, lower-cost client delivery channels by rolling out a branded mobile banking App for iPhones & Androids. This will help us remain relevant with client demands, provide convenience and reduce operational costs. We will continue with training, promotions and awareness throughout 2014.",
      "images": [
        "images/iphone0.jpeg",
        "images/iphone1.jpeg"
      ]
    },
    {
      "title": "Mobile Tablet App",
      "dates": "2015",
      "description": "This project supports the goal to increasing adoption rates of high-efficiency, lower-cost client delivery channels by rolling out a branded mobile banking app for tablets. This will help us remain relevant with client demands, provide convenience and reduce operational costs. We will continue with training, promotions and awareness throughout 2015.",
      "images": [
        "images/ipad1.jpeg",
        "images/ipad2.jpeg"
      ]
    },
    {
      "title": "Intranet Migration",
      "dates": "2015",
      "description": "Move intranet site from an end-of-life server to a new virtual server. Upgrade to a 64 bit web environment, migrate some of the secured web applications from classic ASP/MS Access to PHP/MySQL, upgrade JavaScript, and migrate to HTML5/CSS3.",
      "images": [
        "images/migration-androdex.jpg",
        "images/migration-home.jpg"
      ]
    },
    {
      "title": "Intranet Redesign",
      "dates": "2016",
      "description": "Migrate current intranet into a CMS system (Intranet Connections) to leverage collaboration.",
      "images": [
        "images/andronet-newhome.jpg",
        "images/andronet-newhr.jpg"
      ]
    }
  ],
  "display": function() {
    var p = projects.projects
    for (project in p) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", p[project].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", p[project].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", p[project].description);
      $(".project-entry:last").append(formattedDescription);

      if (p[project].images.length > 0) {
        for (image in p[project].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", p[project].images[image]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    }
  }
};

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);