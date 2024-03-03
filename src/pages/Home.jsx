import React from "react";
import "../styles/Home.css";
import { Button, Stack } from "@mui/material";
import vehicle from "../assets/dth-drilling-machine.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section className="left">
        <h1>Patel </h1>
        <h1>Borewells </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          facilis dolore nam possimus autem porro in, quisquam doloribus natus
          asperiores optio enim beatae deserunt perferendis eaque fuga corporis,
          sit veritatis.
        </p>
        <Stack direction="row" spacing={{ xs: 2, md: 4 }}>
          <Button variant="contained" color="error" size="medium">
            <Link to={"/services"}>Explore</Link>
          </Button>
          <Button variant="contained" color="primary" size="medium">
            <Link to={"/contact"}>Contact</Link>
          </Button>
        </Stack>
      </section>
      <section className="right">
        <img src={vehicle} alt="Vehicle" />
      </section>
    </main>
  );
};

export default Home;
