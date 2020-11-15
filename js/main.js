'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click',() => {
    const results = ['がんがん','キラ２','夏色','絵日記','切手','夏の王様','チェリー','手と手と','虹','青春','夢ジャン','さんぽ','君舵','スマイル','少年少女','宝物','ずんごろ節','陽気に','夢色','炎','ぼくひこ','ね','きみララ','いっぱいの思い出','雨の歌','歌はいつまでも','素敵な笑顔','忘れられない夏','ハローグッバイ','春一番'];
    btn.textContent = results[Math.floor(Math.random()*results.length)];
});
}