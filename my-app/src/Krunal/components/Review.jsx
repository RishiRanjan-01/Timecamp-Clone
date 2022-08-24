// import React from 'react'
// import {
//   Box,
//   Container,
//   Stack,
//   SimpleGrid,
//   Flex,
//   Text,
//   Link,
// } from '@chakra-ui/react';
// import TrackVisibility from 'react-on-screen';



//   const projects = [
//     {
//       title: "Fabelley Clone",
//       description: "Best Female shopping site",
//       imgUrl: projImg1,
//       git: "https://github.com/Rgond1/faballey",
//       url: "https://candid-pie-1843a0.netlify.app/",
//     },
//     {
//       title: "Bluefly clone",
//       description: "Ecommerce website for fashion lovers",
//       imgUrl: projImg2,
//       git: "https://github.com/optimizershivam/Bluefly-webapp",
//       url: "https://stunning-stroopwafel-8b6ace.netlify.app/",
//     },
//     {
//       title: "Spotify Clone",
//       description: "Listen to music for free",
//       imgUrl: projImg3,
//       git: "https://github.com/Rohit24-code/spotify-clone",
//       url: "https://reliable-sawine-d325a7.netlify.app/",
//     },
//   ];

//   const projects2 = [
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg1,
//       git: "https://github.com/Rgond1/faballey",
//       url: "https://candid-pie-1843a0.netlify.app/",
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//       git: "https://github.com/Rgond1/faballey",
//       url: "https://candid-pie-1843a0.netlify.app/",
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//       git: "https://github.com/Rgond1/faballey",
//       url: "https://reliable-sawine-d325a7.netlify.app/",
//     },
//   ];

// const Review = () => {
//   return (
//       <section className="project" id="project">
//       <Container>
//         <Flex>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div
//                   className={
//                     isVisible ? "animate__animated animate__fadeIn" : ""
//                   }
//                 >
//                   <h2>Projects</h2>
//                   <p>Some of my Projects </p>
//                   <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                     <Nav
//                       variant="pills"
//                       className="nav-pills mb-5 justify-content-center align-items-center"
//                       id="pills-tab"
//                     >
//                       <Nav.Item>
//                         <Nav.Link eventKey="first">Tab 1</Nav.Link>
//                       </Nav.Item>
//                       <Nav.Item>
//                         <Nav.Link eventKey="second">Tab 2</Nav.Link>
//                       </Nav.Item>
//                       <Nav.Item>
//                         <Nav.Link eventKey="third">Tab 3</Nav.Link>
//                       </Nav.Item>
//                     </Nav>
//                     <Tab.Content
//                       id="slideInUp"
//                       className={
//                         isVisible ? "animate__animated animate__slideInUp" : ""
//                       }
//                     >
//                       <Tab.Pane eventKey="first">
//                         <Row>
//                           {projects2.map((project, index) => {
//                             return <ProjectCard key={index} {...project} />;
//                           })}
//                         </Row>
//                       </Tab.Pane>
//                       <Tab.Pane eventKey="second">
//                         <Row>
//                           {projects.map((project, index) => {
//                             return <ProjectCard key={index} {...project} />;
//                           })}
//                         </Row>
//                       </Tab.Pane>
//                       <Tab.Pane eventKey="third">
//                         <p>
//                          Added this tab as too excited to add more projects
//                         </p>
//                       </Tab.Pane>
//                     </Tab.Content>
//                   </Tab.Container>
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//         </Flex>
//       </Container>
//       <img className="background-image-right" src={colorSharp2}></img>
//     </section>
//   )
// }

// export default Review