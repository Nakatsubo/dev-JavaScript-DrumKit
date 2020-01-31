// キーにイベントを追加
window.addEventListener('keydown', playSound, false);
function playSound(e) {
  // console.log(e);
  // => KeyboardEvent {isTrusted: true, key: "a", code: "KeyA", location: 0, ctrlKey: false, …}
  // console.log(e.keyCode);
  // => 65

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // console.log(audio);
  // => <audio data-key="65" src="sounds/clap.wav"></audio>

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // console.log(key);
  // => <audio data-key="65" src="sounds/clap.wav"></audio>

  // キーがなかったらreturn
  if (!audio) return;

  // ボタンを押す度に再生を停止
  audio.currentTime = 0;
  audio.play();

  // キーが押されたらクラスを付与
  key.classList.add('playing');
};

// キーが離れたらクラスを削除
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  // transitionend => トランジションが完了したタイミングで発生する
  key.addEventListener('transitionend', removeTransition);
});
function removeTransition(e) {
  // console.log(e);
  if (e.propertyName !== 'transform') return;
  // console.log(e.propertyName);
  this.classList.remove('playing');
};
