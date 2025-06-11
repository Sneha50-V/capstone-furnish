import React from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const { state } = useLocation();
  const selections = state?.selections || [];

  const imageMap = {
    "Living Room": [
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/86b75b154860633.63499a4bab28c.jpg", // Make sure this exists
        title: "Modern Living Room",
        bio: "Traditional",
        location: "Bangalore",
        rating: 4.5,
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/0c3391113455427.60281c5d7e3d8.jpg", // Make sure this exists
        title: "Cozy Living Room",
        bio: "Traditional",
        location: "Hyderabad",
        rating: 4.8,
      },
    ],
    // Add other selections...
  };
  const navigate = useNavigate();

  const handleProfileClick = (title) => {
    navigate(`/designer/${encodeURIComponent(title)}`);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ marginBottom: "2rem" }}>Your Selected Inspirations</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        {selections.flatMap((item) =>
          (imageMap[item] || []).map((img, idx) => (
            <Card
              key={`${item}-${idx}`}
              sx={{
                width: 300,
                position: "relative",
                borderRadius: 3,
                boxShadow: 3,
              }}
            >
              {/* Image Container */}
              <div style={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={img.src}
                  alt={img.title}
                  sx={{ borderRadius: "12px 12px 0 0", objectFit: "cover" }}
                />

                {/* Wishlist Icon */}
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 8,
                    left: 120,
                    color: "#f44336",
                    backgroundColor: "transparent",
                  }}
                  aria-label="wishlist"
                >
                  <FavoriteBorderIcon />
                </IconButton>

                {/* Rating */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 8,
                    right: 8,
                    backgroundColor: "rgba(0,0,0,0.6)",
                    padding: "4px 8px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    fontWeight: 500,
                    fontSize: "0.85rem",
                  }}
                >
                  <StarIcon
                    sx={{ color: "#FFD700", fontSize: "1rem", mr: 0.5 }}
                  />
                  {img.rating}
                </div>
              </div>

              {/* Card Text */}
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">
                  {img.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Style: {img.bio}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <LocationOnIcon sx={{ fontSize: "1rem", color: "#f44336" }} />
                  Location: {img.location}
                </Typography>
              </CardContent>

              {/* Button */}
              <Button
                variant="contained"
                color="success"
                sx={{
                  borderRadius: 0,
                  borderBottomLeftRadius: "12px",
                  borderBottomRightRadius: "12px",
                  textTransform: "none",
                }}
                onClick={() => handleProfileClick(img.title)}
              >
                View Profile
              </Button>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Gallery;
