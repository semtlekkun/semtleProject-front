<template>
    <v-container>
    <div 
        v-for="(comment, i) in comments"
        :key="i">
            <v-row justify="start" v-show="comment.name == writerName"><QuestionSpeechBubble :name="comment.name" :msg="comment.comment"></QuestionSpeechBubble></v-row>
            <v-row justify="end" v-show="comment.name != writerName"><AnswerSpeechBubble  :name="comment.name" :msg="comment.comment"></AnswerSpeechBubble></v-row>     
        </div>
        <input v-model="currentName" type="text">
        <p>현재작성자:{{currentName}}</p>
        <!-- 댓글작성 폼 나중에 form 형태로 변경 예정 -->
        <v-form 
            ref="form"
            v-model="valid"
            :lazy-validation="lazy"> 
            <table>
                <tr>
                    <td width="900">
                    <v-text-field label="댓글을 입력하세요" 
                    solo height="100"
                    v-model="currentComment"></v-text-field></td>
                    <td><v-btn 
    
                        @click="onUpload"
                        class="ma-2" color="indigo accent-2" dark
                        width="100" height="100"
                    >등록</v-btn></td>
                </tr>
                <tr><td colspan="2"><v-file-input accept=".txt" label="Select File... Only .txt"></v-file-input></td></tr>
            </table>
        </v-form>
    </v-container>
</template> 


<script>
import QuestionSpeechBubble from './QuestionSpeechBubble'
import AnswerSpeechBubble from './AnswerSpeechBubble'

export default {

  components: {
    QuestionSpeechBubble,
    AnswerSpeechBubble,
  },
  data: () => ({
    writerName:"18 전하영",
    currentName:"11 고인물",
    currentComment:'현재댓글',

    comments:[
        {
            name:"16 박건웅",
            comment:"vue.js 는 익숙해지면 진짜 쓰기 편할 것 같은데 ... "
        },
        {
            name:"18 전하영",
            comment:"이런부분을 잘 모르겠는데 추가적으로 답변 부탁드립니다..."
        },
        {
            name:"16 이정철",
            comment:"저는 알겠는데 건웅에겐 알려주고 싶지 않습니다."
        },
        {
            name:"16 김태호",
            comment:"새봄맞이로 오면 알려드리겠습니다."
        }
    ]
  }),
  methods:{
      onUpload (e){
        //form 의 새로고침 방지
        e.preventDefault();
        // 댓글을 등록할 유저의 이름을 현재 로그인한 유저의 이름으로 설정
        var name = this.currentName;
        var comment = this.currentComment;
        var Comment = {
            name: name,
            comment:comment
        }
        this.comments.push(Comment);
      }
  }
}
</script>