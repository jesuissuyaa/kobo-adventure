const express = require("express");
const router = express.Router();
const talk = require("./talk");
let lostCounter = 0; // # of times user passed scene-lr1
const MAX_LOST = 3; // # of times user can pass scene-lr1

router.get("/gamestart", (req, res) => {
  res.clearFlags();
  res.publicFileSend(`gamestart.html`);
  talk(
    "ここはトランシルバニア。モンスターが持つという宝を求めて私はやってきた。"
  );
});

router.get("/phone", (req, res) => {
  res.publicFileSend(`scene-phone.html`);
  // talk(
  //   "ここはトランシルバニア。モンスターが持つという宝を求めて私はやってきた。"
  // );
});

router.get("/go-pick", (req, res) => {
  res.publicFileSend(`scene-go-pick.html`);
  // talk(
  //   "ここはトランシルバニア。モンスターが持つという宝を求めて私はやってきた。"
  // );
});

router.get("/pick", (req, res) => {
  res.publicFileSend(`scene-pick.html`);
  // talk(
  //   "ここはトランシルバニア。モンスターが持つという宝を求めて私はやってきた。"
  // );
});

router.get("/lr1", (req, res) => {
  lostCounter++;
  if (lostCounter > MAX_LOST) {
    res.redirect("/gameover");
  }
  res.publicFileSend(`scene-lr1.html`);
  // talk(
  //   "ここはトランシルバニア。モンスターが持つという宝を求めて私はやってきた。"
  // );
});

router.get("/lr2", (req, res) => {
  res.publicFileSend(`scene-lr2.html`);
  // talk(
  //   "ここはトランシルバニア。モンスターが持つという宝を求めて私はやってきた。"
  // );
});

router.get("/lr3", (req, res) => {
  res.publicFileSend(`scene-lr3.html`);

  // talk(
  //   "ここはトランシルバニア。モンスターが持つという宝を求めて私はやってきた。"
  // );
});

router.get("/drop", (req, res) => {
  res.publicFileSend(`scene-drop.html`);
  // talk(
  //   "ここはトランシルバニア。モンスターが持つという宝を求めて私はやってきた。"
  // );
});

router.get("/gameclear", (req, res) => {
  if (req.getFlag("get-sword")) {
    res.publicFileSend(`gameclear.html`);
    talk("やった！モンスターを倒して宝箱を手に入れたぞ！");
  } else {
    res.redirect("/gameover");
  }
});

router.get("/gameover", (req, res) => {
  res.publicFileSend(`gameover.html`);
  talk("モンスターにやられてしまった！");
});
/* yamagame code */

router.get("/scene-1", (req, res) => {
  res.publicFileSend(`scene-1.html`);
  talk("道が続いている。どうする？");
});

router.get("/scene-2", (req, res) => {
  if (req.getFlag("get-key")) {
    res.redirect("/scene-4");
  } else {
    res.publicFileSend(`scene-2.html`);
    talk("カギが落ちている。どうする？");
  }
});

router.get("/scene-3", (req, res) => {
  res.publicFileSend(`scene-3.html`);
  talk("道は左右に分かれている。どちらに進む？");
});

router.get("/scene-4", (req, res) => {
  res.setFlag("get-key");
  res.publicFileSend(`scene-4.html`);
  talk("道が続いている。どうする？");
});

router.get("/scene-5", (req, res) => {
  res.publicFileSend(`scene-5.html`);
  talk("道は左右に分かれている。どちらに進む？");
});

router.get("/scene-6", (req, res) => {
  res.publicFileSend(`scene-6.html`);
  talk("モンスターが現れた！どうする？");
});

router.get("/scene-7", (req, res) => {
  res.publicFileSend(`scene-7.html`);
  talk("道は左右に分かれている。どちらに進む？");
});

router.get("/scene-8", (req, res) => {
  if (req.getFlag("get-key")) {
    res.publicFileSend(`scene-8.html`);
    talk("扉がある。どうする？");
  } else {
    res.redirect("/scene-9");
  }
});

router.get("/scene-9", (req, res) => {
  res.publicFileSend(`scene-9.html`);
  talk("扉がある。カギがかかっていて進めない。");
});

router.get("/scene-10", (req, res) => {
  res.publicFileSend(`scene-10.html`);
  talk("道は左右に分かれている。どちらに進む？");
});

router.get("/scene-11", (req, res) => {
  res.setFlag("get-sword");
  res.publicFileSend(`scene-11.html`);
  talk("道が続いている。どうする？");
});

router.get("/scene-12", (req, res) => {
  if (req.getFlag("get-key")) {
    res.publicFileSend(`scene-12.html`);
    talk("剣が落ちている。どうする？");
  } else {
    res.redirect("/scene-11");
  }
});

// router.get('/gamestart', (req, res) => {
//   res.clearFlags()
//   res.publicFileSend(`gamestart.html`)
//   talk('ここはトランシルバニア。モンスターが持つという宝を求めて私はやってきた。');
// })

// router.get('/gameclear', (req, res) => {
//   if (req.getFlag('get-sword')) {
//     res.publicFileSend(`gameclear.html`)
//     talk('やった！モンスターを倒して宝箱を手に入れたぞ！');
//   } else {
//     res.redirect('/gameover')
//   }
// })

// router.get('/gameover', (req, res) => {
//   res.publicFileSend(`gameover.html`)
//   talk('モンスターにやられてしまった！')
// })

module.exports = router;
