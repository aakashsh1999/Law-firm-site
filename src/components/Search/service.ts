// Mock data service for blog posts
// In a real app, this would interact with a backend API

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  coverImage?: string;
  publishedAt: string;
  tags: string[];
  readTime: number;
}

// Sample blog data
const SAMPLE_BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with React and TypeScript",
    excerpt:
      "A beginner-friendly guide to setting up your first React application with TypeScript support.",
    content: `
  # Getting Started with React and TypeScript
  
  React is a popular JavaScript library for building user interfaces, and TypeScript is a strongly typed programming language that builds on JavaScript. Combining the two can help you create more robust applications.
  
  ## Setting up your development environment
  
  First, ensure you have Node.js installed on your system. Then, you can create a new React TypeScript project using Create React App:
  
  \`\`\`bash
  npx create-react-app my-app --template typescript
  \`\`\`
  
  This command creates a new React application with TypeScript configuration already set up.
  
  ## Understanding the project structure
  
  After creating your project, you'll have a directory structure similar to this:
  
  \`\`\`
  my-app/
    ├── node_modules/
    ├── public/
    ├── src/
    │   ├── App.tsx
    │   ├── index.tsx
    │   └── ...
    ├── package.json
    ├── tsconfig.json
    └── ...
  \`\`\`
  
  The \`tsconfig.json\` file contains TypeScript-specific configurations for your project.
  
  ## Creating your first component
  
  Let's create a simple component:
  
  \`\`\`tsx
  // src/components/Greeting.tsx
  import React from 'react';
  
  interface GreetingProps {
    name: string;
  }
  
  const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
  };
  
  export default Greeting;
  \`\`\`
  
  ## Using the component
  
  Now you can import and use this component in your App:
  
  \`\`\`tsx
  // src/App.tsx
  import React from 'react';
  import Greeting from './components/Greeting';
  
  const App: React.FC = () => {
    return (
      <div className="App">
        <Greeting name="TypeScript User" />
      </div>
    );
  };
  
  export default App;
  \`\`\`
  
  ## Conclusion
  
  This is just the beginning of your journey with React and TypeScript. As you continue to learn, you'll discover how TypeScript's type system can help you catch errors early and make your code more maintainable.
      `,
    author: {
      name: "Jane Smith",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    coverImage:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    publishedAt: "2023-04-15T10:30:00Z",
    tags: ["React", "TypeScript", "Web Development"],
    readTime: 5,
  },
  {
    id: "2",
    title: "Mastering CSS Grid Layout",
    excerpt:
      "Learn how to create complex layouts easily with CSS Grid, the most powerful layout system available in CSS.",
    content: `
  # Mastering CSS Grid Layout
  
  CSS Grid Layout is a powerful tool that allows for two-dimensional layouts to be created on the web. It's one of the most robust layout systems available in CSS. Let's explore how to use it effectively.
  
  ## Basic Grid Layout
  
  To create a grid layout, you first need to set an element as a grid container:
  
  \`\`\`css
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
  \`\`\`
  
  This creates a three-column grid with equal-width columns and a 20px gap between grid items.
  
  ## Placing Items
  
  You can place items within the grid using the \`grid-column\` and \`grid-row\` properties:
  
  \`\`\`css
  .item1 {
    grid-column: 1 / 3; /* Start at column 1 and span to column 3 */
    grid-row: 1; /* Place in the first row */
  }
  
  .item2 {
    grid-column: 3; /* Place in the third column */
    grid-row: 1 / 3; /* Start at row 1 and span to row 3 */
  }
  \`\`\`
  
  ## Grid Areas
  
  For more complex layouts, you can use named grid areas:
  
  \`\`\`css
  .grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
      "header header header header"
      "sidebar main main main"
      "footer footer footer footer";
  }
  
  .header { grid-area: header; }
  .sidebar { grid-area: sidebar; }
  .main { grid-area: main; }
  .footer { grid-area: footer; }
  \`\`\`
  
  ## Responsive Grids
  
  You can create responsive layouts by using media queries and adjusting your grid properties:
  
  \`\`\`css
  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr;
      grid-template-areas: 
        "header"
        "main"
        "sidebar"
        "footer";
    }
  }
  \`\`\`
  
  ## Conclusion
  
  CSS Grid is an incredibly powerful layout tool that gives developers precise control over the positioning of elements on a webpage. With the basics covered in this article, you're ready to start creating complex, responsive layouts with ease.
      `,
    author: {
      name: "Mike Johnson",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    coverImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    publishedAt: "2023-05-20T14:15:00Z",
    tags: ["CSS", "Web Design", "Responsive Design"],
    readTime: 7,
  },
  {
    id: "3",
    title: "State Management in Modern React Applications",
    excerpt:
      "Explore different approaches to managing state in React applications, from Context API to Redux and beyond.",
    content: `
  # State Management in Modern React Applications
  
  As React applications grow in complexity, managing state becomes increasingly challenging. This article explores various state management approaches in modern React applications.
  
  ## Local Component State
  
  For simple components, React's built-in \`useState\` hook is often sufficient:
  
  \`\`\`jsx
  import React, { useState } from 'react';
  
  function Counter() {
    const [count, setCount] = useState(0);
    
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  \`\`\`
  
  ## React Context API
  
  For sharing state between components without prop drilling, the Context API is a good solution:
  
  \`\`\`jsx
  // Create a context
  const ThemeContext = React.createContext('light');
  
  // Provider component
  function App() {
    const [theme, setTheme] = useState('light');
    
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <MainContent />
      </ThemeContext.Provider>
    );
  }
  
  // Consumer component
  function ThemedButton() {
    const { theme, setTheme } = useContext(ThemeContext);
    
    return (
      <button 
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        style={{ background: theme === 'light' ? '#fff' : '#333' }}
      >
        Toggle Theme
      </button>
    );
  }
  \`\`\`
  
  ## Redux
  
  For large applications with complex state, Redux provides a predictable state container:
  
  \`\`\`jsx
  // Action types
  const INCREMENT = 'INCREMENT';
  const DECREMENT = 'DECREMENT';
  
  // Reducer
  function counterReducer(state = { count: 0 }, action) {
    switch (action.type) {
      case INCREMENT:
        return { count: state.count + 1 };
      case DECREMENT:
        return { count: state.count - 1 };
      default:
        return state;
    }
  }
  
  // Store
  import { createStore } from 'redux';
  const store = createStore(counterReducer);
  
  // Component with Redux
  import { useSelector, useDispatch } from 'react-redux';
  
  function Counter() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
        <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
      </div>
    );
  }
  \`\`\`
  
  ## Zustand
  
  Zustand is a small, fast state-management solution:
  
  \`\`\`jsx
  import create from 'zustand';
  
  const useStore = create(set => ({
    count: 0,
    increment: () => set(state => ({ count: state.count + 1 })),
    decrement: () => set(state => ({ count: state.count - 1 })),
  }));
  
  function Counter() {
    const { count, increment, decrement } = useStore();
    
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
  \`\`\`
  
  ## Conclusion
  
  Choosing the right state management solution depends on your application's complexity and team preferences. For small to medium applications, React's built-in state management with hooks and Context API often suffices. For larger applications, consider solutions like Redux, Recoil, or Zustand.
      `,
    author: {
      name: "Sarah Parker",
      avatar:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    coverImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    publishedAt: "2023-06-05T09:45:00Z",
    tags: ["React", "JavaScript", "State Management"],
    readTime: 10,
  },
];

export const getBlogPosts = (): Promise<BlogPost[]> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(SAMPLE_BLOG_POSTS);
    }, 500);
  });
};

export const getBlogPostById = (id: string): Promise<BlogPost | undefined> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = SAMPLE_BLOG_POSTS.find((post) => post.id === id);
      resolve(post);
    }, 300);
  });
};

export const saveBlogPost = (
  post: Omit<BlogPost, "id" | "publishedAt" | "readTime">
): Promise<BlogPost> => {
  // Simulate API call to save a new blog post
  return new Promise((resolve) => {
    setTimeout(() => {
      const newPost: BlogPost = {
        ...post,
        id: Date.now().toString(),
        publishedAt: new Date().toISOString(),
        readTime: calculateReadTime(post.content),
      };
      // In a real app, we would persist this data
      resolve(newPost);
    }, 800);
  });
};

// Helper function to estimate read time
const calculateReadTime = (content: string): number => {
  const wordsPerMinute = 200;
  const numberOfWords = content.split(/\s/g).length;
  return Math.ceil(numberOfWords / wordsPerMinute);
};
