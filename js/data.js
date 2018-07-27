console.log("Dope");

const psychData = {
    charactors: [
        {
            name: "Shawn Spencer",
            job: "Psychic Detective",
            bio: "Shawn Spencer is a fictional character and the main protagonist on the American television drama and comedy Psych played by American actor James Roday. Taking advantage of his eidetic memory and hyper observant abilities, he poses as a psychic and works as a private detective who often consults with the Santa Barbara Police Department.",
            image: "../images/shawnspencer.jpg"
        },
        {
            name: "Burton Guster",
            job: "Pharmaceutical Sales Rep",
            bio: "Gus has been Shawn Spencer's best friend since childhood, and co-owns the detective agency 'Psych' with him, after Shawn was able to forge Gus' name on the lease. Gus tends to be straight-laced and more cautious, although he has been friends with Shawn for long enough that he understands that Shawn cannot be stopped once his mind has been made up. Shawn will often make up silly aliases for Gus while working a case. Gus has stated that he is not used to being introduced by his real name.",
            image: "../images/burtonguster.jpg"
        },
        {
            name: "Juliet O'Hara",
            job: "Detective",
            bio: "Juliet O'Hara first appears undercover in the show's second episode, 'Spellingg Bee', as a recently transferred junior detective from Miami Beach where she attended the University of Miami, replacing Lucinda Barry as Head Detective Carlton Lassiter's partner. She eventually becomes the object of affection for Shawn Spencer and frequently works along-side the psych agency.",
            image: "../images/julietohara.jpg"
        },
        {
            name: "Carlton Lassiter",
            job: "Detective",
            bio: "Detective Carlton Jebediah Lassiter MCJ (born February 22, 1969), is a fictitious character in the American dramedy Psych played by Timothy Omundson. Lassiter is a ten-year veteran of the Santa Barbara Police Department, and the youngest Head Detective ever named to the force. He also has a Masters Degree in Criminology. He has a tense relationship with Shawn Spencer that often leads to hilarious situations. According to Lassiter's blog, which is written by actor Timothy Omundson, he was a close friend of the former Santa Barbara police chief, who led him to enroll in the police academy during a 'dangerous point' in Lassiter's youth.",
            image: "../images/carltonlassiter.jpg"
        },
        {
            name: "Henry Spencer",
            job: "Retired Detective",
            bio: "Henry William Spencer, Jr. is a fictional character on the American television dramedy Psych. He is played by American actor Corbin Bernsen. A retired police officer, Henry Spencer raised his only son, Shawn, to follow in his footsteps, schooling him in detective work from a young age. The character is based loosely on series creator Steve Franks' father, a police officer who wanted his son to choose a similar career path. He would sometimes try to hone Franks' observational skills by asking how many people were wearing hats in a restaurant, a tactic which Henry employs with Shawn in the series pilot.",
            image: "../images/henryspencer.jpg"
        },
        {
            name: "Karen Vick",
            job: "Psychic Detective",
            bio: "Karen C. Vick (née Dunlap) is a character on the American comedy detective drama Psych played by Kirsten Nelson. According to Head Detective Carlton Lassiter's weblog, Vick replaced Police Chief John Fenich upon his retirement about a month prior to Shawn's arrival at the SBPD in the pilot episode. Vick's relationship with Lassiter seems strained by the fact that she is 'an outsider' who was chosen by 'the powers that be in City Hall' to take the position over 'someone from within our own ranks.' Vick's decision to allow a self-proclaimed psychic so far into official police investigations has done little to assuage Lassiter's misgivings. Eventually, Lassiter's attitude towards both Shawn and Vick soothed.",
            image: "../images/karenvick.jpg"
        }
    ],
    cast: [
        {
            name: "James Roday",
            birth: "April 4, 1976",
            bio: "James David Rodriguez, known professionally as James Roday, is an American actor, director and screenwriter. He starred on the USA Network series Psych as hyper-observant consultant detective and fake psychic Shawn Spencer.",
            image: "../images/james.jpg",
        },
        {
            name: "Dule Hill",
            birth: "May 3, 1975",
            bio: "Karim Dulé Hill  is an American actor and tap dancer. He has played personal presidential aide and Deputy Special Assistant to the Chief of Staff Charlie Young on the NBC drama television series The West Wing for which he received an Emmy nomination for Outstanding Supporting Actor in a Drama Series, and pharmaceutical salesman-private detective Burton 'Gus' Guster on the USA Network television comedy-drama Psych. In 2018, it was announced that Hill would join the regular cast of Suits for season 8, after a recurring role in season 7. Hill also serves as a member of the Screen Actors Guild Hollywood Board of Directors.",
            image: "../images/dule.jpg",
        },
        {
            name: "Maggie Lawson",
            birth: "August 12, 1980",
            bio: "Margaret Cassidy 'Maggie' Lawson is an American actress who is best known for her role as Detective Juliet 'Jules' O'Hara in the TV show Psych. She also has starred in the sitcoms Inside Schwartz, It's All Relative, and Crumbs, as well as the television movie Nancy Drew. In late 2014 and early 2015, she had a supporting role as Miss McMartin in the 12th and final season of Two and a Half Men.",
            image: "../images/maggie.jpg",
        },
        {
            name: "Timothy Omundson",
            birth: "July 29, 1969",
            bio: "Timothy Michael Omundson is an American actor. He is notable for his supporting roles as Sean Potter on the CBS television series Judging Amy, Eli on the syndicated series Xena: Warrior Princess, Carlton Lassiter in Psych, as King Richard on the musical series Galavant, and as Cain in Supernatural.",
            image: "../images/timothy.jpg",
        },
        {
            name: "Corbin Bernsen",
            birth: "September 7, 1954",
            bio: "Corbin Dean Bernsen is an American actor and director, known for his work on television. He is known for his roles as divorce attorney Arnold Becker on the NBC drama series L.A. Law, as Dr. Alan Feinstone in The Dentist, as retired police detective Henry Spencer on the USA Network comedy-drama series Psych, and as Roger Dorn in the films Major League, Major League II, and Major League: Back to the Minors. He has also appeared regularly on other shows, including General Hospital and Cuts.",
            image: "../images/timothy.jpg",
        },
        {
            name: "Kristen Nelson",
            birth: "October 3, 1970",
            bio: "Kirsten Nelson is an American actress and director. Born in Enid, Oklahoma, though raised in Chicago, Nelson attended Northwestern University and became a founding member of Chicago's Roadworks Theatre Ensemble before moving to Los Angeles. She is perhaps best known for her starring role as Police Chief Karen Vick on Psych. Nelson's career includes roles in Buffy the Vampire Slayer, The O'Keefes (as Ellie O'Keefe), Baby's Day Out, The Fugitive, Frasier, Ally McBeal, The West Wing, Just Shoot Me! and Boy Meets World.",
            image: "../images/kristen.jpg",
        }
    ],
    gusNames: [
        "Die Harder", "Felicia Fancybottom", "Ground Control", "Matt", "Bighead Burton", "Fingers", "Homeskillet", "Big Baby Burton", "Burton the Billowy Bear", "Curtis", "Blackstar", "Chocolate Columbo", "Magic Head", "Spellmaster", "SuperSmeller", "The SuperSniffer", "Slicks", "Peter Panic", "Gus T.T. Showbiz", "Ovaltine Jenkins", "Schoonie 'U-Turn' Singleton", "Vernest Lambert Watkins", "Bud (from The Cosby Show)", "Nick Nack", "Bruton Gaster", "Lavender Gooms", "Lemongrass Gogulope", "Squirts MacIntosh", "Weepy Boy Santos", "Stewart Lee", "Dr. Mc [Khoesan tongue clicking sounds] Took", "François", "Galileo Humpkins", "Gus 'Silly-Pants' Jackson", "Fearless Guster", "Shmuel Cohen", "Methuselah Honeysuckle", "Shutterfly Simmons", "Patty Simcox", "Chesterfield McMillan (and wife)", "Tan", "Tangus", "Ernesto Agapito Garces Conde de Abelar", "Longbranch Pennywhistle", "Scrooge Jones", "D'Andre Pride", "Hummingbird Saltalamacchia", "Step-Anthony Wally Ali (Cat Stuck in a Tree)", "Dequan 'Smallpox' Randolph", "Trapezius Milkington", "Sterling Cooper", "Burton 'Oil Can' Guster", "Hollabackatcha", "Jazz Hands", "Gus Brown", "John Slade", "Detective Miles", "Greg", "Doughnut Holschtein", "Ron Davis", "Bob Adams", "Harry Munroe", "Rich Fingerland", "Black Magic", "Cheswick", "Shawn", "Shaggy Buddy Snap", "Ghee Buttersnaps a.k.a. 'The Heater'", "The Vault of Secrets", "Clementine Woolysocks", "Pinky Guscatero", "Guts", "Ol' Ironside", "Old Iron Stomach", "Bruce Lee", "Jonathan Jacob Jingley-Smith", "Santonio Holmes", "Deon Richmond", "Gurton Buster", "Chaz Bono", "Chocolate Einstein", "MC ClapYoHandz", "Sher-Black-Lock", "Mrs. Whittlebury", "G-Force", "Roadrash", "Mellowrush", "Crankshaft", "Sammy", "Joey Bishop", "Slick Fingers", "Imhotep or 'He Cometh in Peace'", "Control Alt Delete", "Gootsy", "The Guster", "The Jackal", "Adewale Akinnuoye-Agbaje", "Yasmine Bleeth", "Killerbee", "Lodge Blackman", "Mission Figs", "Sundown", "The Black Goose", "Original G-String a.k.a. Crowd Pleasah", "Radio Star", "Gus Jay Gupta", "Don Cheadle, Jr.", "Chezwick", "Watson Williams", "Benedict Arnold Jackson", "Engel Woods", "Eddie Adams from Torrance", "Brutal Hustler", "Lumpkin (Name Never Completed)", "Felatio Del Toro", "Tin Tummy", "Sh'Dynasty", "Carrington", "Satchel Gizmo", "Gurn Blandstein", "Immaculate Conception", "Bill Uvrights", "Jonas Gustavsson", "Blue Ivy Carter", "Vijay Amritraj", "Django Unchained", "Darryl, Burton Trout", "Bad News Marvin Barnes", "Lil Wayne", "Trending Ontwitter", "A Player Named Gus", "Domo Arigato", "Denzel Diggs Underwood Morris Chestnut Washington", "John Pon", "Dale", "Eric Chin", "Mr. Tibbs"
    ],
    favEps: [
        {
            title: "Lock, Stock, Some Smoking Barrels and Burton Guster's Goblet of Fire",
            airdate: "January 8, 2014",
            description: "Despereaux summons Shawn to London to help with a sting operation; Gus accompanies Shawn, but would rather attend a Harry Potter convention.",
            why: "Psych and HP?! How could life get any better!"
        },
        {
            title: "9 Lives",
            airdate: "August 4, 2006",
            description: "",
            why: "Psych and cats it's a no brainer!"
        },
        {
            title: "Pierre Despereaux",
            airdate: "July 7, 2006 - March 2, 2007",
            description: "If Mr. Yang is Psych’s most memorable villain, Pierre Despereaux is easily Psych’s most memorable recurring character. The unbearingly debonair Cary Elwes was a brilliant choice to portray this maybe art thief, maybe Interpol agent, consistently oozing braggadocio and spewing out 007-esque musings like he was trying to meet a quota. (“You see, a gentleman of leisure never packs his weapon next to his socks. It’s uncouth.”) Whether or not he was really undercover for the British government is up to you, but his lovingly familial relationship with Shawn — and openly mutual disdain with Gus — was a hoot to see slowly unfold.",
            why: "He's in 4 episodes and they are all amazing, It's inpossibe to choose just one!"
        },
        {
            title: "The Break-Up",
            airdate: "March 26, 2014",
            description: "Shawn and Gus work with Lassiter, Henry and Woody to solve the murder of a real estate executive; Shawn must make a life decision.",
            why: "Finally an amzing series finale that won't disappoint you with a crappy ending!"
        }
    ],
    showThemes: [
        {
            theme: "Pineapples",
            images: [
                "../images/pineapple1.png",
                "../images/pineapple2.jpg",
                "../images/pineapple3.jpg"
            ],
            details: "Psych features a pineapple in the logo to start, and every single episode has a pineapple hidden within somewhere! During the initial airing, the show held contest where viewers won prizes if they were the first to spot the pineapple. This recurring theme focuses heavily in the artwork for the show too!"
        },
        {
            theme: "Blueberry",
            images: [
                "../images/blueberry1.jpg",
                "../images/blueberry2.jpg",
                "bb.jpg"
            ],
            details: "The Blueberry is the main ride of the psych team during the series! Owned by Gus, the Blueberry is a hilarious character in and of itself, as its a tiny blue efficiency vehicle and often thrown perilously into chase scenes and getaway pursuits. The Blueberry sustained heavy damage often, and always kept hilariously kicking!"
        },
        {
            theme: "Catch Phrase's",
            images: [
                "../images/hearditbothways.gif",
                "../images/waitforit.gif",
                "../images/comeonson.gif"
            ],
            details: "Psych is also known for its hilarious catch phrases and witty banter between the characters. Among the most popular are 'I've heard it both ways.', 'Wait for it. Wait for iiiiiiiiiit...', 'C'mon, son!'. Most of them are a staple of Shawn and Gus's friendship throughout the series, and there are many others!"
        }
    ]
}