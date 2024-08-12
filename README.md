# Roodkapje Parallax Project

## Project Overview

This project is a modern reimagining of the classic fairy tale "Roodkapje" (Red Riding Hood), utilizing cutting-edge web development techniques to create an immersive, interactive experience. The project was built using React, with various libraries and tools to enhance the storytelling experience.

The aim was to combine traditional storytelling with advanced animations and 3D elements to engage users in a unique way.

## Installation Instructions

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ehb-mct/frontend-courseproject-Zani10.git
2. **Navigate to the project directory:**
   ```bash
   cd frontend-courseproject-Zani10
3. **Install the dependencies:**
   ```bash
   npm install
4. **Run the project:**
   ```bash
   npm start
The project will open in your default web browser at http://localhost:3000.

## Technologies Used
React: A JavaScript library for building user interfaces. We used React for its component-based architecture, making the project modular and easier to manage.

Framer Motion: A library for creating animations in React. It allowed us to implement complex animations such as fades, slides, and staggered sequences, enhancing the visual appeal of the story.

React-Spring Parallax: This library was used to create the parallax scrolling effect, adding depth to the scenes. It enabled different elements to move at varying speeds as the user scrolls, making the experience more immersive.

Three.js: A JavaScript library for creating 3D graphics. We used Three.js to add 3D models, allowing characters like the wolf and Red Riding Hood to interact in a three-dimensional space.

Intersection Observer API: This API was used to trigger animations as the user scrolls through the story. It helps optimize performance by animating elements only when they come into view.

Custom CSS Styling: We developed custom CSS to match the dark and mysterious theme of the Red Riding Hood story, using consistent colors and typography to create an immersive atmosphere.

## Project Documentation
### **React Hooks**
We used React Hooks like `useState`, `useEffect`, and `useRef` to manage the component's state, lifecycle, and DOM references without needing class components. This allowed us to create dynamic and interactive elements in the parallax story efficiently.
https://www.w3schools.com/REACT/react_customhooks.asp
https://www.youtube.com/watch?v=LlvBzyy-558
https://chatgpt.com/

### **React Router**
React Router enabled us to handle navigation within the application, allowing users to seamlessly transition between different parts of the story or other sections like "Making Of." It also allowed for deep linking, so users could share specific parts of the experience.
https://www.w3schools.com/react/react_router.asp
https://youtu.be/U7oPfhHAzLc?si=fSwrXAtnsQcSVHzH

### **Framer Motion**
Framer Motion was essential for implementing advanced animations such as fading in components, sliding effects, and staggered animations. It provided a declarative way to control the timing and sequence of animations, which was crucial for synchronizing them with the storyline.
https://www.youtube.com/watch?v=2V1WK-3HQNk&list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i
https://www.framer.com/motion/
https://youtu.be/31y7-k3ZG0g
https://youtu.be/Ojk-x-uAyIE
https://chatgpt.com/

### **React-Spring Parallax**
React-Spring's parallax feature was used to create a 3D scrolling effect that added depth to the scenes. This technique made the user experience more immersive by allowing different layers to move at varying speeds during scroll.
https://www.react-spring.dev/docs/components/parallax
https://medium.com/@maxnmcbride/using-react-spring-to-create-parallax-effect-d4ef81f30347
https://youtu.be/jeSPvDI-IJw?si=mCB0lfACxuOPX8n7
https://youtu.be/UgIwjLg4ONk?si=vShdPo4t7LC9NM7J
https://youtu.be/29UWA-GdA7k?si=dYganoFeS4aIPHOQ
https://youtu.be/E5NK61vO_sg?si=MlEugCARYeE5rMIB
https://chatgpt.com/

### **Three.js**
Three.js allowed us to incorporate 3D models into the story. We used it to add interactive characters and objects, providing users with a more engaging and visually interesting experience by enabling them to rotate and interact with the models.
https://threejs.org/
https://youtu.be/KM64t3pA4fs?si=-2ys-nvCdPmg8kvZ
https://youtu.be/Q7AOvWpIVHU?si=HDDXRymSUs4JAaBk
https://youtu.be/Q7AOvWpIVHU?si=JN97Gj0Tiv2kObrD

### **Intersection Observer API**
The Intersection Observer API was used to trigger animations as elements came into view, optimizing performance by animating only visible elements. It also played a role in lazy loading images and assets, ensuring that the page remained responsive.
https://chatgpt.com/

### **Vite**
Vite was chosen as the build tool due to its fast development server and optimized build process. Vite allowed us to develop the project with quick feedback loops and efficient bundling for production.

### **gh-pages Package**
The `gh-pages` npm package was used to automate the deployment process to GitHub Pages. It simplified the deployment by handling the necessary Git operations to push the build directory to the `gh-pages` branch.


## Challenges and Solutions
One of the main challenges we faced was ensuring smooth performance while handling complex animations and 3D models. We addressed this by optimizing our use of the Intersection Observer API for lazy loading and selectively triggering animations.

Another challenge was managing the depth of elements in the parallax scenes. React-Spring Parallax allowed us to finely tune the movement of elements, ensuring a cohesive and immersive experience.

## Conclusion
The Red Riding Hood parallax project exemplifies the fusion of traditional storytelling with modern web technology. Through the use of React, Framer Motion, Three.js, and other advanced tools, we’ve crafted an interactive, visually captivating retelling of a classic tale. This project demonstrates the potential of web development to transform storytelling into an engaging and participatory experience.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
