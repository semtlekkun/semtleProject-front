<template>

  <div id="app">

    <img 
      @mouseover="logoHover" 
      @mouseleave="logoNoHover" 
      class="Logo" 
      src="../assets/logo.png" 
      role="button"
    />
    
    <ul 
    @mouseover="logoHover"
    @mouseleave="logoNoHover"
    :class="menuIsOpen?'Bar':'closeBar'">
      <li :class="menuIsOpen?'':'closeli'" class="bigMenu">공지사항</li>
      <li :class="menuIsOpen?'':'closeli'"
       @mouseover="projectHover" 
       @mouseleave="projectNoHover"
       class="bigMenu"
       >프로젝트
        <ul :class="projectIsOpen?'MiniBar':'closeMiniBar'">
          <li :class="projectIsOpen?'':'closeli'" class="smallMenu">공고</li>
          <li :class="projectIsOpen?'':'closeli'" class="smallMenu">등록</li>
        </ul>
      </li>
      <li :class="menuIsOpen?'':'closeli'" class="bigMenu">QnA</li>
    </ul>
    

  </div>

</template>

<script>
    export default {

        data(){
          return{
            menuIsOpen:false,
            projectIsOpen:false
          }
        },

        methods:{
          logoHover(){
            this.menuIsOpen=true;
          },
          logoNoHover(){
            this.menuIsOpen=false;
          },
          projectHover(){
            this.projectIsOpen=true;
          },
          projectNoHover(){
            this.projectIsOpen=false;
          }
        },


    }
</script>

<style scoped>
  .Logo{
    position: absolute;
    width: 130px;
    cursor: pointer;
  }
  .Bar{
    position: absolute;
    width: 500px;
    height: 34.45px;
    display: flex;
    padding: 0 50px;
    margin: 48.1px 0px 0px 120px;
    justify-content: space-between;
    background-color: rgb(46,117,182);
    color: white;
    border-radius: 5px;
    transition: .5s width;
    vertical-align: middle;
  }
  .closeBar{
    width: 0px;
  }
  .MiniBar{
    display: block;
    width: 150px;
    padding: 0;
    margin-top: 9px;
    border: 1.5px solid rgb(46, 117, 182);
    border-radius: 0 0 5px 5px;
    color:rgb(127,127,127)
  }
  .closeMiniBar{
    width: 0px;
  }

  li{
    list-style: none;
    text-align:center;
    cursor: pointer;
    margin-top: auto;
    margin-bottom: auto;
  }
  .bigMenu:hover{
    color:rgb(182,210,236);
  }
 
  .smallMenu:hover{
    color:rgb(46, 117, 182)
  }
  .closeli{
    display: none;
  }

</style>