
// Lặp lại "Logic 1" 4 lần nếu vẫn chưa trả lời đúng => hiển thị ra số chính xác

for (let i = 0; i < 4; i++) {

  // Logic 1: 
  // Hỏi user xem mình muốn thích bao nhiêu điểm du lịch?
  // prompt("Tôi muốn đi bao nhiêu điểm du lịch?");
  // User trả lời là X
  let userGuessNumber = prompt("Tôi muốn đi bao nhiêu điểm du lịch?"); // string
  // nếu X > 10 => too high
  // nếu X < 10 => too low
  // nếu X = 10 => correct + out chương trình
  if (Number(userGuessNumber) > 10) {

    console.log("Too high");

  } else if (Number(userGuessNumber) > 10) {

    console.log("Too high");

  } else if (Number(userGuessNumber) === 10) {

    console.log("Correct");

  }

}