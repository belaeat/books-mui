import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Chip,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={2}
      justifyContent="center"
      padding={2}
    >
      {books.map((book) => (
        <Card
          key={book.id}
          sx={{
            width: 300,
            flex: "1",
            margin: "8px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={book.img}
            alt={book.name}
          />
          <Box display="flex" flexWrap="wrap" mt={2} ml={2}>
            {book.genres.map((genre, index) => (
              <Chip key={index} label={genre} variant="outlined" />
            ))}
          </Box>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h6">{book.name}</Typography>
            <Typography variant="subtitle2" color="textSecondary">
              by {book.author}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              justifyContent: "space-between",
              textAlign: "center",
              padding: "16px",
            }}
          >
            <Box display="flex">
              {Array.from({ length: 5 }, (_, i) =>
                i < book.stars ? (
                  <StarIcon key={i} color="warning" />
                ) : (
                  <StarBorderIcon key={i} color="disabled" />
                )
              )}
            </Box>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}

export default App;
