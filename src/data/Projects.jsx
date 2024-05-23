import School from '../assets/ProjectImage/Patharia.webp'
import NoteBook from '../assets/ProjectImage/NoteBook.webp'
import Portfolio from '../assets/ProjectImage/Portfolio.webp'
import project1 from '../assets/ProjectImage/Patharia.webp'
const projectData = [
    {
        imgUrl: School,
        name: "SS-Patharia Public School",
        type: "School Website",
        functionality: "This is a School Website. In this website visiter can leave review without login. And Admin can delete review, add Teacher and Delete Teacher.",
        skills: ["#vitejs", "#CSS", "#expressjs", "#nodejs", "#mongoDB", "#jwt", "#cloudinary"],
        link:"https://ss-patharia-public-school.netlify.app/",
        color:"#613e97"

    },
    {
        imgUrl: NoteBook,
        name: "iNote-Book",
        type: "Degital Notebook",
        functionality: "This is a User Spacific Note take application. In this application User can Register, Login and Logout. After User Login User can Add, Delete and Edit own Note",
        skills: ["#vitejs", "#CSS", "#expressjs", "#nodejs", "#mongoDB", "#jwt"],
        link:"https://inotebook-by-ramveersingh.netlify.app/notes",
        color:""

    },
    {
        imgUrl: Portfolio,
        name: "Portfolio",
        type: "My Portfolio",
        functionality: "My Portfolio website",
        skills: ["#vitejs", "#tailwind", "#expressjs", "#nodejs", "#mongoDB", "#jwt", "#cloudinary"],
        link:"https://www.ramveersingh.com",
        color:""

    },
  
]

export default projectData;