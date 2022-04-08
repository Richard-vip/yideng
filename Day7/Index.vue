<template>
  <div class="contaner">
    <div class="tabCon">
      <div class="tabItem active">选项卡1</div>
      <div class="tabItem">选项卡2</div>
    </div>
    <div class="tabBody">
      <div class="bodyCon">
        <br />
        <br />
        <br />
        <progress max="100" value="30"></progress>
        <br />
        <br />
        <br />
        <progress max="100" value="100"></progress>
        <br />
        <br />
        <br />
        <progress max="100" value="60"></progress>
      </div>
    </div>
  </div>
</template>
<style>
.contaner {
  width: 960px;
  min-height: 800px;
  display: flex;
  flex-direction: column;
}
.tabCon {
  max-height: 50px;
  min-height: 50px;
  display: flex;
}
.tabItem {
  width: 256px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #22222e;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-bottom: 2px solid #b04dff;
}
.tabItem::after {
  content: "";
  position: absolute;
  right: -15px;
  bottom: 0px;
  width: 21px;
  height: 40px;
  background: linear-gradient(
    to left bottom,
    transparent 0%,
    transparent 49.9%,
    #22222e 50.9%,
    #22222e 100%
  );
  pointer-events: none;
  z-index: 999;
}
.tabCon .active {
  border-top: 2px solid #b04dff;
  border-left: 2px solid #b04dff;
  border-right: 2px solid #b04dff;
  border-bottom: 2px solid transparent;
}
.tabCon .active::after {
  content: "";
  position: absolute;
  right: -18px;
  bottom: -2px;
  width: 20px;
  height: 40px;
  background: linear-gradient(
    to left bottom,
    transparent 0%,
    transparent 49.9%,
    rgba(148, 88, 255, 1) 50.9%,
    rgba(185, 88, 255, 1) 55.9%,
    #22222e 52%,
    #22222e 100%
  );
  pointer-events: none;
  z-index: 999;
}
.tabCon .active::before {
  content: "";
  position: absolute;
  bottom: -2px;
  height: 2px;
  width: 100%;
  background-color: #22222e;
  z-index: 999;
}
.tabBody {
  border-top-right-radius: 24px;
  flex-grow: 1;
  background: linear-gradient(rgba(148, 88, 255, 1) 0%, #22222e 20%);
  padding: 0 2px;
  box-shadow: 0 -2px 0px 0px #b04dff;
  display: flex;
}
.bodyCon {
  border-top-right-radius: 24px;
  flex-grow: 1;
  width: 100%;
  background-color: #22222e;
  padding: 0 24px;
}

progress {
  width: 669px;
  height: 10px;
  background-color: transparent;
}

/* 表示总长度背景色 */
progress::-webkit-progress-bar {
  border-radius: 5px;
  background-color: transparent;
}

/* 表示已完成进度背景色 */
progress::-webkit-progress-value {
  border-radius: 5px;
  background-image: linear-gradient(45deg, #385df2 0%, #c815ff 100%);
}
</style>