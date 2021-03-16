function htmlspecialchars(formData) {
  return formData.replace(
    /[<>"&]/g,
    (char) => ({ '<': '&lt;', '>': '&gt;', '"': '&quot;', '&': '&amp;' }[char])
  );
}
