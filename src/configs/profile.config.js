function getProfileItems() {
  const statistics = {
    icon: "statistic",
    title: "Статистика",
    name: "statistic",
    isActive: true,
  };

  const settings = {
    icon: "settings",
    title: "Налаштування",
    name: "settings",
    isActive: false,
  };

  const logout = {
    icon: "logout",
    title: "Вихід",
    name: "logout",
    isActive: false,
  };

  return [statistics, settings, logout];
}

export default {
  profileMenuItems: () => getProfileItems(),
};
