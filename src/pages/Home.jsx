import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const userName = localStorage.getItem("firstName");

  return (
    <div style={{ padding: '20px', textAlign: 'center', marginTop: '20vh' }}>
      <motion.h1
        style={{ marginTop: "20px" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to the Book Exchange Platform
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Hello, {userName}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        This is the place where you can exchange books with others in the community.
      </motion.p>
    </div>
  );
};

export default Home;
