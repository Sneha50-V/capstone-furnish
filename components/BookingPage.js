// BookingPage.js
import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Rating,
  Slide,
  Snackbar,
  Avatar,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import "./BookingPage.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BookingPage = () => {
  const [bookings, setBookings] = useState([]);
  const [form, setForm] = useState({ name: "", date: "", time: "" });
  const [reviewOpen, setReviewOpen] = useState(false);
  const [currentBooking, setCurrentBooking] = useState(null);
  const [review, setReview] = useState({ rating: 0, comment: "" });
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleBook = (e) => {
    e.preventDefault();
    setBookings([
      ...bookings,
      { ...form, id: Date.now(), reviewed: false, review: null },
    ]);
    setForm({ name: "", date: "", time: "" });
    setSnackbar({ open: true, message: "Booking successful!" });
  };

  const handleOpenReview = (booking) => {
    setCurrentBooking(booking);
    setReviewOpen(true);
  };

  const handleSubmitReview = () => {
    setSubmitting(true);
    setTimeout(() => {
      setBookings(
        bookings.map((b) =>
          b.id === currentBooking.id
            ? { ...b, reviewed: true, review: { ...review } }
            : b
        )
      );
      setReviewOpen(false);
      setSnackbar({ open: true, message: "Review submitted!" });
      setReview({ rating: 0, comment: "" });
      setCurrentBooking(null);
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="booking-container">
      <h2>Book a Session</h2>
      <form onSubmit={handleBook} className="booking-form">
        <TextField
          label="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <TextField
          label="Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
        />
        <TextField
          label="Time"
          type="time"
          InputLabelProps={{ shrink: true }}
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
          required
        />
        <Button variant="contained" type="submit">
          Book Now
        </Button>
      </form>

      <h3>Your Bookings</h3>
      {bookings.length === 0 && <p>No bookings yet.</p>}
      <ul className="booking-list">
        {bookings.map((booking) => (
          <li key={booking.id} className="booking-item">
            <div>
              <strong>{booking.name}</strong> - {booking.date} at {booking.time}
            </div>
            {booking.reviewed ? (
              <Box mt={1}>
                <Typography variant="subtitle2">Review:</Typography>
                <Rating value={booking.review.rating} readOnly size="small" />
                <Typography variant="body2" mt={0.5}>
                  {booking.review.comment}
                </Typography>
              </Box>
            ) : (
              <Button
                variant="outlined"
                size="small"
                style={{ marginTop: 8 }}
                onClick={() => handleOpenReview(booking)}
              >
                Leave Review
              </Button>
            )}
          </li>
        ))}
      </ul>

      <Dialog
        open={reviewOpen}
        onClose={() => setReviewOpen(false)}
        TransitionComponent={Transition}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>
          <Box display="flex" alignItems="center" gap={1}>
            <Avatar sx={{ bgcolor: "#1976d2" }}>
              <StarIcon />
            </Avatar>
            Leave a Review
          </Box>
        </DialogTitle>
        <DialogContent>
          {currentBooking && (
            <Typography variant="subtitle2">
              For <b>{currentBooking.name}</b> on <b>{currentBooking.date}</b>{" "}
              at <b>{currentBooking.time}</b>
            </Typography>
          )}
          <Rating
            value={review.rating}
            onChange={(_, val) => setReview({ ...review, rating: val })}
            sx={{ fontSize: 34, mb: 1 }}
          />
          <TextField
            label="Comments"
            multiline
            minRows={3}
            fullWidth
            value={review.comment}
            onChange={(e) => setReview({ ...review, comment: e.target.value })}
            helperText={`${review.comment.length}/200`}
            inputProps={{ maxLength: 200 }}
            sx={{ mt: 2 }}
          />
          {submitting && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <CircularProgress size={28} />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setReview({ rating: 0, comment: "" })}
            color="secondary"
            disabled={submitting}
          >
            Clear
          </Button>
          <Button onClick={() => setReviewOpen(false)} disabled={submitting}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmitReview}
            variant="contained"
            disabled={
              review.rating === 0 || !review.comment.trim() || submitting
            }
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={2500}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </div>
  );
};

export default BookingPage;
