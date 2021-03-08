// import React, { useState } from "react";
// import HomeModule from "../styles/Home.module.css";
// import firebase from "../config/fire-conf"

// const CreatePost = () => {
//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [content, setContent] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     firebase.firestore()
//   .collection('Blog')
//   .add({
//     title: title,
//     date: date,
//     content: content,
//   });
//     console.log({
//       "title=>": title,
//       "date=>": date,
//       "content=>": content,
//     });
//     setTitle("");
//     setContent("");
//   };

//   return (
//     <div className={HomeModule.container}>
//       <h2>Add Blog</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           Title
//           <br />
//           <input
//             type="text"
//             value={title}
//             onChange={({ target }) => setTitle(target.value)}
//           />
//         </div>
//         <div>
//           Content
//           <br />
//           <textarea
//             value={content}
//             onChange={({ target }) => setContent(target.value)}
//           />
//         </div>
//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// };
// export default CreatePost;
