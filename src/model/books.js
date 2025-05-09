import axios from "axios";

export const bestSellersData = [
  {
    id: 1,
    title: "Grokking Algorithms",
    author: "Aditya Y. Bhargava",
    cover: "https://skybooks.ir/images/productImages/Grokking-Algorithms_EB1709675048.jpg",
    price: 24.99,
    rating: 5,
    category: "computer science",
    discount: 15,
    ISBN:"9781633438538",
    paperback:322,
    year:2012,
    edition:2,
    descripation:"An Illustrated Guide for Programmers and Other Curious People  A friendly, fully-illustrated introduction to the most important computer programming algorithms.Master the most widely used algorithms and be fully prepared when you’re asked about them at your next job interview. With beautifully simple explanations, over 400 fun illustrations, and dozens of relevant examples, you’ll actually enjoy learning about algorithms with this fun and friendly guide! The first edition of Grokking Algorithms proved to over 100,000 readers that learning algorithms doesn't have to be complicated or boring! This revised second edition contains brand new coverage of trees, including binary search trees, balanced trees, B-trees and more. You’ll also discover fresh insights on data structure performance that takes account of modern CPUs. Plus, the book’s fully annotated code samples have been updated to Python 3.Foreword by Daniel Zingaro."
  },
  {
    id: 2,
    title: "Grokking Bitcoin",
    author: "Kalle Rosenbaum",
    cover: "https://skybooks.ir/images/productImages/GrokkingBitcoin1_Rs1657377051.jpg",
    price: 24.99,
    rating: 4.8,
    category: "computer science",
    ISBN:"9781617294648",
    paperback:480,
    year:2019,
    edition:1,
    descripation:"If you think Bitcoin is just an alternative currency for geeks, it's time to think again. Grokking Bitcoin opens up this powerful distributed ledger system, exploring the technology that enables applications both for Bitcoin-based financial transactions and using the blockchain for registering physical property ownership. With this fully illustrated, easy-to-read guide, you'll finally understand how Bitcoin works, how you can use it, and why you can trust the blockchain.Foreword by David A. Harding,Contributor to Bitcoin documentation.About the TechnologyInflation, depressed economies, debased currencies ... these are just a few of the problems centralized banking has caused throughout history."
  },
  {
    id: 3,
    title: "Grokking Artificial Intelligence Algorithms",
    author: "Rishal Hurbans",
    cover: "https://skybooks.ir/images/productImages/GrokkingArtificialIntelligenceAlgorithms4_uI1657375595.jpg",
    price: 18.99,
    rating: 4.3,
    category: "computer science",
    discount: 10,
    ISBN:"9781617296185",
    paperback:393,
    year:2020,
    edition:1,
    descripation:"Understand and Apply the Core Algorithms of Deep Learning and Artificial Intelligence in This Friendly Illustrated Guide Including Exercises and Examples Grokking Artificial Intelligence Algorithms is a fully illustrated and interactive tutorial guide to the different approaches and algorithms that underpin AI. Written in simple language and with lots of visual references and hands-on examples, you'll learn the concepts, terminology, and theory you need to effectively incorporate AI algorithms into your applications. And to make sure you truly grok as you go, you'll use each algorithm in practice with creative coding exercises - including building a maze puzzle game, performing diamond data analysis, and even exploring drone material optimization."
  },
  {
    id: 4,
    title: "Clean Code",
    author: "Robert C. Martin",
    cover: "https://skybooks.ir/images/productImages/CleanCode_hY1655407329.jpg",
    price: 22.99,
    rating: 4.9,
    category: "computer science",
    ISBN:"9780132350884",
    paperback:462,
    year:2009,
    edition:1,
    descripation:"Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way.Noted software expert Robert C. Martin, presents a revolutionary paradigm with Clean Code: A Handbook of Agile Software Craftsmanship. Martin, who has helped bring agile principles from a practitioner’s point of view to tens of thousands of programmers, has teamed up with his colleagues from Object Mentor to distill their best agile practice of cleaning code “on the fly” into a book that will instill within you the values of software craftsman, and make you a better programmer―but only if you work at it."
  },
  {
    id: 5,
    title: "Rust in Action",
    author: "Timothy Samuel McNamara",
    cover: "https://skybooks.ir/images/productImages/Rust-in-Action_8D1662717972.jpg",
    price: 36.4,
    rating: 4.4,
    category: "programming languages",
    discount: 20,
    ISBN:"9781617294556",
    paperback:457,
    year:2021,
    edition:1,
    descripation:"Systems programming concepts and techniques Rust in Action is a hands-on guide to systems programming with Rust. Written for inquisitive programmers, it presents real-world use cases that go far beyond syntax and structure.  Summary :Rust in Action introduces the Rust programming language by exploring numerous systems programming concepts and techniques. You'll be learning Rust by delving into how computers work under the hood. You'll find yourself playing with persistent storage, memory, networking and even tinkering with CPU instructions. The book takes you through using Rust to extend other applications and teaches you tricks to write blindingly fast code. You'll also discover parallel and concurrent programming. Filled to the brim with real-life use cases and scenarios, you'll go beyond the Rust syntax and see what Rust has to offer in real-world use cases."
  },
  {
    id: 6,
    title: "Cryptology For Engineers",
    author: "Robert Schmied",
    cover: "https://skybooks.ir/images/productImages/Cryptology-For-Engineers_2O1715972130.jpg",
    price: 30.21,
    rating: 4.6,
    category: "cryptography",    
    ISBN:"9789811208041",
    paperback:382,
    year:2020,
    edition:1,
    descripation:"Cyptology is increasingly becoming one of the most essential topics of interest in everyday life. Digital communication happens by transferring data between at least two participants — But do we want to disclose private information while executing a sensitive bank transfer? How about allowing third-party entities to eavesdrop on private calls while performing an important secret business discussion? Do we want to allow ambient communication concerning us to be manipulated while control software is driving our autonomous car along a steep slope? Questions like these make it clear why issues of security are a great concern in our increasingly augmented world.Cryptology for Engineers is a study of digital security in communications systems. The book covers the cryptographical functionalities of ciphering, hash generation, digital signature generation, key management and random number generation, with a clear sense of the mathematical background on the one hand and engineers' requirements on the other. Numerous examples computable by hand or with a small additional cost in most cases are provided inside."
  },
  {
    id: 7,
    title: "Spring Boot in Action",
    author: "Craig Walls",
    cover: "https://skybooks.ir/images/productImages/Spring-Boot-in-Action_XD1659195012.jpg",
    price: 24.99,
    rating: 4.2,
    year:2016,
    ISBN:"9781617292545",
    paperback:266,
    year:2016,
    edition:1,
    category: "programming languages",
    descripation:"A developer-focused guide to writing applications using Spring Boot. You'll learn how to bypass the tedious configuration steps so that you can concentrate on your application's behavior.  The Spring Framework simplifies enterprise Java development, but it does require lots of tedious configuration work. Spring Boot radically streamlines spinning up a Spring application. You get automatic configuration and a model with established conventions for build-time and runtime dependencies. You also get a handy command-line interface you can use to write scripts in Groovy. Developers who use Spring Boot often say that they can't imagine going back to hand configuring their applications.About the Book  "
  },
  {
    id: 8,
    title: "Clean Architecture",
    author: "Robert C. Martin",
    cover: "https://skybooks.ir/images/productImages/CleanArchitecture_1e1655814220.jpg",
    price: 29.99,
    rating: 4.1,
    year:2016,
    ISBN:"9780134494166",
    paperback:429,
    year:2018,
    edition:1,
    descripation:"A Craftsman's Guide to Software Structure and Design  By applying universal rules of software architecture, you can dramatically improve developer productivity throughout the life of any software system. Now, building upon the success of his best-selling books Clean Code and The Clean Coder, legendary software craftsman Robert C. Martin (“Uncle Bob”) reveals those rules and helps you apply them.Martin’s Clean Architecture doesn’t merely present options. Drawing on over a half-century of experience in software environments of every imaginable type, Martin tells you what choices to make and why they are critical to your success. As you’ve come to expect from Uncle Bob, this book is packed with direct, no-nonsense solutions for the real challenges you’ll face–the ones that will make or break your projects.",
    category: "computer science"
  },
  {
    id: 9,
    title: "Friends, Lovers, and the Big Terrible Thing",
    author: "Matthew Perry",
    cover: "https://skybooks.ir/images/productImages/Friends-Lovers-and-the-Big-Terrible-Thing_eo1673459140.jpg",
    price: 28.99,
    rating: 4.3,
    category: "biography",
    discount: 5,
    year:2022,
    ISBN:"9781250866448",
    paperback:280,
    edition:1,
    descripation:"The BELOVED STAR OF FRIENDS takes us behind the scenes of the hit sitcom and his struggles with addiction in this “CANDID, DARKLY FUNNY...POIGNANT” memoir (The New York Times)A MOST ANTICIPATED BOOK by Time, Associated Press, Goodreads, USA Today, and more!“Hi, my name is Matthew, although you may know me by another name. My friends call me Matty. And I should be dead.”So begins the riveting story of acclaimed actor Matthew Perry, taking us along on his journey from childhood ambition to fame to addiction and recovery in the aftermath of a life-threatening health scare. Before the frequent hospital visits and stints in rehab, there was five-year-old Matthew, who traveled from Montreal to Los Angeles, shuffling between his separated parents; fourteen-year-old Matthew, who was a nationally ranked tennis star in Canada; twenty-four-year-old Matthew, who nabbed a coveted role as a lead cast member on the talked-about pilot then called Friends Like Us. . . and so much more."
  },
  {
    id: 10,
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://skybooks.ir/images/productImages/Atomic-Habits_E71670759776.jpg",
    price: 19.99,
    rating: 4.8,
    category: "Personal development",
    year:2018,
    ISBN:"9780735211292",
    paperback:320,
    edition:1,
    descripation:"An Easy & Proven Way to Build Good Habits & Break Bad Ones Tiny Changes, Remarkable Results No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.If you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, you'll get a proven system that can take you to new heights."
  },
  {
    id: 11,
    title: "Can't Hurt Me",
    author: "David Goggins ",
    cover: "https://skybooks.ir/images/productImages/Cant-Hurt-Me_pU1691501515.jpg",
    price: 29.99,
    rating: 4.5,
    category: "Personal development",
    discount: 10,    
    ISBN:"9781544512280",
    paperback:297,
    year:2018,
    edition:1,
    descripation:"For David Goggins, childhood was a nightmare -- poverty, prejudice, and physical abuse colored his days and haunted his nights. But through self-discipline, mental toughness, and hard work, Goggins transformed himself from a depressed, overweight young man with no future into a U.S. Armed Forces icon and one of the world's top endurance athletes. The only man in history to complete elite training as a Navy SEAL, Army Ranger, and Air Force Tactical Air Controller, he went on to set records in numerous endurance events, inspiring Outside magazine to name him The Fittest (Real) Man in America"
  },
  {
    id: 12,
    title: "Deep Work",
    author: "Cal Newport",
    cover: "https://skybooks.ir/images/productImages/Deep-Work_eS1735691151.jpg",
    price: 19.99,
    rating: 4.2,
    category: "Personal development",
    ISBN:"9780349413686",
    paperback:195,
    year:2016,
    edition:1,
    descripation:"Cal Newport discusses in his new book, Deep Work: Rules For Focused Success In A Distracted World, about how professionals of today have started valuing quantity over quality; and how this has turned young professionals of today into puppets who try to indulge in extensive multitasking, dealing with multiple emails and projects. This prevents them from doing 'deep work'; which is focused work free from all other distractions. This also means that the professionals of today should sort out their priorities. Newport uses principles of psychology and neuroscience to enhance his points. He elaborates how to improve a person's cognitive abilities and how employers should encourage workers to not take shortcuts for completing projects. He claims that the best way to break away from the corporate race is to take a break from technology and social media and use some alone-time to rewind and introspect. Newport enforces the beliefs of a non-technophile to deliver work that is productive and efficiently delivered."
  }
];

export const getAllBooks = async() => {
  try{
    Apibooks = (await axios.get("http://localhost:8080/api/book/allBooks")).data
    console.log(Apibooks)
  }catch(error){
    console.log(error)
  }
}

