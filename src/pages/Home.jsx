import React from "react";
import "../styles/Home.css";
import { Button, Stack } from "@mui/material";
import vehicle from "../assets/borewell-malappuram2-1280x720.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section className="left">
        <h1>Patel </h1>
        <h1>Borewells </h1>
        <p>
          Empowering India's agriculture and households, our tubewell business
          guarantees a steady supply of vital water for flourishing crops and
          daily needs. We are dedicated to being a reliable lifeline, supporting
          communities and contributing to India's growth and prosperity.
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
