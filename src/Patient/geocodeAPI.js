import axios from "axios";

const getPlaceNameFromCoordinates = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    );

    if (response.data && response.data.display_name) {
      return response.data.display_name;
    } else {
      return "Unknown Place";
    }
  } catch (error) {
    console.error("Error fetching place name:", error);
    return "Error occurred while fetching place name.";
  }
};

export default getPlaceNameFromCoordinates;
