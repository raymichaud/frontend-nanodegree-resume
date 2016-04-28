var name = "Ray A Michaud";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
  "name": "Ray A Michaud",
  "role": "Web Developer",
  "contactInfo": {
    "mobile": "tel (207) 754-4930",
    "email": "rayamichaud@twc.com",
    "github": "raymichaud",
    "linkedin": "http://linkedin.com/in/ray-michaud-939b7235",
    "location": "Lewiston, Maine"
  },
  "pictureURL": "images/RayMichaud.jpg",
  "welcomeMsg": "Welcome to my resume",
  "skills": [
    "coding", "painting"
  ]
};

var work = {};
work.position = "Web Development & Support Manager";
work.employer = "Androscoggin Bank";
work.years = "20 years";
work.city = "Lewiston";

var education = {
  "schools": [
    {
      "name": "St Dominic Regional High School",
      "graduated": "1976",
      "city": "Lewiston",
      "major": "College prep"
    },
    {
      "name": "Udacity",
      "website": "www.udacity.com",
      "major": "Front End Developer Nanodegree"
    }
  ],
  "onlineCourses": [
    {
      "name": "Udacity",
      "website": "www.udacity.com",
      "major": "Front End Developer Nanodegree"
    }
  ]
};

$("#main").append(work["position"]);
$("#main").append(bio.contactInfo.linkedin);