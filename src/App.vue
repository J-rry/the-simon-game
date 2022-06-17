<template>
  <div id="app">
    <div class="container">
      <h1 class="h1-title">Simon Says</h1>
      <div class="score-info">
        <h2 class="h2-title">Round: {{round}}</h2>
        <h4 class="h2-title">Record: {{record}}</h4>
      </div> 
      <p v-if="lose" class="simon__status invalid">You Lose :(</p>
      <p v-else-if="isGameDisabled && !isButtonDisabled" class="simon__status valid">Start the game</p>     
      <p v-else class="simon__status">Good luck :)</p>
      <div class="simon">
        <div class="simon__item simon__game-place">
          <div class="simon__game" @click="theGame">
            <button 
            class="game_item simon__yellow"
            :style="addOpacity(yellowPush)"
            @click="yellowClick"            
            :disabled="isGameDisabled"
            data-number="0"
            ></button>
            <button 
            class="game_item simon__blue"
            :style="addOpacity(bluePush)"
            @click="blueClick"
            :disabled="isGameDisabled"
            data-number="1"
            ></button>
            <button 
            class="game_item simon__green"
            :style="addOpacity(greenPush)"
            @click="greenClick"
            :disabled="isGameDisabled"
            data-number="2"
            ></button>
            <button 
            class="game_item simon__red"
            :style="addOpacity(redPush)"
            @click="redClick"
            :disabled="isGameDisabled"
            data-number="3"
            ></button>
          </div>
        </div>
        <div class="simon__item simon__interface">
          <button 
          @click="startGame" 
          class="simon__start"
          :disabled="isButtonDisabled">Start</button>
          <div class="simon__level">
            <h3 class="h3-title">Difficulty:</h3>
            <div class="simon__radio">
              <label>
                  <input 
                  type="radio" 
                  class="radio"  
                  name="difficulty"
                  v-model="timeInterval"
                  :disabled="isButtonDisabled"
                  value="1500">
                  <span class="radio-label">Easy</span>
              </label>
          </div>
          <div class="simon__radio">
              <label>
                  <input 
                  type="radio" 
                  class="radio" 
                  name="difficulty"
                  v-model="timeInterval"
                  :disabled="isButtonDisabled"
                  value="1000">
                  <span class="radio-label">Normal</span>
              </label>
          </div>  
          <div class="simon__radio">
              <label class="radio__container">
                  <input 
                  type="radio" 
                  class="radio" 
                  name="difficulty"
                  v-model="timeInterval"
                  :disabled="isButtonDisabled"
                  value="400">
                  <span class="radio-label">Hard</span>
              </label>
          </div> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const simonSound1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
const simonSound2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
const simonSound3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
const simonSound4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

[simonSound1.playbackRate, simonSound2.playbackRate, simonSound3.playbackRate, simonSound4.playbackRate] = [3, 3, 3, 3];
[simonSound1.volume, simonSound2.volume, simonSound3.volume, simonSound4.volume] = [0.3, 0.3, 0.3, 0.3];



