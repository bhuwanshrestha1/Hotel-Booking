//Get /api/user/
export const getUserData = async (req, res) => {
  try {
    const role = req.user.role;
    const recentSearchCitites = req.user.recentSearchCitites;
    res.json({ success: true, role, recentSearchCitites });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

//Store User Recent Searched Cities
export const storeRecentSearchedCities = async (req, res) => {
  try {
    const { recentSearchedCity } = req.body;
    const user = req.user;

    // Ensure the field exists
    if (!user.recentSearchCitites) {
      user.recentSearchCitites = [];
    }

    if (user.recentSearchCitites.length < 3) {
      user.recentSearchCitites.push(recentSearchedCity);
    } else {
      user.recentSearchCitites.shift();
      user.recentSearchCitites.push(recentSearchedCity);
    }

    await user.save();

    res.json({ success: true, message: "City Added" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
