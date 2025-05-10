const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itinerarySchema = new Schema({
  tripId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trip", // Reference to the Trips model
    required: true,
  },
  days: [
    {
      dayNumber: {
        type: Number,
        required: true,
        min: 1, // Ensure dayNumber starts from 1
      },
      timeslots: [
        {
          time: {
            type: String, // e.g., "08:00 AM"
            required: true,
            match: /^([01]?[0-9]|2[0-3]):[0-5][0-9]\s?(AM|PM)$/i, // Regex for valid time format
          },
          location: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Location", // Reference to the Locations model
            required: function () {
              return !this.activity; // Require either location or activity
            },
          },
          activity: {
            type: String, // e.g., "Visit museum"
            required: function () {
              return !this.location; // Require either activity or location
            },
            maxlength: 200, // Limit activity description length
          },
        },
      ],
    },
  ],
  outfits: [
    {
      dayNumber: {
        type: Number,
        required: true,
        min: 1, // Ensure dayNumber matches the day in days array
      },
      outfit: {
        type: String, // e.g., "Casual wear"
        maxlength: 100, // Limit outfit description length
      },
      image: {
        type: String, // URL or path to the image
        validate: {
          validator: function (v) {
            return /^(http|https):\/\/[^ "]+$/.test(v); // Basic URL validation
          },
          message: "Invalid URL format for image",
        },
      },
    },
  ],
});

// Add pre-save hook to check for consistency between days and outfits
itinerarySchema.pre("save", function (next) {
  const dayNumbers = this.days.map((day) => day.dayNumber);
  const outfitDays = this.outfits.map((outfit) => outfit.dayNumber);

  // Ensure no duplicate day numbers in days
  if (new Set(dayNumbers).size !== dayNumbers.length) {
    return next(new Error("Duplicate day numbers found in days array"));
  }

  // Ensure no mismatch between days and outfits
  const mismatch = outfitDays.some((day) => !dayNumbers.includes(day));
  if (mismatch) {
    return next(
      new Error("Outfit day numbers must match the day numbers in days array")
    );
  }

  next();
});

module.exports = mongoose.model("Itinerary", itinerarySchema);
