export default {
  locationsList(state) {
    const locations = state.regions;

    return locations.map((location) => {
      return {
        name: location.name,
        groups: location["version_groups"].map((group) => group.name),
      };
    });
  },
};
