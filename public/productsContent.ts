const products = [
  {
    id: 1,
    title: "Learning React: Modern Patterns for Developing React Apps",
    price: 34.99,
    category: "Programming",
    description:
      "Learning React is a comprehensive, up-to-date guide for developers who want to master React from the ground up. It covers everything from basic concepts such as components and props to advanced topics like hooks, context, and performance optimization. Real-world examples and hands-on exercises help you develop a strong foundation, while modern patterns and best practices prepare you for building production-ready web applications using the latest React features.",
    image: "../src/assets/imgs/Learning-React.jpg",
  },
  {
    id: 2,
    title: "JavaScript: The Good Parts",
    price: 29.99,
    category: "Programming",
    description:
      "JavaScript: The Good Parts is a classic book by Douglas Crockford that distills JavaScript down to its most elegant and reliable features. This book is ideal for developers who want to write cleaner, more maintainable code by focusing on the core strengths of the language. Through clear explanations and practical examples, it teaches you how to avoid common pitfalls and embrace the best patterns in JavaScript, making it a must-read for anyone serious about web development.",
    image: "../src/assets/imgs/js-the-good-parts.jpg",
  },
  {
    id: 3,
    title: "You Don’t Know JS Yet (Book Series)",
    price: 49.99,
    category: "Programming",
    description:
      "You Don’t Know JS Yet is a deep and thorough exploration of JavaScript, written by Kyle Simpson. This series challenges common assumptions and misconceptions about JavaScript, diving into the language’s mechanics and underlying concepts. With detailed explanations, thought-provoking exercises, and real-world scenarios, this series is essential for developers who want to gain an expert-level understanding of JavaScript and write code that is both powerful and reliable.",
    image: "../src/assets/imgs/you-dont-know-js.jpg",
  },
  {
    id: 4,
    title: "Eloquent JavaScript, 3rd Edition",
    price: 39.99,
    category: "Programming",
    description:
      "Eloquent JavaScript is a beautifully written introduction to programming and JavaScript, suitable for both beginners and experienced developers. The third edition is updated with the latest language features and includes a variety of projects, exercises, and in-depth explanations. This book not only teaches you how to write effective code but also how to think like a programmer, making it a perfect resource for anyone looking to deepen their understanding of programming concepts using JavaScript.",
    image: "../src/assets/imgs/eloquent-js.jpg",
  },
  {
    id: 5,
    title: "Programming TypeScript",
    price: 37.99,
    category: "Programming",
    description:
      "Programming TypeScript is your go-to guide for building robust, scalable applications using TypeScript. The book covers all key concepts, from the basics of type checking and interfaces to advanced patterns such as generics and module management. With practical examples and detailed explanations, you’ll learn how to migrate existing JavaScript codebases to TypeScript, harness the full power of type safety, and improve the maintainability and reliability of your software projects.",
    image: "../src/assets/imgs/programming-typescript.jpg",
  },
  {
    id: 6,
    title: "The Pragmatic Programmer: Your Journey to Mastery",
    price: 42.99,
    category: "Career",
    description:
      "The Pragmatic Programmer is a timeless classic that offers actionable advice and philosophical insights for software developers at any stage of their career. With chapters covering best practices, personal growth, problem-solving techniques, and effective communication, this book empowers you to become a better programmer and team member. Whether you're a new developer or a seasoned professional, The Pragmatic Programmer provides wisdom that will enhance your career and your craft.",
    image: "../src/assets/imgs/pragmatic-programmer.jpg",
  },
  {
    id: 7,
    title: "Atomic Habits",
    price: 27.99,
    category: "Improvement",
    description:
      "Atomic Habits, written by James Clear, presents a proven framework for making small changes that lead to remarkable results. The book delves into the science of habit formation, providing practical strategies for breaking bad habits, developing positive routines, and optimizing your environment for success. Through compelling stories and actionable tips, you’ll discover how to transform your life and achieve your goals by focusing on tiny, consistent improvements over time.",
    image: "../src/assets/imgs/atomic-habits.jpg",
  },
  {
    id: 8,
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    price: 25.99,
    category: "Productivity",
    description:
      "Deep Work by Cal Newport reveals the power of focused, uninterrupted work in an increasingly distracting world. Drawing on cutting-edge research and real-life case studies, Newport explains why deep work is essential for mastering complex tasks, boosting creativity, and achieving extraordinary results. The book provides clear rules for cultivating deep work habits, minimizing distractions, and restructuring your schedule to maximize productivity and satisfaction.",
    image: "../src/assets/imgs/deep-work.jpg",
  },
  {
    id: 9,
    title: "The 7 Habits of Highly Effective People",
    price: 30.0,
    category: "Improvement",
    description:
      "The 7 Habits of Highly Effective People by Stephen Covey is a world-renowned guide to personal and professional effectiveness. Covey introduces seven transformative habits that empower you to take control of your actions, build stronger relationships, and achieve your highest goals. Filled with practical advice, inspiring anecdotes, and powerful frameworks, this book is a must-read for anyone looking to improve themselves and make a lasting impact.",
    image: "../src/assets/imgs/7-habits.jpg",
  },
  {
    id: 10,
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    price: 44.99,
    category: "Programming",
    description:
      "Clean Code, authored by Robert C. Martin, is the definitive guide to writing readable, maintainable, and reliable code. The book explores principles, patterns, and best practices for software craftsmanship, illustrated through practical examples and case studies. By emphasizing the importance of simplicity, clarity, and discipline, Clean Code teaches you how to refactor your codebase, reduce technical debt, and build software that stands the test of time.",
    image: "../src/assets/imgs/clean-code.jpg",
  },
  {
    id: 11,
    title: "Refactoring UI: The Book",
    price: 54.99,
    category: "Design",
    description:
      "Refactoring UI is a visually-rich book designed to help developers create attractive, user-friendly interfaces. Written by Adam Wathan and Steve Schoger, it offers practical design tips, actionable techniques, and before-and-after examples that transform ordinary interfaces into beautiful, engaging experiences. Whether you’re a developer with little design experience or a seasoned designer looking to sharpen your skills, this book is packed with real-world advice to elevate your UI work.",
    image: "../src/assets/imgs/refactoring-ui.jpg",
  },
  {
    id: 12,
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    price: 57.99,
    category: "Programming",
    description:
      "Design Patterns, known as the 'Gang of Four' book, is a cornerstone of software engineering literature. It introduces 23 classic design patterns that help solve common software design problems with reusable, time-tested solutions. This book teaches you how to create flexible, modular, and maintainable code, making it an essential reference for software architects and developers seeking to elevate their understanding of object-oriented programming.",
    image: "../src/assets/imgs/design-patterns.jpg",
  },
  {
    id: 13,
    title: "Can't Hurt Me: Master Your Mind and Defy the Odds",
    price: 21.99,
    category: "Motivation",
    description:
      "Can't Hurt Me by David Goggins is a raw and inspiring memoir chronicling his journey from a troubled childhood to becoming a Navy SEAL, ultra-endurance athlete, and motivational icon. Through personal stories, mental challenges, and practical exercises, Goggins shares the power of self-discipline, mental toughness, and overcoming adversity. This book will inspire you to push past your limits and achieve what you once thought impossible.",
    image: "../src/assets/imgs/cant-hurt-me.jpg",
  },
  {
    id: 14,
    title: "React Up and Running: Building Web Applications",
    price: 36.99,
    category: "Programming",
    description:
      "React Up and Running is a practical, hands-on guide to building robust web applications with React. It covers the basics of component-driven development, state management, and routing, as well as advanced topics like performance optimization and integration with backend services. Filled with detailed examples, this book helps you quickly get up to speed with React and build scalable applications for real-world use cases.",
    image: "../src/assets/imgs/react-up-and-running.jpg",
  },
  {
    id: 15,
    title: "Cracking the Coding Interview",
    price: 39.99,
    category: "Career",
    description:
      "Cracking the Coding Interview is the ultimate resource for anyone preparing for software engineering job interviews. It includes over 150 programming questions, detailed solutions, and insider tips on resume building, interview strategies, and problem-solving approaches. Whether you’re aiming for FAANG companies or startups, this book will equip you with the skills and confidence you need to excel in technical interviews.",
    image: "../src/assets/imgs/cracking-the-coding-interview.jpg",
  },
  {
    id: 16,
    title: "The Subtle Art of Not Giving a F*ck",
    price: 22.99,
    category: "Philosophy",
    description:
      "The Subtle Art of Not Giving a F*ck by Mark Manson offers a counterintuitive approach to living a better, more meaningful life. By encouraging readers to embrace their limitations and focus on what truly matters, Manson provides practical wisdom for navigating challenges, building resilience, and finding fulfillment. Honest, engaging, and thought-provoking, this book is perfect for anyone seeking a no-nonsense guide to living authentically.",
    image: "../src/assets/imgs/subtle-art.jpg",
  },
  {
    id: 17,
    title: "TypeScript Quickly",
    price: 34.99,
    category: "Programming",
    description:
      "TypeScript Quickly is a beginner-friendly introduction to TypeScript, the powerful superset of JavaScript. It covers the fundamentals of types, interfaces, generics, and advanced patterns, helping you leverage static typing for safer, more reliable code. Through practical projects and real-world examples, you’ll learn how to integrate TypeScript into your workflow and unlock new levels of productivity and code quality.",
    image: "../src/assets/imgs/typescript-quickly.jpg",
  },
  {
    id: 18,
    title: "The Lean Startup",
    price: 24.99,
    category: "Other",
    description:
      "The Lean Startup by Eric Ries revolutionized entrepreneurship with its focus on validated learning, rapid experimentation, and continuous innovation. This book provides a framework for launching successful startups by testing assumptions, measuring progress, and adapting strategies based on real customer feedback. Whether you’re starting a new company or launching a new product, The Lean Startup offers essential lessons for building sustainable businesses in uncertain environments.",
    image: "../src/assets/imgs/lean-startup.jpg",
  },
  {
    id: 19,
    title: "Essentialism: The Disciplined Pursuit of Less",
    price: 23.99,
    category: "Improvement",
    description:
      "Essentialism by Greg McKeown is a powerful manifesto for focusing on what truly matters. The book teaches you how to eliminate non-essential activities, prioritize your most important work, and create space for meaningful achievements. Through engaging stories and actionable strategies, Essentialism empowers you to take control of your time, energy, and resources, enabling you to achieve more by doing less.",
    image: "../src/assets/imgs/essentialism.jpg",
  },
  {
    id: 20,
    title: "Show Your Work!",
    price: 19.99,
    category: "Design",
    description:
      "Show Your Work! by Austin Kleon is an inspiring guide to sharing your creative process and getting discovered. Filled with practical advice and illustrated tips, the book encourages artists, writers, and creators of all kinds to embrace transparency, build an audience, and connect with like-minded people. If you want to grow your creative career and make your work more visible, this book will show you how.",
    image: "../src/assets/imgs/show-your-work.jpg",
  },
  {
    id: 21,
    title: "Getting Things Done: The Art of Stress-Free Productivity",
    price: 28.99,
    category: "Productivity",
    description:
      "Getting Things Done by David Allen introduces a revolutionary system for organizing your tasks, managing your projects, and reducing stress. The book provides step-by-step methods for capturing ideas, prioritizing responsibilities, and creating a workflow that allows you to focus on what matters most. Perfect for busy professionals, students, and anyone who wants to achieve more with less stress.",
    image: "../src/assets/imgs/getting-things-done.jpg",
  },
  {
    id: 22,
    title: "Drive: The Surprising Truth About What Motivates Us",
    price: 24.99,
    category: "Motivation",
    description:
      "Drive by Daniel H. Pink explores the science of motivation and reveals what truly drives us to excel. By examining autonomy, mastery, and purpose, Pink provides insights for leaders, educators, and individuals looking to unlock greater creativity and engagement. Backed by research and filled with actionable strategies, Drive is a must-read for anyone seeking to harness their inner drive for success.",
    image: "../src/assets/imgs/drive.jpg",
  },
  {
    id: 23,
    title: "Rich Dad Poor Dad",
    price: 19.99,
    category: "Finance",
    description:
      "Rich Dad Poor Dad by Robert Kiyosaki is a personal finance classic that contrasts the financial philosophies of two fathers—one rich, one poor. Through engaging anecdotes and straightforward lessons, Kiyosaki teaches you how to build wealth, invest wisely, and develop the mindset needed for financial independence. This book is essential reading for anyone who wants to take control of their financial future.",
    image: "../src/assets/imgs/rich-dad-poor-dad.jpg",
  },
  {
    id: 24,
    title: "A Brief History of Time",
    price: 18.99,
    category: "Science",
    description:
      "A Brief History of Time by Stephen Hawking is a masterful exploration of the universe, from the Big Bang to black holes and beyond. Written in clear, accessible language, this groundbreaking book demystifies complex concepts in physics and cosmology, making them understandable to the general reader. Whether you’re a science enthusiast or a curious beginner, this book will expand your understanding of time, space, and the cosmos.",
    image: "../src/assets/imgs/brief-history-of-time.jpg",
  },
  {
    id: 25,
    title: "Why We Sleep: Unlocking the Power of Sleep and Dreams",
    price: 26.99,
    category: "Health",
    description:
      "Why We Sleep by Matthew Walker is a compelling investigation into the critical role of sleep in our lives. The book reveals the science behind sleep cycles, its effects on memory, creativity, and health, and offers practical tips for improving your sleep quality. Walker’s accessible writing makes complex research engaging and actionable, helping you prioritize sleep for a healthier, happier life.",
    image: "../src/assets/imgs/why-we-sleep.jpg",
  },
  {
    id: 26,
    title: "Meditations",
    price: 15.99,
    category: "Philosophy",
    description:
      "Meditations by Marcus Aurelius is a collection of personal writings by the Roman Emperor on the principles of Stoicism. The book offers profound reflections on resilience, leadership, and self-discipline, providing timeless wisdom for navigating life's challenges. Revered by philosophers and leaders alike, Meditations is a source of strength and inspiration for anyone seeking a more meaningful and purposeful life.",
    image: "../src/assets/imgs/meditations.jpg",
  },
  {
    id: 27,
    title: "Leaders Eat Last",
    price: 29.99,
    category: "Leadership",
    description:
      "Leaders Eat Last by Simon Sinek examines the secrets behind great leadership and team success. Drawing from real-world case studies and scientific research, Sinek shows how leaders who prioritize their team’s well-being inspire loyalty, trust, and peak performance. The book provides actionable principles for creating safe, productive environments and leading with empathy and integrity.",
    image: "../src/assets/imgs/leaders-eat-last.jpg",
  },
  {
    id: 28,
    title: "How to Win Friends and Influence People",
    price: 16.99,
    category: "Other",
    description:
      "How to Win Friends and Influence People by Dale Carnegie is a timeless classic on building relationships and persuading others. Packed with practical techniques for improving communication, resolving conflicts, and fostering cooperation, this book is an essential resource for anyone looking to succeed in business and life. Carnegie’s wisdom is just as relevant today as it was when the book was first published.",
    image: "../src/assets/imgs/how-to-win-friends.jpg",
  },

  {
    id: 30,
    title: "Sapiens: A Brief History of Humankind",
    price: 21.99,
    category: "Other",
    description:
      "Sapiens by Yuval Noah Harari is a sweeping narrative that traces the history of the human species from the emergence of Homo sapiens to the present day. Through engaging storytelling and deep analysis, Harari explores how humans have shaped their societies, beliefs, and the world around them. This book challenges readers to think critically about our past and the forces that shape our future.",
    image: "../src/assets/imgs/sapiens.jpg",
  },
  {
    id: 31,
    title: "Thinking, Fast and Slow",
    price: 24.99,
    category: "Other",
    description:
      "Thinking, Fast and Slow by Daniel Kahneman is a groundbreaking book on how the mind works. Kahneman reveals the two systems that drive our thoughts: fast, intuitive thinking and slow, deliberate reasoning. Through research and real-world examples, the book uncovers biases, decision-making errors, and strategies for making better choices. It’s an essential read for anyone interested in human psychology and behavior.",
    image: "../src/assets/imgs/thinking-fast-and-slow.jpg",
  },
  {
    id: 32,
    title: "Mindset: The New Psychology of Success",
    price: 22.99,
    category: "Other",
    description:
      "Mindset by Carol Dweck explores the transformative power of a growth mindset. Drawing from decades of research, Dweck shows how believing in your ability to learn and grow leads to higher achievement and greater resilience. The book offers practical tips for parents, teachers, and professionals to foster growth mindsets in themselves and others, paving the way for lasting success.",
    image: "../src/assets/imgs/mindset.jpg",
  },
  {
    id: 33,
    title: "Men Are from Mars, Women Are from Venus",
    price: 18.99,
    category: "Relationships",
    description:
      "Men Are from Mars, Women Are from Venus by John Gray is a bestselling guide to understanding and improving communication between men and women. Through relatable anecdotes and practical strategies, Gray helps couples bridge the gap in expectations, needs, and emotional expression, leading to more harmonious and satisfying relationships.",
    image: "../src/assets/imgs/men-mars-women-venus.jpg",
  },
  {
    id: 34,
    title: "The Lean Entrepreneur",
    price: 27.99,
    category: "Other",
    description:
      "The Lean Entrepreneur by Brant Cooper and Patrick Vlaskovits provides a roadmap for innovators and startups to bring new products to market quickly and efficiently. Through actionable frameworks and case studies, the book teaches how to identify customer needs, experiment with ideas, and iterate rapidly. It’s a vital resource for entrepreneurs seeking to minimize risk and maximize success.",
    image: "../src/assets/imgs/lean-entrepreneur.jpg",
  },
  {
    id: 35,
    title: "Becoming",
    price: 20.99,
    category: "Other",
    description:
      "Becoming is Michelle Obama’s deeply personal memoir, chronicling her journey from her childhood in Chicago to her years as First Lady of the United States. With honesty and warmth, Obama shares her triumphs and disappointments, her growth as a leader, and her passion for inspiring others. This book offers valuable lessons in resilience, authenticity, and the power of hope.",
    image: "../src/assets/imgs/becoming.jpg",
  },
  {
    id: 36,
    title: "Salt, Fat, Acid, Heat",
    price: 29.99,
    category: "Other",
    description:
      "Salt, Fat, Acid, Heat by Samin Nosrat is a culinary masterpiece that breaks down the four fundamental elements of great cooking. Illustrated with beautiful visuals and packed with expert advice, this book empowers cooks of all levels to understand the science of flavor, master essential techniques, and create delicious meals from scratch. It’s both a cookbook and a kitchen manual you’ll return to again and again.",
    image: "../src/assets/imgs/salt-fat-acid-heat.jpg",
  },
  {
    id: 37,
    title: "The 4-Hour Body",
    price: 25.99,
    category: "gym",
    description:
      "The 4-Hour Body by Tim Ferriss is an unconventional guide to transforming your body and life through rapid, scientifically-tested hacks. Covering topics like weight loss, muscle gain, sleep optimization, and athletic performance, the book provides actionable strategies and experiments you can implement right away. It’s a must-read for anyone interested in personal optimization and self-improvement.",
    image: "../src/assets/imgs/4-hour-body.jpg",
  },
  {
    id: 38,
    title: "Drawing on the Right Side of the Brain",
    price: 17.99,
    category: "Other",
    description:
      "Drawing on the Right Side of the Brain by Betty Edwards is a transformative guide for anyone who wants to improve their drawing skills. Using a combination of psychological research and hands-on exercises, Edwards shows how to tap into your creative potential, overcome mental blocks, and see the world with an artist’s eye. The book is perfect for beginners and experienced artists alike.",
    image: "../src/assets/imgs/drawing-on-right-side.jpg",
  },
  {
    id: 39,
    title: "Influence: The Psychology of Persuasion",
    price: 22.99,
    category: "Other",
    description:
      "Influence by Robert Cialdini is a foundational book in the field of marketing and psychology. Drawing on decades of research, Cialdini reveals the six key principles that influence human behavior and decision-making. Through real-world examples, you’ll learn how to apply these principles ethically to persuade, negotiate, and succeed in business and everyday life.",
    image: "../src/assets/imgs/influence.jpg",
  },
  {
    id: 40,
    title: "Wherever You Go, There You Are",
    price: 19.99,
    category: "Other",
    description:
      "Wherever You Go, There You Are by Jon Kabat-Zinn is a classic introduction to mindfulness meditation. Kabat-Zinn’s gentle guidance and practical exercises help readers integrate mindfulness into their daily routines, reduce stress, and cultivate greater awareness and peace. The book’s simple wisdom makes it accessible to beginners and experienced practitioners alike.",
    image: "../src/assets/imgs/wherever-you-go.jpg",
  },
  {
    id: 41,
    title: "Strength Training Anatomy",
    price: 32.99,
    category: "Gym",
    description:
      "Strength Training Anatomy by Frederic Delavier is a visual guide to the muscles involved in strength exercises. With detailed anatomical illustrations and step-by-step exercise instructions, this book is essential for athletes, trainers, and anyone seeking to improve their performance in the gym. Learn proper form, prevent injuries, and maximize your results.",
    image: "../src/assets/imgs/strength-training-anatomy.jpg",
  },
  {
    id: 42,
    title: "Bigger Leaner Stronger",
    price: 24.99,
    category: "Gym",
    description:
      "Bigger Leaner Stronger by Michael Matthews is a science-backed guide to building muscle, losing fat, and transforming your body. It offers practical workout routines, nutrition advice, and motivation for men of all ages and fitness levels. The book demystifies fitness myths and provides everything you need to achieve your physical goals.",
    image: "../src/assets/imgs/bigger-leaner-stronger.jpg",
  },
  {
    id: 43,
    title: "Starting Strength: Basic Barbell Training",
    price: 29.99,
    category: "Gym",
    description:
      "Starting Strength by Mark Rippetoe is a classic manual for learning safe and effective barbell training techniques. With detailed instructions on squats, deadlifts, presses, and more, this book provides the foundation for building strength and muscle. Ideal for beginners and advanced lifters alike, it’s a staple in any serious fitness library.",
    image: "../src/assets/imgs/starting-strength.jpg",
  },
  {
    id: 44,
    title: "The New Encyclopedia of Modern Bodybuilding",
    price: 34.99,
    category: "Gym",
    description:
      "The New Encyclopedia of Modern Bodybuilding by Arnold Schwarzenegger is an all-in-one reference for anyone passionate about bodybuilding. This comprehensive volume covers training techniques, nutrition, competition prep, and the history of bodybuilding, featuring advice from the sport’s greatest champions. It’s a must-have for bodybuilders, coaches, and fitness enthusiasts.",
    image: "../src/assets/imgs/bodybuilding-encyclopedia.jpg",
  },
  {
    id: 45,
    title: "The Men’s Fitness Exercise Bible",
    price: 22.99,
    category: "Gym",
    description:
      "The Men’s Fitness Exercise Bible by Sean Hyson is a comprehensive collection of workouts and exercises for men looking to improve their strength, endurance, and physique. With over 100 exercises and countless routines, this book helps you target every muscle group and achieve any fitness goal. Suitable for beginners and advanced athletes alike.",
    image: "../src/assets/imgs/mens-fitness-exercise-bible.jpg",
  },
  {
    id: 46,
    title: "Convict Conditioning",
    price: 19.99,
    category: "Gym",
    description:
      "Convict Conditioning by Paul Wade reveals the secrets of bodyweight training developed in the toughest prisons. With step-by-step progressions for classic exercises like push-ups, squats, and pull-ups, the book helps you build strength, flexibility, and resilience using no equipment. Perfect for anyone seeking old-school fitness and functional strength.",
    image: "../src/assets/imgs/convict-conditioning.jpg",
  },
  {
    id: 47,
    title: "The Women’s Health Big Book of Exercises",
    price: 27.99,
    category: "Gym",
    description:
      "The Women’s Health Big Book of Exercises is a comprehensive resource for women seeking to get fit, strong, and healthy. It features hundreds of exercises, full-body routines, and expert advice tailored to women’s unique fitness needs. From beginners to experienced athletes, this book has something for everyone.",
    image: "../src/assets/imgs/womens-health-big-book.jpg",
  },
  {
    id: 48,
    title: "Thinner Leaner Stronger",
    price: 24.99,
    category: "Gym",
    description:
      "Thinner Leaner Stronger by Michael Matthews is the definitive guide for women who want to build muscle, lose fat, and transform their bodies. Matthews provides a proven workout program, nutrition plan, and science-based tips for long-lasting results. Achieve your health and fitness goals with practical, step-by-step guidance.",
    image: "../src/assets/imgs/thinner-leaner-stronger.jpg",
  },
  {
    id: 49,
    title: "The One-Minute Workout",
    price: 21.99,
    category: "Gym",
    description:
      "The One-Minute Workout by Martin Gibala introduces time-efficient, high-intensity training routines that deliver real results in minimal time. Grounded in cutting-edge exercise science, the book offers practical workouts for busy people who want to stay fit without spending hours in the gym. Discover how to get the most from every minute you invest in your health.",
    image: "../src/assets/imgs/one-minute-workout.jpg",
  },
  {
    id: 50,
    title: "Bodyweight Strength Training Anatomy",
    price: 25.99,
    category: "Gym",
    description:
      "Bodyweight Strength Training Anatomy by Bret Contreras is a detailed guide to building strength and muscle using your own body weight. Featuring anatomical illustrations and progressive exercise routines, this book helps you master bodyweight movements and reach your fitness potential. Perfect for home workouts and gym-goers alike.",
    image: "../src/assets/imgs/bodyweight-anatomy.jpg",
  },
  {
    id: 51,
    title: "So Good They Can't Ignore You",
    price: 18.99,
    category: "Career",
    description:
      "Cal Newport argues that skills—not just passion—are the key to building a remarkable career. This book explains how to become so good in your field that opportunities come to you, sharing real stories and actionable advice for mastering your craft.",
    image: "../src/assets/imgs/so-good.jpg",
  },
  {
    id: 52,
    title: "Designing Your Life",
    price: 20.99,
    category: "Career",
    description:
      "Bill Burnett and Dave Evans, Stanford professors, use design thinking principles to help you build a fulfilling career and life. Packed with exercises and frameworks for finding meaning and opportunity in your work.",
    image: "../src/assets/imgs/designing-your-life.jpg",
  },
  {
    id: 53,
    title: "Give and Take",
    price: 17.99,
    category: "Career",
    description:
      "Adam Grant explores how giving to others can be the key to professional success. Using research and compelling stories, this book shows why generosity can fuel creativity, leadership, and long-term achievement.",
    image: "../src/assets/imgs/give-and-take.jpg",
  },
  {
    id: 54,
    title: "Mindset: Changing The Way You Think To Fulfil Your Potential",
    price: 19.99,
    category: "Career",
    description:
      "Carol Dweck’s famous book about the power of a growth mindset shows how attitude can impact professional growth, leadership, and job satisfaction. It’s a must-read for anyone aiming to keep learning at work.",
    image: "../src/assets/imgs/mindset-career.jpg",
  },
  {
    id: 55,
    title: "Drive: The Surprising Truth About What Motivates Us",
    price: 24.99,
    category: "Career",
    description:
      "Daniel H. Pink’s modern classic looks at motivation in the workplace, showing how autonomy, mastery, and purpose lead to high performance. Learn how to build a career that makes you feel engaged and driven.",
    image: "../src/assets/imgs/drive-career.jpg",
  },
  {
    id: 56,
    title: "The Start-Up of You",
    price: 23.99,
    category: "Career",
    description:
      "Reid Hoffman (LinkedIn co-founder) and Ben Casnocha share how to use entrepreneurial strategies to grow your career—whether you work at a company or run your own business. Networking and adaptability are at the core.",
    image: "../src/assets/imgs/startup-of-you.jpg",
  },
  {
    id: 57,
    title: "Lean In: Women, Work, and the Will to Lead",
    price: 21.99,
    category: "Career",
    description:
      "Sheryl Sandberg’s best-selling guide for professional women—and anyone—who wants to grow as a leader. Full of practical strategies for navigating the workplace and breaking through barriers.",
    image: "../src/assets/imgs/lean-in.jpg",
  },
  {
    id: 58,
    title: "Radical Candor",
    price: 19.99,
    category: "Career",
    description:
      "Kim Scott reveals how honest feedback, given with kindness, can transform your working relationships and help you build strong teams. This book is a practical guide for leaders at any level.",
    image: "../src/assets/imgs/radical-candor.jpg",
  },
  {
    id: 59,
    title: "Originals: How Non-Conformists Move the World",
    price: 18.99,
    category: "Career",
    description:
      "Adam Grant explores how creative thinkers bring new ideas to life—and how anyone can champion innovation and progress at work. Full of research and real-world case studies.",
    image: "../src/assets/imgs/originals.jpg",
  },
  {
    id: 60,
    title: "What Color Is Your Parachute?",
    price: 16.99,
    category: "Career",
    description:
      "Richard N. Bolles’ classic job-search and career planning guide, updated annually, is packed with exercises, self-assessment tools, and strategies for finding your ideal job.",
    image: "../src/assets/imgs/parachute.jpg",
  },

  {
    id: 61,
    title: "The Power of Habit",
    price: 17.99,
    category: "Improvement",
    description:
      "Charles Duhigg explores the science behind why habits exist and how they can be changed. Learn practical techniques to transform your personal and professional life by mastering the art of habit formation.",
    image: "../src/assets/imgs/power-of-habit.jpg",
  },
  {
    id: 62,
    title: "Grit: The Power of Passion and Perseverance",
    price: 19.99,
    category: "Improvement",
    description:
      "Angela Duckworth reveals why talent isn’t everything—grit and determination are the keys to success. This book helps you cultivate resilience and push through challenges to achieve your goals.",
    image: "../src/assets/imgs/grit.jpg",
  },
  {
    id: 63,
    title: "Mindfulness for Beginners",
    price: 14.99,
    category: "Improvement",
    description:
      "Jon Kabat-Zinn introduces mindfulness in simple, practical steps. Learn to be present, reduce stress, and improve your well-being with exercises and gentle guidance.",
    image: "../src/assets/imgs/mindfulness-beginners.jpg",
  },
  {
    id: 64,
    title: "The Miracle Morning",
    price: 16.99,
    category: "Improvement",
    description:
      "Hal Elrod shows how a morning routine can radically transform your productivity, mindset, and life. The book gives you step-by-step routines for maximizing your mornings.",
    image: "../src/assets/imgs/miracle-morning.jpg",
  },
  {
    id: 65,
    title: "The Slight Edge",
    price: 15.99,
    category: "Improvement",
    description:
      "Jeff Olson explains how simple daily disciplines can lead to massive long-term results. Learn how small actions, done consistently, can compound to change your life.",
    image: "../src/assets/imgs/slight-edge.jpg",
  },
  {
    id: 66,
    title: "Make Your Bed",
    price: 12.99,
    category: "Improvement",
    description:
      "Admiral William H. McRaven shares life lessons learned from Navy SEAL training. This short, inspiring book gives practical advice for tackling challenges and building discipline.",
    image: "../src/assets/imgs/make-your-bed.jpg",
  },
  {
    id: 67,
    title: "The Four Agreements",
    price: 13.99,
    category: "Improvement",
    description:
      "Don Miguel Ruiz offers four powerful principles for living with integrity and happiness. A spiritual classic for anyone looking to improve their life and relationships.",
    image: "../src/assets/imgs/four-agreements.jpg",
  },
  {
    id: 68,
    title: "Feel the Fear and Do It Anyway",
    price: 15.99,
    category: "Improvement",
    description:
      "Susan Jeffers teaches how to conquer fear, take risks, and make bold changes. Learn strategies for building confidence and facing new challenges with courage.",
    image: "../src/assets/imgs/feel-the-fear.jpg",
  },
  {
    id: 69,
    title: "You Are a Badass",
    price: 14.99,
    category: "Improvement",
    description:
      "Jen Sincero’s inspiring guide helps you stop doubting your greatness and start living an awesome life. Filled with humor, advice, and exercises to boost your self-esteem.",
    image: "../src/assets/imgs/you-are-a-badass.jpg",
  },
  {
    id: 70,
    title: "Daring Greatly",
    price: 18.99,
    category: "Improvement",
    description:
      "Brené Brown reveals the power of vulnerability and how it leads to courage, connection, and creativity. Discover how embracing your imperfections can transform your life.",
    image: "../src/assets/imgs/daring-greatly.jpg",
  },
  {
    id: 71,
    title: "Don't Make Me Think",
    price: 28.99,
    category: "Design",
    description:
      "Steve Krug’s classic usability book teaches web designers and developers how to create websites and apps that are intuitive and easy to use. Using humor, real-world examples, and clear principles, Krug explains the fundamentals of user experience, navigation, and information architecture. This book is an essential resource for anyone seeking to make digital products simple, user-friendly, and effective, providing actionable advice for design projects of any size.",
    image: "../src/assets/imgs/dont-make-me-think.jpg",
  },
  {
    id: 72,
    title: "The Design of Everyday Things",
    price: 30.99,
    category: "Design",
    description:
      "Don Norman’s influential work explores the psychology behind how people interact with products and environments. The book breaks down why some designs succeed while others frustrate, providing practical guidance for making things that work naturally for users. Norman’s insights on usability, feedback, and human-centered design have shaped countless products and remain a must-read for anyone in design or engineering.",
    image: "../src/assets/imgs/design-everyday-things.jpg",
  },
  {
    id: 73,
    title:
      "Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days",
    price: 25.99,
    category: "Design",
    description:
      "Developed at Google Ventures, ‘Sprint’ offers a practical, step-by-step process for answering critical business questions through design, prototyping, and testing. Jake Knapp and his co-authors lay out a structured method to rapidly move from idea to tested solution, including tools for brainstorming, sketching, and validating new concepts with real users. It’s a valuable playbook for teams seeking innovation, efficiency, and user-centered results.",
    image: "../src/assets/imgs/sprint.jpg",
  },
  {
    id: 74,
    title: "About Face: The Essentials of Interaction Design",
    price: 36.99,
    category: "Design",
    description:
      "Alan Cooper’s foundational text delves into the core principles of interaction design, including goal-directed design, persona development, and usability patterns. The book is packed with frameworks for designing modern interfaces for web, desktop, and mobile. With in-depth coverage and practical examples, ‘About Face’ is a staple for UI/UX designers and product creators who want to build experiences that delight and empower users.",
    image: "../src/assets/imgs/about-face.jpg",
  },
  {
    id: 75,
    title: "Thinking with Type",
    price: 24.99,
    category: "Design",
    description:
      "Ellen Lupton’s acclaimed book explores the art and science of typography, offering guidance for using type effectively in print and digital media. The book explains basic principles, history, and terminology, then dives into advanced topics like grids, alignment, hierarchy, and expressive layouts. Full of illustrations, exercises, and design inspiration, it’s an essential reference for anyone working with words and visuals.",
    image: "../src/assets/imgs/thinking-with-type.jpg",
  },
  {
    id: 76,
    title:
      "Creative Confidence: Unleashing the Creative Potential Within Us All",
    price: 27.99,
    category: "Design",
    description:
      "Tom and David Kelley—founders of IDEO—share insights on building creativity and innovation in any organization. Through stories, techniques, and research, they show how anyone can overcome self-doubt and unlock their creative problem-solving abilities. The book emphasizes design thinking, prototyping, and learning from failure, making it valuable for designers, leaders, and entrepreneurs alike.",
    image: "../src/assets/imgs/creative-confidence.jpg",
  },
  {
    id: 77,
    title: "Grid Systems in Graphic Design",
    price: 32.99,
    category: "Design",
    description:
      "Josef Müller-Brockmann’s classic explains the logic, structure, and power of grid systems in layout design. With clear explanations and real-life examples, the book teaches how to build balanced, consistent, and visually pleasing pages. Whether you’re designing for print, web, or apps, this text will deepen your understanding of composition, rhythm, and harmony in design.",
    image: "../src/assets/imgs/grid-systems.jpg",
  },
  {
    id: 78,
    title: "Logo Design Love: A Guide to Creating Iconic Brand Identities",
    price: 26.99,
    category: "Design",
    description:
      "David Airey’s book is a practical guide for designing memorable and effective logos. It covers the creative process from research and sketching to refining and presenting concepts to clients. Packed with case studies and interviews from industry leaders, the book gives readers both inspiration and hands-on advice for building powerful visual identities.",
    image: "../src/assets/imgs/logo-design-love.jpg",
  },
  {
    id: 79,
    title:
      "Steal Like an Artist: 10 Things Nobody Told You About Being Creative",
    price: 16.99,
    category: "Design",
    description:
      "Austin Kleon’s bestseller encourages readers to embrace influence, remix ideas, and unlock their creativity. The book mixes actionable advice with inspiring stories and illustrations, helping designers and artists overcome creative blocks and find their own unique voice. It’s a quick, motivating read for anyone in creative fields.",
    image: "../src/assets/imgs/steal-like-an-artist-design.jpg",
  },
  {
    id: 80,
    title:
      "User Story Mapping: Discover the Whole Story, Build the Right Product",
    price: 22.99,
    category: "Design",
    description:
      "Jeff Patton introduces the concept of story mapping as a way to visualize user needs, prioritize features, and keep design teams focused on building value. This book shows how to collaborate with stakeholders, break down complex problems, and ensure everyone understands what matters most. With plenty of real examples and templates, it’s a go-to resource for UX and product designers.",
    image: "../src/assets/imgs/user-story-mapping.jpg",
  },
  {
    id: 81,
    title:
      "Eat That Frog!: 21 Great Ways to Stop Procrastinating and Get More Done in Less Time",
    price: 18.99,
    category: "Productivity",
    description:
      "Brian Tracy’s productivity classic delivers 21 actionable strategies to help you tackle your most important tasks first, overcome procrastination, and work more efficiently. Using memorable metaphors and practical tools, Tracy teaches you how to plan your day, focus on priorities, and build habits that lead to long-term personal and professional success. This book is an easy-to-read, powerful guide for anyone looking to boost their productivity.",
    image: "../src/assets/imgs/eat-that-frog.jpg",
  },
  {
    id: 82,
    title: "Essentialism: The Disciplined Pursuit of Less",
    price: 20.99,
    category: "Productivity",
    description:
      "Greg McKeown explores how to identify and focus on what truly matters, teaching readers how to eliminate the nonessential and create space for meaningful progress. The book combines real-life stories with practical strategies for setting boundaries, saying no, and making better decisions. It’s a must-read for anyone who feels overworked and wants to achieve more by doing less.",
    image: "../src/assets/imgs/essentialism-productivity.jpg",
  },
  {
    id: 83,
    title: "The Productivity Project",
    price: 16.99,
    category: "Productivity",
    description:
      "Chris Bailey spent a year experimenting with productivity techniques and measuring their impact on his life. This engaging book documents his findings, sharing science-backed tips on focus, time management, energy, and attention. With exercises and self-reflection prompts, it’s a toolkit for anyone eager to become more efficient and satisfied with their work.",
    image: "../src/assets/imgs/productivity-project.jpg",
  },

  {
    id: 85,
    title: "Getting Results the Agile Way",
    price: 15.99,
    category: "Productivity",
    description:
      "J.D. Meier presents a flexible, powerful productivity system based on Agile principles. The book teaches you how to set goals, prioritize actions, and track progress in simple, manageable steps. With frameworks for daily, weekly, and monthly planning, this system adapts to your changing needs and helps you build sustainable momentum in both work and life.",
    image: "../src/assets/imgs/agile-way.jpg",
  },
  {
    id: 86,
    title: "Make Time: How to Focus on What Matters Every Day",
    price: 18.99,
    category: "Productivity",
    description:
      "Jake Knapp and John Zeratsky, creators of Google’s Sprint process, share a toolkit for reclaiming your attention and making time for what matters most. The book features over 80 actionable tactics for managing your energy, building better routines, and avoiding common productivity traps. Each chapter is easy to read and packed with practical advice for all kinds of busy people.",
    image: "../src/assets/imgs/make-time.jpg",
  },
  {
    id: 87,
    title: "Atomic Habits",
    price: 19.99,
    category: "Productivity",
    description:
      "James Clear’s blockbuster hit breaks down the science of habit formation and reveals how small, consistent changes can lead to remarkable results. The book is full of real-life examples, habit-stacking techniques, and strategies for designing your environment to support your goals. Clear’s methods are simple yet powerful, making this a foundational read for anyone looking to improve productivity and build better routines.",
    image: "../src/assets/imgs/atomic-habits.jpg",
  },
  {
    id: 88,
    title:
      "The ONE Thing: The Surprisingly Simple Truth Behind Extraordinary Results",
    price: 16.99,
    category: "Productivity",
    description:
      "Gary Keller and Jay Papasan focus on the power of narrowing your attention to one priority at a time. This book explains how to cut through clutter, achieve better results in less time, and maintain laser-sharp focus. With clear frameworks and motivating stories, it helps you identify what truly moves you forward.",
    image: "../src/assets/imgs/one-thing.jpg",
  },
  {
    id: 89,
    title: "168 Hours: You Have More Time Than You Think",
    price: 14.99,
    category: "Productivity",
    description:
      "Laura Vanderkam provides practical tools for analyzing how you spend your week and reallocating your time toward the things you value most. Combining case studies, research, and planning templates, this book helps you create a schedule that maximizes productivity without sacrificing happiness or well-being.",
    image: "../src/assets/imgs/168-hours.jpg",
  },
  {
    id: 90,
    title:
      "Smarter Faster Better: The Secrets of Being Productive in Life and Business",
    price: 17.99,
    category: "Productivity",
    description:
      "Charles Duhigg, author of ‘The Power of Habit,’ delves into the science behind productivity and high performance. He uncovers the eight key principles that make people and organizations more effective—from setting goals and making decisions to building motivation and absorbing data. Packed with real-world stories and actionable insights, it’s an essential guide for achieving more with less effort.",
    image: "../src/assets/imgs/smarter-faster-better.jpg",
  },
  {
    id: 91,
    title: "Awaken the Giant Within",
    price: 19.99,
    category: "Motivation",
    description:
      "Tony Robbins delivers an inspiring guide to taking control of your emotions, finances, relationships, and life. Through practical strategies and powerful anecdotes, he teaches you how to unlock your inner power and create lasting change. This book offers step-by-step plans for achieving personal and professional breakthroughs.",
    image: "../src/assets/imgs/awaken-the-giant-within.jpg",
  },
  {
    id: 92,
    title: "The Motivation Manifesto",
    price: 16.99,
    category: "Motivation",
    description:
      "Brendon Burchard’s empowering book is a call to reclaim your personal power and live a life of greater courage, freedom, and motivation. Through poetic prose and actionable principles, Burchard helps readers break free from fear and inertia to pursue their highest ambitions.",
    image: "../src/assets/imgs/motivation-manifesto.jpg",
  },
  {
    id: 93,
    title: "The Energy Bus",
    price: 15.99,
    category: "Motivation",
    description:
      "Jon Gordon’s bestselling fable teaches ten rules for infusing your life and work with positive energy, vision, and purpose. Using relatable characters and engaging storytelling, the book provides a roadmap for overcoming adversity and cultivating a winning attitude.",
    image: "../src/assets/imgs/energy-bus.jpg",
  },
  {
    id: 94,
    title: "You Are a Badass",
    price: 14.99,
    category: "Motivation",
    description:
      "Jen Sincero’s witty, no-nonsense guide helps you break free from self-doubt and live an awesome life. Packed with inspiring stories, practical exercises, and humor, the book encourages you to embrace your inner power and create the life you want.",
    image: "../src/assets/imgs/you-are-a-badass.jpg",
  },
  {
    id: 95,
    title: "Unfu*k Yourself: Get Out of Your Head and into Your Life",
    price: 17.99,
    category: "Motivation",
    description:
      "Gary John Bishop delivers tough-love motivation to help you break negative thought patterns and take bold action toward your goals. His straightforward approach and memorable mantras empower you to stop overthinking and start living a purposeful, fulfilling life.",
    image: "../src/assets/imgs/unfuck-yourself.jpg",
  },
  {
    id: 96,
    title: "Start with Why",
    price: 18.99,
    category: "Motivation",
    description:
      "Simon Sinek explores how having a strong ‘why’ can inspire you and those around you to greater achievements. Through real-world examples from business and life, the book shows why purpose-driven leadership leads to lasting success and fulfillment.",
    image: "../src/assets/imgs/start-with-why.jpg",
  },
  {
    id: 97,
    title: "The Happiness Advantage",
    price: 16.99,
    category: "Motivation",
    description:
      "Shawn Achor, a leading positive psychology researcher, explains how happiness fuels success, not the other way around. Using research-backed principles, he provides practical techniques for boosting positivity, performance, and motivation in work and life.",
    image: "../src/assets/imgs/happiness-advantage.jpg",
  },
  {
    id: 98,
    title: "Drive: The Surprising Truth About What Motivates Us",
    price: 24.99,
    category: "Motivation",
    description:
      "Daniel H. Pink reveals the three key elements—autonomy, mastery, and purpose—that drive human motivation. The book challenges conventional wisdom and offers practical advice for creating environments where people thrive and achieve their best.",
    image: "../src/assets/imgs/drive-motivation.jpg",
  },
  {
    id: 99,
    title:
      "Make Your Bed: Little Things That Can Change Your Life...And Maybe the World",
    price: 12.99,
    category: "Motivation",
    description:
      "Admiral William H. McRaven shares life-changing lessons from Navy SEAL training, showing how simple habits and small actions can lead to success. Each chapter tells a story and offers advice for overcoming obstacles and achieving your goals.",
    image: "../src/assets/imgs/make-your-bed-motivation.jpg",
  },
  {
    id: 100,
    title: "The Success Principles",
    price: 22.99,
    category: "Motivation",
    description:
      "Jack Canfield compiles decades of success strategies into 67 practical principles for achieving your goals. The book covers everything from taking responsibility and visualizing success to building confidence and maintaining perseverance—essential reading for anyone looking for lasting motivation.",
    image: "../src/assets/imgs/success-principles.jpg",
  },

  {
    id: 101,
    title: "The Millionaire Next Door",
    price: 19.99,
    category: "Finance",
    description:
      "Thomas J. Stanley and William D. Danko reveal the surprising habits and lifestyles of America’s wealthy. Based on years of research, this book shows how millionaires often live below their means, make smart spending decisions, and prioritize investing over consumption. Full of case studies and actionable insights, it helps you adopt proven strategies for building wealth over time.",
    image: "../src/assets/imgs/millionaire-next-door.jpg",
  },
  {
    id: 102,
    title: "Your Money or Your Life",
    price: 17.99,
    category: "Finance",
    description:
      "Vicki Robin and Joe Dominguez present a transformative approach to personal finance, teaching you how to rethink your relationship with money and live with greater intention. The book offers step-by-step methods for tracking expenses, reducing unnecessary spending, and aligning your finances with your values. It’s a guide to achieving financial independence and finding true fulfillment.",
    image: "../src/assets/imgs/your-money-or-your-life.jpg",
  },
  {
    id: 103,
    title: "I Will Teach You to Be Rich",
    price: 16.99,
    category: "Finance",
    description:
      "Ramit Sethi provides a practical, no-nonsense guide to managing your money, growing your savings, and investing for the future. The book is full of scripts, checklists, and real-world examples for optimizing your finances—from paying off debt and automating savings to negotiating bills and starting to invest. It’s perfect for young adults and anyone ready to take control of their financial destiny.",
    image: "../src/assets/imgs/i-will-teach-you-to-be-rich.jpg",
  },
  {
    id: 104,
    title: "The Total Money Makeover",
    price: 20.99,
    category: "Finance",
    description:
      "Dave Ramsey lays out a straightforward plan for paying off debt, building an emergency fund, and investing for long-term wealth. Using clear steps and motivating success stories, Ramsey’s book has helped millions take control of their finances and break the cycle of living paycheck to paycheck. It’s an inspiring, step-by-step blueprint for anyone serious about financial freedom.",
    image: "../src/assets/imgs/total-money-makeover.jpg",
  },
  {
    id: 105,
    title: "The Simple Path to Wealth",
    price: 18.99,
    category: "Finance",
    description:
      "JL Collins demystifies investing with straightforward advice on how to achieve financial independence and retire comfortably. This book covers everything from the power of index funds to avoiding common investing mistakes. With humor and clarity, Collins helps readers understand the essentials of building wealth without unnecessary risk or stress.",
    image: "../src/assets/imgs/simple-path-to-wealth.jpg",
  },
  {
    id: 106,
    title: "The Intelligent Investor",
    price: 22.99,
    category: "Finance",
    description:
      "Benjamin Graham’s classic work on value investing remains a must-read for anyone interested in building wealth through the stock market. With timeless wisdom, Graham teaches the fundamentals of analyzing investments, managing risk, and staying disciplined through market cycles. The book also includes commentary by Jason Zweig to relate Graham’s ideas to today’s financial landscape.",
    image: "../src/assets/imgs/intelligent-investor.jpg",
  },
  {
    id: 107,
    title:
      "Broke Millennial: Stop Scraping By and Get Your Financial Life Together",
    price: 15.99,
    category: "Finance",
    description:
      "Erin Lowry delivers a relatable, step-by-step guide for young adults navigating personal finance. Covering everything from budgeting and student loans to credit scores and investing, this book empowers readers to confidently handle money and make smart financial decisions. It’s filled with real stories, practical tips, and actionable plans for mastering money in your 20s and beyond.",
    image: "../src/assets/imgs/broke-millennial.jpg",
  },
  {
    id: 108,
    title: "The Psychology of Money",
    price: 21.99,
    category: "Finance",
    description:
      "Morgan Housel explores how our attitudes, behaviors, and life experiences shape the way we think about money. Using engaging stories from history and everyday life, Housel reveals why making smart financial choices isn’t just about math, but about understanding ourselves. This book offers fresh insights for building wealth, avoiding pitfalls, and achieving lasting financial well-being.",
    image: "../src/assets/imgs/psychology-of-money.jpg",
  },
  {
    id: 109,
    title: "Unshakeable: Your Financial Freedom Playbook",
    price: 17.99,
    category: "Finance",
    description:
      "Tony Robbins teams up with financial advisor Peter Mallouk to provide a practical guide for thriving in any market. The book covers investing basics, risk management, and the mindsets needed to build wealth even during volatile times. With straightforward advice and inspiring interviews, Unshakeable equips you to make informed decisions and secure your financial future.",
    image: "../src/assets/imgs/unshakeable.jpg",
  },
  {
    id: 110,
    title: "Smart Women Finish Rich",
    price: 14.99,
    category: "Finance",
    description:
      "David Bach’s empowering book offers a clear, actionable plan for women to achieve financial security and independence. Covering topics like retirement planning, investing, and goal-setting, Bach addresses the unique challenges women face and provides real-life stories and exercises. This book helps readers build confidence and create a path toward lasting wealth.",
    image: "../src/assets/imgs/smart-women-finish-rich.jpg",
  },
  {
    id: 111,
    title: "Astrophysics for People in a Hurry",
    price: 18.99,
    category: "Science",
    description:
      "Neil deGrasse Tyson presents the wonders of the cosmos in a clear and witty style. This book distills complex topics—such as black holes, dark matter, and quantum mechanics—into short, digestible chapters for curious readers of any background. Tyson’s approachable explanations make this an ideal introduction to the universe and its mysteries.",
    image: "../src/assets/imgs/astrophysics-hurry.jpg",
  },
  {
    id: 112,
    title: "A Short History of Nearly Everything",
    price: 22.99,
    category: "Science",
    description:
      "Bill Bryson takes readers on a journey through time, space, and the history of science. Blending humor, curiosity, and storytelling, Bryson unpacks how life, the Earth, and the universe came to be. The book covers physics, chemistry, biology, geology, and more, making complex topics engaging and accessible.",
    image: "../src/assets/imgs/short-history-nearly-everything.jpg",
  },
  {
    id: 113,
    title: "The Gene: An Intimate History",
    price: 20.99,
    category: "Science",
    description:
      "Siddhartha Mukherjee offers a sweeping history of genetics, exploring the science, politics, and personal stories behind DNA. The book covers the evolution of genetic research, breakthroughs in medicine, and ethical dilemmas. It’s a fascinating read for anyone interested in how genes shape life, identity, and society.",
    image: "../src/assets/imgs/gene-intimate-history.jpg",
  },
  {
    id: 114,
    title: "Cosmos",
    price: 21.99,
    category: "Science",
    description:
      "Carl Sagan’s masterpiece takes readers on a journey through the universe—from the origins of life on Earth to the exploration of distant galaxies. Combining science, philosophy, and history, Sagan inspires awe and wonder about our place in the cosmos. The book is richly illustrated and remains a classic introduction to astronomy and science.",
    image: "../src/assets/imgs/cosmos.jpg",
  },
  {
    id: 115,
    title: "The Body: A Guide for Occupants",
    price: 19.99,
    category: "Science",
    description:
      "Bill Bryson explores the miraculous machinery of the human body, revealing the surprising ways it works and what happens when things go wrong. With humor and clarity, Bryson covers anatomy, physiology, and medical discoveries, making this book both educational and entertaining.",
    image: "../src/assets/imgs/body-bryson.jpg",
  },
  {
    id: 116,
    title: "The Selfish Gene",
    price: 16.99,
    category: "Science",
    description:
      "Richard Dawkins’ influential book explains how evolution operates at the level of genes. He explores natural selection, cooperation, and competition from a gene’s-eye view, forever changing our understanding of biology and human nature. Full of thought-provoking ideas, it’s a must-read for anyone curious about evolution.",
    image: "../src/assets/imgs/selfish-gene.jpg",
  },
  {
    id: 117,
    title: "Silent Spring",
    price: 14.99,
    category: "Science",
    description:
      "Rachel Carson’s groundbreaking work launched the environmental movement by exposing the dangers of pesticides. Through compelling storytelling and scientific evidence, Carson changed the way we view our relationship with nature, inspiring generations to care for the environment.",
    image: "../src/assets/imgs/silent-spring.jpg",
  },
  {
    id: 118,
    title: "The Immortal Life of Henrietta Lacks",
    price: 17.99,
    category: "Science",
    description:
      "Rebecca Skloot tells the true story of Henrietta Lacks, whose cancer cells were taken without consent and became the foundation for countless medical breakthroughs. The book weaves science, ethics, and family history, shedding light on the human side of medical research.",
    image: "../src/assets/imgs/henrietta-lacks.jpg",
  },
  {
    id: 119,
    title: "The Emperor of All Maladies: A Biography of Cancer",
    price: 21.99,
    category: "Science",
    description:
      "Siddhartha Mukherjee traces the history of cancer, from its first documented appearances to modern treatments. Blending scientific insight, personal stories, and historical context, Mukherjee crafts a compelling biography of one of humanity’s greatest medical challenges.",
    image: "../src/assets/imgs/emperor-maladies.jpg",
  },

  {
    id: 121,
    title: "How Not to Die",
    price: 21.99,
    category: "Health",
    description:
      "Dr. Michael Greger explores the science behind nutrition and lifestyle choices that can prevent and even reverse disease. Drawing on hundreds of clinical studies, he provides practical advice on how to use diet to lower your risk for chronic illnesses like heart disease, diabetes, and cancer. The book includes daily checklists and recipes, empowering readers to take control of their health with simple, evidence-based habits.",
    image: "../src/assets/imgs/how-not-to-die.jpg",
  },
  {
    id: 122,
    title: "The Blue Zones Solution",
    price: 18.99,
    category: "Health",
    description:
      "Dan Buettner investigates the world’s healthiest communities—where people live the longest and happiest lives. He reveals the secrets behind their diets, routines, and social connections, and explains how you can apply their strategies for longevity and wellness. The book features recipes, lifestyle tips, and inspiring success stories.",
    image: "../src/assets/imgs/blue-zones-solution.jpg",
  },
  {
    id: 123,
    title: "Born to Run",
    price: 17.99,
    category: "Health",
    description:
      "Christopher McDougall tells the story of the Tarahumara Indians, legendary for their long-distance running abilities and unique approach to fitness. Combining adventure, anthropology, and sports science, the book explores how running is tied to human health and happiness. It’s an inspiring read for anyone interested in exercise, endurance, and the mind-body connection.",
    image: "../src/assets/imgs/born-to-run.jpg",
  },
  {
    id: 124,
    title: "Why Zebras Don’t Get Ulcers",
    price: 16.99,
    category: "Health",
    description:
      "Robert Sapolsky breaks down the complex science of stress and its effects on the body. With humor and clarity, he explores why chronic stress can cause health problems and offers practical strategies for managing stress in the modern world. The book combines biology, psychology, and real-life anecdotes to help readers live healthier, more balanced lives.",
    image: "../src/assets/imgs/zebras-dont-get-ulcers.jpg",
  },
  {
    id: 125,
    title: "Spark: The Revolutionary New Science of Exercise and the Brain",
    price: 15.99,
    category: "Health",
    description:
      "John J. Ratey reveals the incredible connection between physical activity and brain function. Citing groundbreaking research, he demonstrates how exercise can boost mood, memory, and learning while reducing anxiety, depression, and the risk of cognitive decline. This book is essential reading for anyone seeking to optimize both mind and body.",
    image: "../src/assets/imgs/spark-exercise-brain.jpg",
  },
  {
    id: 126,
    title: "In Defense of Food: An Eater’s Manifesto",
    price: 14.99,
    category: "Health",
    description:
      "Michael Pollan challenges modern eating habits and offers a simple, science-based approach to nutrition: 'Eat food. Not too much. Mostly plants.' He explores the impact of processed foods and provides practical advice for making healthier choices at the grocery store and the dinner table. The book empowers readers to reconnect with real food for lasting health benefits.",
    image: "../src/assets/imgs/in-defense-of-food.jpg",
  },
  {
    id: 127,
    title: "The Omnivore’s Dilemma",
    price: 18.99,
    category: "Health",
    description:
      "Michael Pollan traces four different food chains—from industrial farming to organic and foraged food—exploring how what we eat affects our health, the environment, and society. With investigative journalism and personal narrative, Pollan helps readers make informed choices for both wellness and sustainability.",
    image: "../src/assets/imgs/omnivores-dilemma.jpg",
  },
  {
    id: 128,
    title: "The Mind-Gut Connection",
    price: 15.99,
    category: "Health",
    description:
      "Emeran Mayer, MD, explores the powerful relationship between the digestive system and the brain. Combining neuroscience, nutrition, and patient stories, the book explains how gut health influences mood, immunity, and overall well-being. Mayer offers actionable tips for maintaining a healthy gut and harnessing its impact on your health.",
    image: "../src/assets/imgs/mind-gut-connection.jpg",
  },

  {
    id: 130,
    title: "The Longevity Diet",
    price: 17.99,
    category: "Health",
    description:
      "Dr. Valter Longo presents a scientifically-backed program for extending life and maintaining health. Based on decades of research on nutrition, fasting, and genetics, the book offers meal plans and lifestyle tips that promote cellular repair, weight loss, and disease prevention. It’s a comprehensive guide to living longer and healthier.",
    image: "../src/assets/imgs/longevity-diet.jpg",
  },

  {
    id: 131,
    title: "The Republic",
    price: 20.99,
    category: "Philosophy",
    description:
      "Plato’s The Republic is one of the foundational texts of Western philosophy. Through a compelling dialogue led by Socrates, Plato explores justice, the ideal state, the nature of reality, and the pursuit of knowledge. The book’s discussions on ethics, education, and governance continue to inspire debate and shape philosophical thought today.",
    image: "../src/assets/imgs/the-republic.jpg",
  },
  {
    id: 132,
    title: "Beyond Good and Evil",
    price: 17.99,
    category: "Philosophy",
    description:
      "Friedrich Nietzsche’s Beyond Good and Evil challenges traditional notions of morality and truth. With provocative insights and sharp critique, Nietzsche questions the assumptions underlying Western thought and encourages readers to embrace individuality, creativity, and the will to power. This book is essential for anyone interested in existentialism and modern philosophy.",
    image: "../src/assets/imgs/beyond-good-evil.jpg",
  },
  {
    id: 133,
    title: "Meditations on First Philosophy",
    price: 16.99,
    category: "Philosophy",
    description:
      "René Descartes’ Meditations on First Philosophy is a cornerstone of rationalist thought. In this work, Descartes examines doubt, knowledge, the existence of God, and the separation of mind and body. Through clear and systematic reasoning, Descartes sets the stage for centuries of philosophical exploration.",
    image: "../src/assets/imgs/meditations-first-philosophy.jpg",
  },
  {
    id: 134,
    title: "The Art of War",
    price: 15.99,
    category: "Philosophy",
    description:
      "Sun Tzu’s The Art of War is an ancient treatise on strategy, leadership, and human nature. Though rooted in military tactics, its lessons on discipline, adaptability, and the psychology of conflict have influenced business, sports, and politics worldwide. The book’s concise wisdom remains relevant for making thoughtful decisions in all areas of life.",
    image: "../src/assets/imgs/art-of-war.jpg",
  },
  {
    id: 135,
    title: "Nicomachean Ethics",
    price: 18.99,
    category: "Philosophy",
    description:
      "Aristotle’s Nicomachean Ethics explores the nature of happiness, virtue, and the good life. By analyzing human behavior, moral responsibility, and the cultivation of character, Aristotle offers a blueprint for ethical living that remains influential in philosophy, psychology, and education.",
    image: "../src/assets/imgs/nicomachean-ethics.jpg",
  },
  {
    id: 136,
    title: "Being and Time",
    price: 22.99,
    category: "Philosophy",
    description:
      "Martin Heidegger’s Being and Time is a groundbreaking examination of existence, time, and the meaning of being. Through dense and original analysis, Heidegger explores human consciousness, authenticity, and the structures of experience, laying the foundation for existentialist and phenomenological thought.",
    image: "../src/assets/imgs/being-and-time.jpg",
  },
  {
    id: 137,
    title: "The Tao Te Ching",
    price: 14.99,
    category: "Philosophy",
    description:
      "Laozi’s Tao Te Ching is a poetic guide to wisdom, balance, and living in harmony with the natural world. This classic work offers timeless insights on leadership, humility, and the paradoxes of existence, encouraging readers to embrace simplicity and flow with the rhythms of life.",
    image: "../src/assets/imgs/tao-te-ching.jpg",
  },
  {
    id: 138,
    title: "Critique of Pure Reason",
    price: 23.99,
    category: "Philosophy",
    description:
      "Immanuel Kant’s Critique of Pure Reason is a monumental work that explores how we perceive and understand the world. Kant investigates the limits of knowledge, the relationship between reason and experience, and the foundations of metaphysics. The book has shaped the trajectory of Western philosophy and is essential reading for serious students of the field.",
    image: "../src/assets/imgs/critique-pure-reason.jpg",
  },
  {
    id: 139,
    title: "The Myth of Sisyphus",
    price: 15.99,
    category: "Philosophy",
    description:
      "Albert Camus’ The Myth of Sisyphus confronts the absurdity of existence and the search for meaning. Through powerful essays, Camus explores themes of alienation, hope, and rebellion, inviting readers to find value and freedom in a world without clear purpose. The book is a cornerstone of existentialist literature.",
    image: "../src/assets/imgs/myth-sisyphus.jpg",
  },
  {
    id: 140,
    title: "The Prince",
    price: 19.99,
    category: "Philosophy",
    description:
      "Niccolò Machiavelli’s The Prince is a classic study of power, politics, and human nature. Written as a guide for rulers, the book examines how to achieve and maintain authority, often challenging moral conventions. Machiavelli’s candid and sometimes controversial advice has made The Prince a foundational text in political philosophy and realpolitik.",
    image: "../src/assets/imgs/the-prince.jpg",
  },
  {
    id: 141,
    title: "Leadershift: The 11 Essential Changes Every Leader Must Embrace",
    price: 20.99,
    category: "Leadership",
    description:
      "John C. Maxwell reveals how great leaders adapt and thrive in an ever-changing world. Drawing from decades of experience, Maxwell outlines the key shifts in mindset and strategy that drive growth and innovation. The book is packed with actionable insights and real-world examples to help leaders at every level stay agile and effective.",
    image: "../src/assets/imgs/leadershift.jpg",
  },
  {
    id: 142,
    title: "Extreme Ownership: How U.S. Navy SEALs Lead and Win",
    price: 22.99,
    category: "Leadership",
    description:
      "Jocko Willink and Leif Babin share powerful lessons in leadership learned on the battlefield. The authors explain how taking complete responsibility for decisions and outcomes empowers teams to succeed. With gripping stories and practical principles, this book is a must-read for anyone seeking to lead with courage and clarity.",
    image: "../src/assets/imgs/extreme-ownership.jpg",
  },
  {
    id: 143,
    title: "Leaders Eat Last: Why Some Teams Pull Together and Others Don’t",
    price: 18.99,
    category: "Leadership",
    description:
      "Simon Sinek explores the qualities that set great leaders apart and inspire loyalty and trust. By putting the needs of others first, leaders can create safe and high-performing organizations. Drawing on research and real-life examples, Sinek shows how empathy, integrity, and vision drive team success.",
    image: "../src/assets/imgs/leaders-eat-last-2.jpg",
  },
  {
    id: 144,
    title: "Dare to Lead: Brave Work. Tough Conversations. Whole Hearts.",
    price: 19.99,
    category: "Leadership",
    description:
      "Brené Brown draws on her research into vulnerability, courage, and empathy to present a new model for leadership. The book offers practical tools for building trust, fostering innovation, and handling difficult conversations. Brown’s inspiring message empowers readers to lead with authenticity and heart.",
    image: "../src/assets/imgs/dare-to-lead.jpg",
  },
  {
    id: 145,
    title: "The 21 Irrefutable Laws of Leadership",
    price: 16.99,
    category: "Leadership",
    description:
      "John C. Maxwell distills decades of leadership wisdom into 21 clear, actionable laws. From developing influence and vision to empowering others, each law is illustrated with memorable stories and practical guidance. This classic resource helps aspiring and experienced leaders grow their skills and impact.",
    image: "../src/assets/imgs/21-laws-leadership.jpg",
  },

  {
    id: 147,
    title: "Good Leaders Ask Great Questions",
    price: 15.99,
    category: "Leadership",
    description:
      "John C. Maxwell emphasizes the power of asking the right questions to spark growth, foster relationships, and solve problems. The book provides hundreds of questions leaders can use to challenge themselves and support their teams. Maxwell’s practical advice makes this a valuable tool for lifelong learning and leadership development.",
    image: "../src/assets/imgs/good-leaders-ask-questions.jpg",
  },
  {
    id: 148,
    title: "On Becoming a Leader",
    price: 17.99,
    category: "Leadership",
    description:
      "Warren Bennis draws on decades of research to examine what makes leaders effective and influential. Through interviews and case studies, Bennis identifies essential qualities and skills that help leaders inspire trust and navigate change. The book is both a practical manual and an inspiring meditation on the meaning of leadership.",
    image: "../src/assets/imgs/on-becoming-a-leader.jpg",
  },
  {
    id: 149,
    title:
      "Turn the Ship Around!: A True Story of Turning Followers into Leaders",
    price: 18.99,
    category: "Leadership",
    description:
      "L. David Marquet shares his experience transforming the USS Santa Fe submarine into one of the best-performing crews in the U.S. Navy. By empowering every team member to lead, Marquet shows how to unlock potential and drive innovation. The book offers actionable principles for building a culture of accountability and initiative.",
    image: "../src/assets/imgs/turn-the-ship-around.jpg",
  },
  {
    id: 150,
    title: "The Five Dysfunctions of a Team: A Leadership Fable",
    price: 19.99,
    category: "Leadership",
    description:
      "Patrick Lencioni uses a compelling story to illustrate common barriers to teamwork and effective leadership. With clear frameworks and actionable advice, the book helps leaders diagnose dysfunctions and build high-trust, results-oriented teams. It’s a must-read for anyone aiming to strengthen collaboration and organizational health.",
    image: "../src/assets/imgs/five-dysfunctions-team.jpg",
  },
  {
    id: 151,
    title:
      "Attached: The New Science of Adult Attachment and How It Can Help You Find—and Keep—Love",
    price: 18.99,
    category: "Relationships",
    description:
      "Amir Levine and Rachel Heller explore the groundbreaking science of adult attachment, offering a new framework for understanding relationships. The book presents practical advice and self-assessments to help readers recognize their attachment styles and improve romantic connections. With real-life examples, Attached is a powerful tool for building deeper trust, communication, and intimacy.",
    image: "../src/assets/imgs/attached.jpg",
  },
  {
    id: 152,
    title: "The 5 Love Languages: The Secret to Love That Lasts",
    price: 16.99,
    category: "Relationships",
    description:
      "Gary Chapman introduces the concept of love languages, revealing how people express and receive love in different ways. With clear explanations, real-life stories, and practical tips, the book guides readers to discover their partner’s language and strengthen emotional bonds. It’s a transformative resource for couples looking to create lasting connection and happiness.",
    image: "../src/assets/imgs/5-love-languages.jpg",
  },
  {
    id: 153,
    title: "Hold Me Tight: Seven Conversations for a Lifetime of Love",
    price: 20.99,
    category: "Relationships",
    description:
      "Dr. Sue Johnson, the creator of Emotionally Focused Therapy, offers a revolutionary approach to creating secure and loving relationships. The book walks couples through seven key conversations that foster emotional safety and heal old wounds. With research-based strategies and powerful stories, Hold Me Tight is an essential guide for building closeness and resilience.",
    image: "../src/assets/imgs/hold-me-tight.jpg",
  },

  {
    id: 155,
    title: "The Seven Principles for Making Marriage Work",
    price: 17.99,
    category: "Relationships",
    description:
      "Renowned marriage researcher John Gottman distills decades of research into seven actionable principles that can help couples build stronger, happier marriages. The book is full of exercises, questionnaires, and strategies for improving communication, handling conflict, and cultivating mutual respect. It’s a must-read for anyone seeking a lasting and loving relationship.",
    image: "../src/assets/imgs/seven-principles-marriage.jpg",
  },
  {
    id: 156,
    title: "Modern Romance",
    price: 15.99,
    category: "Relationships",
    description:
      "Comedian Aziz Ansari teams up with sociologist Eric Klinenberg to investigate love and dating in the digital age. Combining humor, data, and personal stories, Modern Romance explores how technology, culture, and expectations are reshaping the way we connect. The book offers a witty and insightful look at the challenges and joys of modern relationships.",
    image: "../src/assets/imgs/modern-romance.jpg",
  },
  {
    id: 157,
    title: "Mating in Captivity: Unlocking Erotic Intelligence",
    price: 18.99,
    category: "Relationships",
    description:
      "Esther Perel offers a provocative look at the tension between domesticity and desire in long-term relationships. Drawing on case studies and cross-cultural research, Perel provides fresh insights and practical suggestions for sustaining passion and intimacy. The book challenges conventional wisdom and encourages readers to rethink what it means to be truly connected.",
    image: "../src/assets/imgs/mating-in-captivity.jpg",
  },
  {
    id: 158,
    title: "Nonviolent Communication: A Language of Life",
    price: 17.99,
    category: "Relationships",
    description:
      "Marshall Rosenberg’s Nonviolent Communication presents a transformative approach to interacting with empathy and honesty. The book outlines practical techniques for expressing needs, listening deeply, and resolving conflicts without blame. It’s a powerful resource for improving relationships at home, at work, and in the community.",
    image: "../src/assets/imgs/nonviolent-communication.jpg",
  },
  {
    id: 159,
    title:
      "Passionate Marriage: Keeping Love and Intimacy Alive in Committed Relationships",
    price: 21.99,
    category: "Relationships",
    description:
      "Dr. David Schnarch explores the dynamics of intimacy, desire, and personal growth within long-term partnerships. Using real stories and exercises, Schnarch shows how couples can deepen connection and sexual satisfaction while maintaining individuality. The book is a comprehensive guide to navigating the complexities of passionate relationships.",
    image: "../src/assets/imgs/passionate-marriage.jpg",
  },
  {
    id: 160,
    title:
      "The Relationship Cure: A 5 Step Guide to Strengthening Your Marriage, Family, and Friendships",
    price: 19.99,
    category: "Relationships",
    description:
      "John Gottman and Joan DeClaire provide a practical guide to improving all kinds of relationships through better emotional communication. With actionable steps and real-world examples, the book teaches readers to recognize and respond to emotional needs, repair rifts, and build lasting bonds. It’s an invaluable toolkit for couples, families, and friends.",
    image: "../src/assets/imgs/relationship-cure.jpg",
  },
];

export default products;
