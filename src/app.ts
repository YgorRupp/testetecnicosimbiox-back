import express, { Application } from "express";
import cors from "cors";
import axios from "axios";

const app: Application = express();
app.use(cors());

const token = process.env.TOKEN;

app.get("/movies/:page", async (req, res) => {
  const page: number = parseInt(req.params.page);

  if (isNaN(page) || page < 1 || page > 500) {
    return res.status(400).json({
      error:
        "Página inválida. As páginas devem ser números inteiros entre 1 e 500.",
    });
  }

  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?page=${page}`,
      {
        headers,
      }
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao acessar a API externa" });
  }
});

app.get("/movie/:id", async (req, res) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const id = req.params.id;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        headers,
      }
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao acessar a API externa" });
  }
});

app.get("/movies/search/:text", async (req, res) => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const text = req.params.text;
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${text}`,
        {
          headers,
        }
      );
  
      const data = response.data;
      console.log(data);
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Erro ao acessar a API externa" });
    }
  });

app.use(express.json());

export default app;