export default {
  name: 'App',
  data() {
    return {
      round: 1,
      record: 0,
      sequence: [],
      timeInterval: 1000,
      reloadInterval: 500,
      timeOfFlash: 300,
      itemNumber: 0,
      isButtonDisabled: false,
      isGameDisabled: true,
      yellowPush: false,
      bluePush: false,
      greenPush: false,
      redPush: false,
      lose: false,
      
    }
  },
  methods: {
    startGame() {
      const btn = Math.floor(Math.random() * 4);
      this.sequence.push(btn);

      this.lose = false;
      this.itemNumber = 0;
      
      this.isButtonDisabled = true;
      setTimeout(() => {
        this.isGameDisabled = false;
      }, this.sequence.length*this.timeInterval+this.timeOfFlash)

      this.sequence.forEach((el, id) => {
        setTimeout(() => {
          switch(el) {
            case 0: this.yellowPush = !this.yellowPush;
              simonSound1.play();            
              setTimeout(() => {
                this.yellowPush = !this.yellowPush;
              }, this.timeOfFlash);
              break;
            case 1: this.bluePush = !this.bluePush;
              simonSound2.play();           
              setTimeout(() => {
                this.bluePush = !this.bluePush;
              }, this.timeOfFlash);
              break;
            case 2: this.greenPush = !this.greenPush;
              simonSound3.play();           
              setTimeout(() => {
                this.greenPush = !this.greenPush;
              }, this.timeOfFlash);
              break;
            case 3: this.redPush = !this.redPush;
              simonSound4.play();           
              setTimeout(() => {
                this.redPush = !this.redPush;
              }, this.timeOfFlash);
              break;
            }
        }, (id+1)*this.timeInterval)
      });
    },
    theGame(e) {
      if(!this.sequence.length)
        return;

      const btnNumber = e.target.getAttribute('data-number');

      if(btnNumber != this.sequence[this.itemNumber]) {
        this.lose = true;
        this.sequence = [];
        this.round = 1;
        this.isGameDisabled = true;
        this.isButtonDisabled = false;
        return;
      }

      this.itemNumber++;
      
      if(this.itemNumber >= this.sequence.length) {
        this.round++;
        if(this.round > this.record)
          this.record = this.round;
        this.isGameDisabled = true;
        setTimeout(() => {
          this.startGame();
        }, this.reloadInterval);
        return;
      }        
    },
    
    addOpacity(color) {
      return `opacity: ${color ? '1' : '0.6'};
      ${color ? "" : "box-shadow: none;"}`;
    },
    
    yellowClick() {
      this.yellowPush = !this.yellowPush;
      simonSound1.play(); 
      setTimeout(() => {
        this.yellowPush = !this.yellowPush;
      }, this.timeOfFlash/3);
    },
    blueClick() {
      this.bluePush = !this.bluePush;
      simonSound2.play();
      setTimeout(() => {
        this.bluePush = !this.bluePush;
      }, this.timeOfFlash/3);
    },
    greenClick() {
      this.greenPush = !this.greenPush;
      simonSound3.play();
      setTimeout(() => {
        this.greenPush = !this.greenPush;
      }, this.timeOfFlash/3);
    },
    redClick() {
      this.redPush = !this.redPush;
      simonSound4.play();
      setTimeout(() => {
        this.redPush = !this.redPush;
      }, this.timeOfFlash/3);
    },
    
  },
  computed: {
  }
}
</script>

<style>
h1,h2,h3,h4,h5,h6 {
  margin: 0;
}

body {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #575757;
  color: #fff;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 20px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 80%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 15px;
}

.h1-title {
  margin-bottom: 40px;
  font-size: clamp(2rem, 3vw , 2.8rem);
}

.h2-title {
  font-size: clamp(1rem, 2vw , 1.8rem);
}

.h3-title {
  font-size: clamp(1rem, 2vw , 1.625rem);
  margin-bottom: 15px;
}

.score-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.simon__status {
  margin: 15px 0 40px 0;
  text-shadow: none;
  font-size: clamp(1.2rem, 2vw , 1.9rem);
  font-weight: 600;
  transition: color 0.3s;
}
.simon__status.valid {
  color: #66ff4d;
}
.simon__status.invalid {
  color: rgb(214, 28, 28);
}

.simon{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: clamp(20px, 6vw, 150px);
}

.simon__game-place {
  flex: 0 0 clamp(300px, 25vw ,25vw);
}

.simon__interface {
  text-align: left;
  flex: 0 0 25%;
}

.simon__game {
  position: relative;
  background-color: rgb(60, 54, 61);
  height: clamp(300px, 25vw ,25vw);
  display: flex;
  flex-wrap: wrap;
  border-radius: 50%;
}

.game_item  {
  flex: 0 0 50%;
  height: 50%;
  border: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: opacity 0.3s, box-shadow 0.3s;
}
.game_item:disabled {
  cursor: not-allowed;
}

.simon__yellow {
  background-color: #ffff42;
  border-radius: 100% 0 0 0 ;
  box-shadow: -8px -6px 9px 8px rgba(255, 255, 66, 0.2);
}
.simon__blue {
  background-color: #3a1cff;
  border-radius: 0 100% 0 0 ;
  box-shadow: 8px -9px 9px 8px rgba(58, 28, 255, 0.2);
}
.simon__green {
  background-color: #66ff4d;
  border-radius: 0 0 0 100% ;
  box-shadow: -9px 8px 9px 8px rgba(102, 255, 77, 0.2);
}
.simon__red {
  background-color: #ff3b1f;
  border-radius: 0 0 100% 0 ;
  box-shadow: 6px 8px 9px 8px rgba(255, 59, 31, 0.2);
}

.simon__start {
  font-size: clamp(1rem, 2vw , 1.625rem);
  padding: 0.7em 1.6em;
  color: #fff;
  background-color: rgb(77, 91, 216);
  border: none;
  cursor: pointer;
  border-radius: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  transition: background-color 0.3s;
}

.simon__start:hover {
  background-color: rgb(54, 70, 209);
}

.simon__start:disabled {
  background-color: rgb(204, 204, 204);
  cursor: not-allowed;
}

.simon__radio {
  margin-bottom: 12px;
}

.radio {
  margin: 0 5px;
}

.radio-label {
  font-size: clamp(0.8rem, 2vw , 1.25rem);
}
</style>
