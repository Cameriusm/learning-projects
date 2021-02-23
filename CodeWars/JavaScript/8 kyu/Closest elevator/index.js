function elevator(left, right, call) {
  return Math.abs(call - left) >= Math.abs(call - right) ? 'right' : 'left';
}
