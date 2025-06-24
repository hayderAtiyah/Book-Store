const products = [
  {
    id: 1,
    title: "Learning React: Modern Patterns for Developing React Apps",
    price: 34.99,
    category: "Programming",
    description:
      "A hands-on guide to mastering React. Covers hooks, state management, component patterns, and more.",
    image: "../src/assets/imgs/Learning-React.jpg",
  },
  {
    id: 2,
    title: "JavaScript: The Good Parts",
    price: 29.99,
    category: "Programming",
    description:
      "Classic book by Douglas Crockford highlighting the core, elegant parts of JavaScript.",
    image: "../src/assets/imgs/js-the-good-parts.jpg",
  },
  {
    id: 3,
    title: "You Don’t Know JS Yet (Book Series)",
    price: 49.99,
    category: "Programming",
    description:
      "A deep dive into JavaScript's mechanics. Best for understanding the language in detail.",
    image: "../src/assets/imgs/you-dont-know-js.jpg",
  },
  {
    id: 4,
    title: "Eloquent JavaScript, 3rd Edition",
    price: 39.99,
    category: "Programming",
    description:
      "A modern introduction to programming using JavaScript. Includes projects and exercises.",
    image: "../src/assets/imgs/eloquent-js.jpg",
  },
  {
    id: 5,
    title: "Programming TypeScript",
    price: 37.99,
    category: "Programming",
    description:
      "The ultimate guide to mastering TypeScript for building scalable applications.",
    image: "../src/assets/imgs/programming-typescript.jpg",
  },
  {
    id: 6,
    title: "The Pragmatic Programmer: Your Journey to Mastery",
    price: 42.99,
    category: "Career/Improvement",
    description:
      "Timeless advice for developers on best practices, mindset, and software craftsmanship.",
    image: "../src/assets/imgs/pragmatic-programmer.jpg",
  },
  {
    id: 7,
    title: "Atomic Habits",
    price: 27.99,
    category: "Self-Improvement",
    description:
      "Bestseller by James Clear on building good habits and breaking bad ones.",
    image: "../src/assets/imgs/atomic-habits.jpg",
  },
  {
    id: 8,
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    price: 25.99,
    category: "Self-Improvement",
    description:
      "Cal Newport shares strategies for deep, focused work and avoiding distractions.",
    image: "../src/assets/imgs/deep-work.jpg",
  },
  {
    id: 9,
    title: "The 7 Habits of Highly Effective People",
    price: 30.0,
    category: "Self-Improvement",
    description:
      "Stephen Covey’s classic framework for personal and professional effectiveness.",
    image: "../src/assets/imgs/7-habits.jpg",
  },
  {
    id: 10,
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    price: 44.99,
    category: "Programming",
    description:
      "Robert C. Martin’s must-read on writing readable, maintainable code.",
    image: "../src/assets/imgs/clean-code.jpg",
  },
  {
    id: 11,
    title: "Refactoring UI: The Book",
    price: 54.99,
    category: "Design",
    description:
      "Design advice for developers—make your apps look and feel amazing.",
    image: "../src/assets/imgs/refactoring-ui.jpg",
  },
  {
    id: 12,
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    price: 57.99,
    category: "Programming",
    description:
      "The 'Gang of Four' book—a classic on design patterns in software development.",
    image: "../src/assets/imgs/design-patterns.jpg",
  },
  {
    id: 13,
    title: "Can't Hurt Me: Master Your Mind and Defy the Odds",
    price: 21.99,
    category: "Self-Improvement",
    description:
      "David Goggins’ story and lessons for building mental strength and resilience.",
    image: "../src/assets/imgs/cant-hurt-me.jpg",
  },
  {
    id: 14,
    title: "React Up and Running: Building Web Applications",
    price: 36.99,
    category: "Programming",
    description:
      "A practical guide to quickly get started with React and build real-world apps.",
    image: "../src/assets/imgs/react-up-and-running.jpg",
  },
  {
    id: 15,
    title: "Cracking the Coding Interview",
    price: 39.99,
    category: "Career/Improvement",
    description:
      "Over 150 programming questions and solutions to ace your coding interviews.",
    image: "../src/assets/imgs/cracking-the-coding-interview.jpg",
  },
  {
    id: 16,
    title: "The Subtle Art of Not Giving a F*ck",
    price: 22.99,
    category: "Self-Improvement",
    description:
      "Mark Manson’s guide to living a meaningful, less stressful life.",
    image: "../src/assets/imgs/subtle-art.jpg",
  },
  {
    id: 17,
    title: "TypeScript Quickly",
    price: 34.99,
    category: "Programming",
    description:
      "Beginner-friendly guide to TypeScript with real projects and practical tips.",
    image: "../src/assets/imgs/typescript-quickly.jpg",
  },
  {
    id: 18,
    title: "The Lean Startup",
    price: 24.99,
    category: "Business/Improvement",
    description:
      "Eric Ries’ essential book for entrepreneurs building successful startups.",
    image: "../src/assets/imgs/lean-startup.jpg",
  },
  {
    id: 19,
    title: "Essentialism: The Disciplined Pursuit of Less",
    price: 23.99,
    category: "Self-Improvement",
    description:
      "Greg McKeown’s roadmap to focusing on what matters most in life and work.",
    image: "../src/assets/imgs/essentialism.jpg",
  },
  {
    id: 20,
    title: "Show Your Work!",
    price: 19.99,
    category: "Creativity",
    description:
      "Austin Kleon teaches you how to promote your work and get discovered.",
    image: "../src/assets/imgs/show-your-work.jpg",
  },
  {
    id: 21,
    title: "Getting Things Done: The Art of Stress-Free Productivity",
    price: 28.99,
    category: "Productivity",
    description:
      "David Allen’s proven methods to boost productivity and get organized.",
    image: "../src/assets/imgs/getting-things-done.jpg",
  },
  {
    id: 22,
    title: "Drive: The Surprising Truth About What Motivates Us",
    price: 24.99,
    category: "Motivation",
    description:
      "Daniel H. Pink uncovers what truly motivates people in life and work.",
    image: "../src/assets/imgs/drive.jpg",
  },
  {
    id: 23,
    title: "Rich Dad Poor Dad",
    price: 19.99,
    category: "Finance",
    description:
      "Robert Kiyosaki’s lessons on money, investing, and building wealth.",
    image: "../src/assets/imgs/rich-dad-poor-dad.jpg",
  },
  {
    id: 24,
    title: "A Brief History of Time",
    price: 18.99,
    category: "Science",
    description:
      "Stephen Hawking’s exploration of the universe and the nature of time.",
    image: "../src/assets/imgs/brief-history-of-time.jpg",
  },
  {
    id: 25,
    title: "Why We Sleep: Unlocking the Power of Sleep and Dreams",
    price: 26.99,
    category: "Health",
    description:
      "Matthew Walker explains the importance of sleep for your health and brain.",
    image: "../src/assets/imgs/why-we-sleep.jpg",
  },
  {
    id: 26,
    title: "Meditations",
    price: 15.99,
    category: "Philosophy",
    description:
      "The timeless wisdom of Roman Emperor Marcus Aurelius on life and resilience.",
    image: "../src/assets/imgs/meditations.jpg",
  },
  {
    id: 27,
    title: "Leaders Eat Last",
    price: 29.99,
    category: "Leadership",
    description:
      "Simon Sinek on building teams and becoming a leader people trust.",
    image: "../src/assets/imgs/leaders-eat-last.jpg",
  },
  {
    id: 28,
    title: "How to Win Friends and Influence People",
    price: 16.99,
    category: "Communication",
    description:
      "Dale Carnegie’s classic tips for building better relationships and influence.",
    image: "../src/assets/imgs/how-to-win-friends.jpg",
  },
  {
    id: 29,
    title: "Steal Like an Artist",
    price: 14.99,
    category: "Creativity",
    description:
      "Austin Kleon’s guide to unlocking your creativity and finding inspiration.",
    image: "../src/assets/imgs/steal-like-an-artist.jpg",
  },
  {
    id: 30,
    title: "Sapiens: A Brief History of Humankind",
    price: 21.99,
    category: "History",
    description:
      "Yuval Noah Harari explains the rise of humans and the story of civilization.",
    image: "../src/assets/imgs/sapiens.jpg",
  },
  {
    id: 31,
    title: "Thinking, Fast and Slow",
    price: 24.99,
    category: "Psychology",
    description:
      "Daniel Kahneman explores the two systems that shape human decision-making.",
    image: "../src/assets/imgs/thinking-fast-and-slow.jpg",
  },
  {
    id: 32,
    title: "Mindset: The New Psychology of Success",
    price: 22.99,
    category: "Education",
    description:
      "Carol Dweck shows how having a growth mindset leads to success in school, work, and life.",
    image: "../src/assets/imgs/mindset.jpg",
  },
  {
    id: 33,
    title: "Men Are from Mars, Women Are from Venus",
    price: 18.99,
    category: "Relationships",
    description:
      "John Gray explores the differences between men and women in relationships.",
    image: "../src/assets/imgs/men-mars-women-venus.jpg",
  },
  {
    id: 34,
    title: "The Lean Entrepreneur",
    price: 27.99,
    category: "Entrepreneurship",
    description:
      "Brant Cooper and Patrick Vlaskovits on building products people love quickly.",
    image: "../src/assets/imgs/lean-entrepreneur.jpg",
  },
  {
    id: 35,
    title: "Becoming",
    price: 20.99,
    category: "Biography",
    description:
      "Michelle Obama’s bestselling memoir about her life, values, and the White House.",
    image: "../src/assets/imgs/becoming.jpg",
  },
  {
    id: 36,
    title: "Salt, Fat, Acid, Heat",
    price: 29.99,
    category: "Cooking",
    description:
      "Samin Nosrat shares the four elements that make every meal delicious.",
    image: "../src/assets/imgs/salt-fat-acid-heat.jpg",
  },
  {
    id: 37,
    title: "The 4-Hour Body",
    price: 25.99,
    category: "Fitness",
    description:
      "Tim Ferriss experiments with diet, exercise, and sleep to maximize fitness.",
    image: "../src/assets/imgs/4-hour-body.jpg",
  },
  {
    id: 38,
    title: "Drawing on the Right Side of the Brain",
    price: 17.99,
    category: "Art",
    description:
      "Betty Edwards teaches practical exercises to unlock your creative potential.",
    image: "../src/assets/imgs/drawing-on-right-side.jpg",
  },
  {
    id: 39,
    title: "Influence: The Psychology of Persuasion",
    price: 22.99,
    category: "Marketing",
    description:
      "Robert Cialdini reveals the secrets behind the science of persuasion.",
    image: "../src/assets/imgs/influence.jpg",
  },
  {
    id: 40,
    title: "Wherever You Go, There You Are",
    price: 19.99,
    category: "Mindfulness",
    description:
      "Jon Kabat-Zinn introduces the power of mindfulness in everyday life.",
    image: "../src/assets/imgs/wherever-you-go.jpg",
  },
  {
    id: 41,
    title: "Strength Training Anatomy",
    price: 32.99,
    category: "Gym",
    description:
      "Detailed illustrations of muscles in action for strength exercises.",
    image: "../src/assets/imgs/strength-training-anatomy.jpg",
  },
  {
    id: 42,
    title: "Bigger Leaner Stronger",
    price: 24.99,
    category: "Gym",
    description:
      "Michael Matthews’ bestselling guide to building muscle and losing fat.",
    image: "../src/assets/imgs/bigger-leaner-stronger.jpg",
  },
  {
    id: 43,
    title: "Starting Strength: Basic Barbell Training",
    price: 29.99,
    category: "Gym",
    description: "Mark Rippetoe’s classic on safe, effective barbell lifting.",
    image: "../src/assets/imgs/starting-strength.jpg",
  },
  {
    id: 44,
    title: "The New Encyclopedia of Modern Bodybuilding",
    price: 34.99,
    category: "Gym",
    description:
      "Arnold Schwarzenegger’s all-in-one reference for bodybuilders.",
    image: "../src/assets/imgs/bodybuilding-encyclopedia.jpg",
  },
  {
    id: 45,
    title: "The Men’s Fitness Exercise Bible",
    price: 22.99,
    category: "Gym",
    description: "101 exercises for every muscle and goal by Sean Hyson.",
    image: "../src/assets/imgs/mens-fitness-exercise-bible.jpg",
  },
  {
    id: 46,
    title: "Convict Conditioning",
    price: 19.99,
    category: "Gym",
    description:
      "Bodyweight training secrets from the world’s most hardcore prisons.",
    image: "../src/assets/imgs/convict-conditioning.jpg",
  },
  {
    id: 47,
    title: "The Women’s Health Big Book of Exercises",
    price: 27.99,
    category: "Gym",
    description: "Full-body exercises and routines tailored for women.",
    image: "../src/assets/imgs/womens-health-big-book.jpg",
  },
  {
    id: 48,
    title: "Thinner Leaner Stronger",
    price: 24.99,
    category: "Gym",
    description:
      "A women’s guide to strength training and nutrition by Michael Matthews.",
    image: "../src/assets/imgs/thinner-leaner-stronger.jpg",
  },
  {
    id: 49,
    title: "The One-Minute Workout",
    price: 21.99,
    category: "Gym",
    description:
      "Fast, science-backed routines for busy people by Martin Gibala.",
    image: "../src/assets/imgs/one-minute-workout.jpg",
  },
  {
    id: 50,
    title: "Bodyweight Strength Training Anatomy",
    price: 25.99,
    category: "Gym",
    description:
      "Learn bodyweight moves with anatomy illustrations by Bret Contreras.",
    image: "../src/assets/imgs/bodyweight-anatomy.jpg",
  },
];

export default products;
