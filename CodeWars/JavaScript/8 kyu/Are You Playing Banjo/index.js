function areYouPlayingBanjo(name) {
  return name.charAt(0).toLowerCase() == 'r'
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}
