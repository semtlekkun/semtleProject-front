<template>

  <div id="app">

    <link rel="stylesheet" 
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" 
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" 
    crossorigin="anonymous">

    <nav class="navbar navbar-expand">
      <a class="navbar-brand" href="#">
        <img class="Logo" src="../assets/logo.png"/>
      </a>
      <button class="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="MenuBar collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">공지사항 <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">QnA</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" 
            href="#" 
            id="navbarDropdown" 
            type="button" 
            data-toggle="dropdown" 
            aria-haspopup="true"
            aria-expanded="false">
              프로젝트
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">공고</a>
              <a class="dropdown-item" href="#">등록</a>
            </div>
          </li>
        </ul>  
      </div>
    </nav>
    
    

  </div>

</template>

<script>
    export default {
        el: '#app',
        data:() => ({
        })
        
    }
</script>

<style scoped>
  .Logo{
    height: 100px;
    width: 100px;
  }
  .MenuBar{
    margin: -25px;
    height: 26.5px;
    width: 300px;
    max-width: none !important;
    background-color: rgb(46, 117, 182);
    color: white;
  }
</style>