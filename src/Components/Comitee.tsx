

import {Accordion, AccordionItem, Avatar} from "@nextui-org/react";
import { Fade } from "react-awesome-reveal";


const Comitee = () => {
    // const comiiteeNational = [
        
    //     {id : 1 , username : "Mostafa Abomaarouf", role:  "PRESIDENT OF SULTAN MOULAY SLIMANE UNIVERSITY, morroco",},
    //     {id : 2 , username : "M. SAJIEDDINE", role:  "DIRECTOR OF THE NATIONAL SCHOOL OF APPLIED SCIENCES KHOURIBGA"},
    //     {id : 3 , username : "M. S. KADIRI", role:  "DEPUTY DIRECTOR OF THE NATIONAL SCHOOL OF APPLIED SCIENCES KHOURIBGA"},
    //     {id : 4 , username : "M. S. KADIRI", role:  "DEPUTY DIRECTOR OF THE NATIONAL SCHOOL OF APPLIED SCIENCES KHOURIBGA"}
        
    // ]
    const largeData = [
        { id : 1 , title :  "Honorary Chairs" , assisstants : [
            {id : 1 , username : "Mostafa Abomaarouf", role:  "PRESIDENT OF SULTAN MOULAY SLIMANE UNIVERSITY",},
        ] },
        { id : 2 , title :  "Chairs" , assisstants : [
            {id : 1 , username : "Nidal LAMGHARI", role:  "SULTAN MOULAY SLIMANE UNIVERSITY, morroco",},
            {id : 2 , username : "Mourad NACHAOUI", role:  "SULTAN MOULAY SLIMANE UNIVERSITY, morroco"},
        ] },
        { id : 3 , title :  "Publication Chairs" , assisstants : [
            {id : 1 , username : "Amine LAGHRIB ", role:  "SULTAN MOULAY SLIMANE UNIVERSITY, morroco",},
            {id : 2 , username : "Aissam HADRI ", role:  "Ibn Zohr University, morroco"},
        ] },
        { id : 4 , title :  "Technical Programme Chairs" , assisstants : [
            {id : 1 , username : "A. GHAZDALI", role:  "SULTAN MOULAY SLIMANE UNIVERSITY, morroco",},
            {id : 2 , username : "Imad HAFIDI ", role:  "SULTAN MOULAY SLIMANE UNIVERSITY, morroco"},
            {id : 3 , username : "Abdelmotaleb MATRAN", role:  "CADI AYYAD UNIVERSITY, morroco"},
          
        ]},
        { id : 5 , title :  "Publicity & communications Chairs" , assisstants :  [
            {id : 1 , username : "Hamza KHALFI ", role:  "SULTAN MOULAY SLIMANE UNIVERSITY, morroco",},
            {id : 2 , username : "Soufian Lyaqini ", role:  "Hassan first university, morroco"},
        ]},
        { id : 6 , title :  "Organization committee" , assisstants : [
            {id : 1 , username : "L. AFRAITES", role:  "FST-Beni Mellal",},
            {id : 2 , username : "Y. EL HADFI", role:  "ENSA-Khouribga",},
            {id : 3 , username : "F.Z. ENNAJI ", role:  "ENSA-Khouribga",},
            {id : 4 , username : "A. GHAZDALI ", role:  "ENSA-Khouribga",},
            {id : 5 , username : "A. HADRI ", role:  "FP-Ouarzazat",},
            {id : 6 , username : "I. HAFIDI", role:  "ENSA-Khouribga",} ,
            {id : 7 , username : "M. HAKIM", role:  "ENSA-Khouribga",} ,
            {id : 8 , username : "H. KHALFI", role:  "ENSA-Khouribga",} ,
            {id : 9 , username : "A. LAGHRIB ", role:  "FST-Beni Mellal",} ,
            {id : 10 , username : "N. LAMGHARI", role:  "ENSA-Khouribga",}, 
            {id : 11 , username : "A. LASBAHANI", role:  "ESEF-Beni Mellal",}, 
            {id : 12 , username : "S. LYAQINI ", role:  "ENSA-Berrechid",}, 
            {id : 13 , username : "A. METRANE", role:  "FST-Marrakech",}, 
            {id : 14 , username : "M. NACHAOUI", role:  "FST-Beni Mellal",}, 
            {id : 15 , username : "A. OUHINOU ", role:  "FST-Beni Mellal",}, 
            {id : 16 , username : "A. OURDOU", role:  "ENSA-Khouribga",}, 
            {id : 17 , username : "N. SOUSSI", role:  "ENSA-Khouribga",} 
        
        ] },
        { id : 7 , title :  "Scientific committee" , assisstants :  [
            {id : 1 , username : "A. CHAMBOLLE ", role:  "SULTAN MOULAY SLIMANE UNIVERSITY, morroco",},
            {id : 2 , username : "M. DAMBRINE ", role:  "Hassan first university, morroco"},
            {id : 3 , username : "A. ELMOATAZ", role:  "Caen University, France"},
            {id : 4 , username : "J. FADILI", role:  " Caen University, France "},
            {id : 5 , username : ". HASLINGER ", role:  "Charles University, Prague"},
            {id : 6 , username : "A. HENDY ", role:  "Ural Federal University, Russia"},
            {id : 7 , username : "F. JAUBERTEAU ", role:  " Nantes University, France "},
            {id : 8 , username : "J. M. MAZON ", role:  "Universitat de Valencia, Spain"},
            {id : 9 , username : "B. JIN ", role:  "The Chinese University of Hong Kong, Hong Kong"},
            {id : 10 , username : "A. KHAN", role:  "Institute of Technology, Rochester, NY, USA"},
            {id : 11, username : "A. LAURAIN ", role:  "University of Duisburg-Essen, Germany"},
            {id : 12 , username : "N. MACULAN ", role:  "University of Rio de Janeiro, Brazil"},
            {id : 13 , username : "R. MAHJOUB  ", role:  "Paris Dauphine University, France"},
            {id : 14 , username : "S. MASNOU ", role:  "Claude Bernard Lyon 1 University, France"},
            {id : 15 , username : "A. NACHAOUI  ", role:  "Nantes University, France"},
            {id : 16 , username : "T. VALKONEN", role:  "Helsinki University , Finland"},
            {id : 17 , username : "M. ZAKY ", role:  "Imam Mohammad Ibn Saud Islamic University, Riyadh, Saudi Arabia"},
        ]},
        {id : 8 , title : "National scientific committee" , assisstants : [
            {id : 1 , username : "L. AFRAITES", role:  "FST-Beni Mellal",},
            {id : 2 , username : "Y. EL HADFI", role:  "ENSA-Khouribga",},
            {id : 3 , username : "F.Z. ENNAJI ", role:  "ENSA-Khouribga",},
            {id : 4 , username : "A. GHAZDALI ", role:  "ENSA-Khouribga",},
            {id : 5 , username : "A. HADRI ", role:  "FP-Ouarzazat",},
            {id : 6 , username : "I. HAFIDI", role:  "ENSA-Khouribga",} ,
            {id : 7 , username : "M. HAKIM", role:  "ENSA-Khouribga",} ,
            {id : 8 , username : "A. LAGHRIB ", role:  "FST-Beni Mellal",} ,
            {id : 9 , username : "Abdelmotaleb MATRAN", role:  "CADI AYYAD UNIVERSITY, morroco"},
            {id : 10 , username : "Z.  MOUYAN", role:  "Sultan Moulay Slimane University Beni-Mellal"},
            {id : 11 , username : "M.  NACHAOUI ", role:  "Sultan Moulay Slimane University Beni-Mellal"},
            {id : 12 , username : "S. RAGHAY", role:  "Cadi  Ayyad  University Marrakech"},
            {id : 13 , username : "H. RIAHI", role:  "Cadi  Ayyad  University Marrakech"},
            {id : 14 , username : "A.  ZEGHAL", role:  "Abdelmalek Essaadi University  Tanger"},
            {id : 15 , username : "M. A. TAOUDI", role:  "Cadi  Ayyad  University Marrakech "},
            


        ]}
    ]
    const itemClasses = {
        base: "py-0 w-full",
        title: "font-medium text-xl  text-gray-500 border-b-2 border-gray-700 ",
        trigger: "px-2 py-0  rounded-lg h-14 flex items-center",
        indicator: "text-medium",
        content: "text-small px-2",
        
      };

  return (
    <div id="Community" className="w-full h-[100%] text-white z-50  flex flex-col justify-center items-center ">
        <h1 className="text-5xl font-medium develus">COMMITTEES</h1>
        <div className="container px-5 ">
        <Fade cascade damping={0.6}>
                <Accordion   itemClasses={itemClasses}className="mt-12 ">
                        {
                            largeData.map(data => {
                                return (
                                    
                                        <AccordionItem key={data.id}   aria-label={data.id.toString()} title={`${data.title}`}>
                                            <div className="flex flex-row justify-center items-center flex-wrap">
                                                {data.assisstants.map(assiss => {
                                                    return (
                                                        <div className="w-[250px] h-[200px] bg-gray-800 rounded-xl mx-5 my-2" key={assiss.id}>
                                                            <div className="w-full flex flex-col justify-center items-center  h-full">
                                                                <Avatar src="user.jpg" isBordered />
                                                                <h1 className=" my-3 text-xl ">{assiss.username}</h1>
                                                                <p className="my-3  text-center text-gray-400 text-sm w-full ">{assiss.role.toLowerCase()}</p>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </AccordionItem>
                                    
                                )
                            })
                        }
            </Accordion>                 
        </Fade>
        </div>
    </div>
  )
}

export default Comitee